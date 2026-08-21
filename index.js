document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('auth-modal');
  const closeBtn = document.getElementById('close-auth-modal');
  
  // Attach event listeners to header/drawer Auth buttons
  document.querySelectorAll('.btn-login, .nav-link.auth-link:nth-child(1)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openAuthModal('login');
    });
  });

  document.querySelectorAll('.btn-signup, .nav-link.auth-link:nth-child(2)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openAuthModal('signup');
    });
  });

  // Close modal events
  closeBtn.addEventListener('click', closeAuthModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeAuthModal();
  });
});

function openAuthModal(mode) {
  switchAuthTab(mode);
  document.getElementById('auth-modal').classList.add('active');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('active');
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('modal-login-form');
  const signupForm = document.getElementById('modal-signup-form');
  const loginTab = document.getElementById('tab-login-btn');
  const signupTab = document.getElementById('tab-signup-btn');

  if (tab === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
  } else {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
  }
}

function handleAuthSubmit(event, type) {
  event.preventDefault();
  alert(`${type} submitted successfully!`);
  closeAuthModal();
}