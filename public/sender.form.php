<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "phpmailer/src/exception.php";
    require "phpmailer/src/phpmailer.php";

    $response = ["success" => false, "message" => ""];

    try {
        // Получаем и санируем данные
        $name = htmlspecialchars($_POST["name"] ?? '', ENT_QUOTES, 'UTF-8');
        $phone = htmlspecialchars($_POST["phone"] ?? '', ENT_QUOTES, 'UTF-8');
        $email = filter_var($_POST["email"] ?? '', FILTER_VALIDATE_EMAIL);
        $produce = htmlspecialchars($_POST["produce"] ?? '', ENT_QUOTES, 'UTF-8');

        // Проверяем валидность email
        if (!$email) {
            $response["message"] = "Некорректный email";
            throw new Exception("Invalid email");
        }

        // Проверка совпадения телефона и начала email
        // Убираем из телефона всё, кроме цифр
        $cleanPhone = preg_replace('/[^0-9]/', '', $phone);

        // Если телефон не пустой и email начинается с цифр телефона — это спам
        if (!empty($cleanPhone) && strpos($email, $cleanPhone) === 0) {
            // Логируем подозрительную заявку
            error_log("Suspicious spam attempt: phone='$phone', email='$email'");

            $response["message"] = "Заявка отклонена: подозрительное совпадение данных";
            http_response_code(400);
            echo json_encode($response);
            exit;
        }

        $mail = new PHPMailer(true);
        $mail->CharSet = "UTF-8";
        $mail->IsHTML(true);

        // Загружаем и обрабатываем шаблон
        $email_template = "sender-tpl.html";

        if (!file_exists($email_template)) {
            throw new Exception("Template file not found");
        }

        $body = file_get_contents($email_template);
        $body = str_replace('%name%', $name, $body);
        $body = str_replace('%phone%', $phone, $body);
        $body = str_replace('%email%', $email, $body);
        $body = str_replace('%produce%', $produce, $body);

        $mail->addAddress("info@ktmcranes.ru");
        $mail->addAddress("twohouse@yandex.ru");
        $mail->setFrom("no-reply@ktmcranes.ru");
        $mail->Subject = "КТМ: заявка";
        $mail->MsgHTML($body);

        // Отправляем письмо
        if (!$mail->send()) {
            throw new Exception("Mail send failed: " . $mail->ErrorInfo);
        }

        $response["success"] = true;
        $response["message"] = "Заявка отправлена";

        } catch (Exception $e) {
            $response["message"] = "Ошибка отправки: " . $e->getMessage();
            http_response_code(500);
    }

    header('Content-type: application/json');
    echo json_encode($response);
?>
