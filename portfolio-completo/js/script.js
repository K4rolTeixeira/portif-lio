const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
        el.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, 200);
        });
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, 600);
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = 'Mensagem enviada! ✓';
    btn.style.background = '#059669';
    btn.style.boxShadow = '0 0 30px rgba(5,150,105,0.4)';
    setTimeout(() => {
      btn.textContent = 'Enviar mensagem →';
      btn.style.background = '';
      btn.style.boxShadow = '';
    }, 3000);
  }

  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    const pos = window.scrollY + 100;
    document.querySelectorAll('section[id]').forEach(sec => {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + sec.id ? 'var(--accent)' : '';
        });
      }
    });
  });