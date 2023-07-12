document.addEventListener('DOMContentLoaded', function() {
    // Отримати посилання на backdrop та модальне вікно
    let backdrop = document.querySelector('.js-backdrop');
    let modal = document.querySelector('.modal');
  
    // Функція, що закриває модальне вікно
    function closeModal() {
      backdrop.classList.remove('show'); 
      modal.style.transform = 'scale(0)'; // Змінити масштаб модального вікна

    }

  
    // Обробник події кліку на кнопку "Закрити"
   let closeButton = document.querySelector('[data-action="close-modal"]');
    closeButton.addEventListener('click', closeModal);
  
    // Обробник події кліку на кнопку "Відкрити модалку"
   let openButton = document.querySelector('[data-action="open-modal"]');
    openButton.addEventListener('click', function() {
      backdrop.classList.add('show'); // Додати клас 'show' для відображення backdrop
      modal.style.transform = 'scale(1)'; // Змінити масштаб модального вікна

    });
  });