// ===== Mobile nav toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('nav-links-open');
    });
  }

  // Mobile: tap "Products" to expand the mega menu instead of hover
  const megaItem = document.querySelector('.nav-item-mega');
  if (megaItem) {
    const trigger = megaItem.querySelector('.mega-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 860) {
          e.preventDefault();
          megaItem.classList.toggle('mega-open');
        }
      });
    }
  }

  // ===== Background videos: only play while in view (perf + battery friendly) =====
  const bgVideos = document.querySelectorAll('.bg-video');
  if ('IntersectionObserver' in window && bgVideos.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      });
    }, { threshold: 0.15 });
    bgVideos.forEach(v => io.observe(v));
  }
});
