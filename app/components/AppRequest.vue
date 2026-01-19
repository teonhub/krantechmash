<script setup>

    import { watch } from 'vue';
    import { Fancybox } from '@fancyapps/ui';

    const { isVisible, close } = useFeedback();

    watch(isVisible, (newValue) => {
        if (newValue) {
            Fancybox.show([
                {
                    src: '#feedback-application',
                    type: 'inline',
                    dragToClose: false,
                }
            ], {
            closeButton: false,
            on: {
                    close: () => {
                    close();
                }
            }
        });
        } else {
            Fancybox.close();
        }
    });

</script>

<template>
    <div class="modal-feedback">
        <div id="feedback-application" class="modal-layout">
            <h5>Оставить заявку</h5>
            <form name="form" method="post" action="sender.form.php">
                <label>Ваше имя</label>
                <input type="text" name="name" class="modal-content" placeholder="Ваше имя" aria-label="Введите ваше имя" />
                <label>Ваше имя</label>
                <input type="text" name="phone" class="modal-content" placeholder="Ваш номер телефона" aria-label="Введите ваш номер телефон" data-reg="^((\+7|7|8)+([0-9]){10})$" />
                <label>Ваше имя</label>
                <input type="text" name="email" class="modal-content" placeholder="Электронная почта" aria-label="Введите ваш адрес электронной почты" />
            <p>Нажимая кнопку "Отправить", я даю своё согласие на обработку указанных мной персональных данных в соответствии с <NuxtLink to="/agreement">пользовательским соглашением</NuxtLink></p>
            <div class="btns-layout">
                <button class="btn-form" type="button" @click="close">Закрыть</button>
                <button class="btn-form" type="submit" name="submit">Отправить</button>
            </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

.modal-feedback {
    display: none;
}

.modal-layout {
    width: 600px;
    box-sizing: border-box;
    padding: 50px;
    border-radius: 30px;
}

.modal-layout h5 {
    text-align: center;
    font-family: 'Condens';
    text-transform: uppercase;
    font-size: 72px;
    font-weight: 100;
    line-height: 72px;   
    margin: 40px 0;
}

.modal-layout label {
    font-size: 0;
    padding: 0;
    margin: 0;
}

.modal-layout .modal-content {
    border: 1px solid #ddd;
    border-radius: 4px;
    display: block;
    font-size: 15px;
    font-family: "PT Mono", serif;
    height: 58px;
    margin: 0 0 10px 0;
    padding: 5px 15px 0;
    width: 100%;    
}

.modal-layout p {
    font-size: 13px;
    font-family: "PT Mono", serif;
    line-height: 21px;
    padding: 20px 0 40px 0;
}

.modal-layout p a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #111;
    padding-bottom: 1px;
}

.modal-layout .btns-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-layout button.btn-form {
    width: 200px; height: 52px;
    text-decoration: none;
    box-sizing: border-box;
    background-color: #000;
    color: #fff;
    line-height: 52px;
    border-radius: 6px;
    font-size: 14px;
    font-family: "PT Mono", serif;
    transition: all 0.3s ease-in-out 0s;
}

.modal-layout button.btn-form:hover {
    cursor: pointer;
    background-color: #1d55cd;
    transition: all 0.3s ease-in-out 0s;
}

.modal-layout button.btn-form:first-child {
    background-color: #f1f1f1;
    color: #000;
}

@media (max-width: 575.98px) {
    .modal-layout {
        width: 100%;
        padding: 30px;
    }
    .modal-layout h5 {
        font-size: 62px;
        margin: 5px 0;
    }
    .modal-layout .modal-content {
        height: 52px;
        margin: 0 0 5px 0;
        font-size: 14px;
    }
    .modal-layout p {
        font-size: 12px;
        line-height: 18px;
        padding: 20px 0 30px 0;
    }
    .modal-layout button.btn-form {
        height: 48px;
        line-height: 48px;
        margin-top: 10px;
        font-size: 13px;
    }
    .modal-layout button.btn-form:first-child{
        width: 100px;
    }
}

</style>