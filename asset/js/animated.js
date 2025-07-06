document.addEventListener('DOMContentLoaded', function () {
  const isIndex = window.location.pathname.endsWith('ourwork.html') || window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
  const isDesktop = window.innerWidth >= 768;

  if (!isIndex) return;

  const bg = document.querySelector('.animated-index-bg');
  const main = document.querySelector('.animated-index-main');
  const header = document.querySelector('.animated-index-header');
  const footer = document.querySelector('.animated-index-footer');

  if (isDesktop) {
    // Step 1: Background zoom-in
    if (bg) {
      setTimeout(() => {
        bg.classList.add('in');
      }, 100);
    }

    // Step 2: Main content fade
    if (main) {
      setTimeout(() => {
        main.classList.add('in');
      }, 1600);
    }

    // Step 3: Header and Footer slide in
    if (header) {
      setTimeout(() => {
        header.classList.add('in');
        footer.classList.add('in');
      }, 2600);
    }

    if (footer) {
      setTimeout(() => {
        header.classList.add('in');
        footer.classList.add('in');
      }, 2600);
    }


  } else {
    // Mobile/tablet: langsung tampil semua tanpa animasi
    [bg, main, header, footer].forEach(el => {
      if (el) el.classList.add('in');
    });
  }
});
