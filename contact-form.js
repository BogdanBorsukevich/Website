  document.getElementById('burger').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('show');
  });

  const items = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  items.forEach(item => observer.observe(item));


  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  burger.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
  });

  
const errorBlock = document.querySelector('.error-container');
const mainContent = document.getElementById('main-content');
const backButton = document.querySelector('.back-button');

function showError() {
  if (errorBlock && mainContent) {
    errorBlock.classList.remove('hidden');
    errorBlock.classList.add('visible');
    mainContent.style.display = 'none';
    window.scrollTo(0, 0);
  }
}

function hideError() {
  if (errorBlock && mainContent) {
    errorBlock.classList.remove('visible');
    errorBlock.classList.add('hidden');
    mainContent.style.display = 'block';
  }
}

if (!navigator.onLine) {
  showError();
}

window.addEventListener('offline', showError);
window.addEventListener('online', hideError);

fetch('photos/logo.jpg')
  .then(res => {
    if (!res.ok) throw new Error('Bad response');
  })
  .catch(() => showError());

if (backButton) {
  backButton.addEventListener('click', (e) => {
    if (!navigator.onLine) {
      e.preventDefault();
      alert('Немає зʼєднання з інтернетом. Перевірте підключення.');
    }
  });
}
