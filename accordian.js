document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {

            // Check if the clicked button's accordion is currently open
            let isAlreadyOpen = this.parentElement.classList.contains('accordion__label_open');

            // Remove active-item and accordion__label_open from all labels
            buttons.forEach(innerButton => {
                innerButton.parentElement.classList.remove('active-item');
                innerButton.parentElement.classList.remove('accordion__label_open');
                innerButton.closest('.accordion-content').querySelector('.active-container').style.maxHeight = '0';
            });

            // If the clicked button's accordion wasn't already open, open it.
            if (!isAlreadyOpen) {
                this.parentElement.classList.add('active-item');
                this.parentElement.classList.add('accordion__label_open');
                this.closest('.accordion-content').querySelector('.active-container').style.maxHeight = '1000px';
            }
        });
    });
});
