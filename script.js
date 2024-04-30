document.addEventListener('DOMContentLoaded', function () {
  // Handle header click to change its color
  const header = document.querySelector('header h1');
  header.addEventListener('click', function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    header.style.color = randomColor;
  });

  // Load promotions from a hypothetical JSON file
  loadPromotions();

  // Setup form submission handling
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message!');
  });
});

// Function to dynamically load promotions into the servicesList
function loadPromotions() {
  fetch('services.json')
    .then(response => response.json())
    .then(data => {
      const servicesList = document.getElementById('servicesList');
      data.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'col-lg-4 mb-4';
        serviceCard.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${service.title}</h5>
              <p class="card-text">${service.description}</p>
            </div>
          </div>
        `;
        servicesList.appendChild(serviceCard);
      });
    })
    .catch(error => console.error('Error loading the promotions:', error));
}

// Function to open a popup window
function openPopup(imageUrl) {
  var width = 600;
  var height = 400;
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  var popupWindow = window.open(imageUrl, 'ImagePopup', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);
  if (popupWindow) {
    popupWindow.focus();
  }
}
