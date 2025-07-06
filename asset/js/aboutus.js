document.addEventListener('DOMContentLoaded', function () {
    const isIndex = window.location.pathname.endsWith('aboutus.html');
    const isDesktop = window.innerWidth >= 768;
  
    if (!isIndex) return;
  
    const main = document.querySelector('.animated-index-main');
    const header = document.querySelector('.animated-index-header');
    const footer = document.querySelector('.animated-index-footer');
  
    if (isDesktop) {
  
      // Step 1: Main content fade
      if (main) {
        setTimeout(() => {
          main.classList.add('in');
        }, 1600);
      }
  
      // Step 2: Header and Footer slide in
      if (header) {
        setTimeout(() => {
          header.classList.add('in');
          footer.classList.add('in');
        }, 2600);
      }
  
    } else {
      // Mobile/tablet: langsung tampil semua tanpa animasi
      [main, header].forEach(el => {
        if (el) el.classList.add('in');
      });
    }
  });
  