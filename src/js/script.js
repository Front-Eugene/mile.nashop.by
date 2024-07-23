// Get all elements with the class "slider-btn"
const sliderButton = document.querySelectorAll('.slider-btn');

// Add click event listeners to each button
sliderButton.forEach(button => {
  button.addEventListener('click', () => {
    // Remove "btn-active" class from all buttons
    sliderButton.forEach(btn => {
      btn.classList.remove('btn-active');
    });

    // Add "btn-active" class to the clicked button
    button.classList.add('btn-active');
  });
});

const btn1 = document.querySelector('.btn-1'),
      btn2 = document.querySelector('.btn-2'),
      btn3 = document.querySelector('.btn-3'),
      btn4 = document.querySelector('.btn-4'),
      btn5 = document.querySelector('.btn-5');

const box1 = document.querySelector('.box-1'),
      box2 = document.querySelector('.box-2'),
      box3 = document.querySelector('.box-3'),
      box4 = document.querySelector('.box-4'),
      box5 = document.querySelector('.box-5');

      function toggleBoxActive() {
        if (btn1.classList.contains('btn-active')) {
          box1.classList.add('box-active');
        } else {
          box1.classList.remove('box-active');
        }
      
        if (btn2.classList.contains('btn-active')) {
          box2.classList.add('box-active');
        } else {
          box2.classList.remove('box-active');
        }
      
        if (btn3.classList.contains('btn-active')) {
          box3.classList.add('box-active');
        } else {
          box3.classList.remove('box-active');
        }
      
        if (btn4.classList.contains('btn-active')) {
          box4.classList.add('box-active');
        } else {
          box4.classList.remove('box-active');
        }
      
        if (btn5.classList.contains('btn-active')) {
          box5.classList.add('box-active');
        } else {
          box5.classList.remove('box-active');
        }
      }
      
      // Get all elements with the class "slider-btn"
      const sliderButtons = document.querySelectorAll('.slider-btn');
      
      // Attach click event listener to each button
      sliderButtons.forEach(button => {
        button.addEventListener('click', () => {
          toggleBoxActive();
        });
      });