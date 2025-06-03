const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path.includes('product.html')) {
    fetch('jsonfiles/products.json')
      .then(res => res.json())
      .then(products => {
        const container = document.querySelector('.container');
        products.forEach(item => {
          container.innerHTML += `
            <div class="card">
              <img src="${item.image}" alt="${item.title}">
              <h3>${item.title}</h3>
              <p>${item.description.replace(/\n/g, '<br>')}</p>
              <div class="harga">${item.price}</div>
              <div class="btnproduk">
                <button>Get!</button>
              </div>
            </div>
          `;
        });
      });
  }

  if (path.includes('service.html')) {
    fetch('jsonfiles/services.json')
      .then(res => res.json())
      .then(services => {
        const main = document.querySelector('main');
        main.innerHTML = '';
        services.forEach(service => {
          main.innerHTML += `
            <section class="service">
              <h2>${service.title}</h2>
              <p>${service.description}</p>
              <button>Pilih Layanan</button>
            </section>
          `;
        });
      });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('jsonfiles/reviews.json')
    .then(res => res.json())
    .then(reviews => {
      const track = document.querySelector('.review-track');
      const sizeClass = track.dataset.size || 'medium';

      for (let i = 0; i < 2; i++) {
        reviews.forEach(review => {
          const card = document.createElement('div');
          card.className = `review-card card-size-${sizeClass}`;
          card.innerHTML = `
            <img src="${review.image}" alt="user" class="review-img">
          `;
          track.appendChild(card);
        });
      }
    });
});