export const useFeedback = () => {
    const isVisible = useState('feedback-visible', () => false)
    
    function open() {
        isVisible.value = true
    }
    
    function close() {
        isVisible.value = false
    }
    
    return {
        isVisible, open, close
    }
}