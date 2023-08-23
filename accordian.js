document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.closest('.accordion-content').classList.toggle('active-item');
            let content = this.closest('.accordion-content').querySelector('.active-container');
            if(content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
