document.addEventListener('DOMContentLoaded', () => {
  // Close top promo banner
  const closeBtn = document.getElementById('close-banner-btn');
  const banner = document.getElementById('promo-banner');

  if (closeBtn && banner) {
    closeBtn.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  }

  // Toggle "What you'll learn" extra items
  const toggleBtn = document.getElementById('toggle-learn-btn');
  const toggleText = document.getElementById('toggle-text');
  const toggleIcon = document.getElementById('toggle-icon');
  const extraItems = document.querySelectorAll('.extra-item');

  let isExpanded = true;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;

      extraItems.forEach(item => {
        if (isExpanded) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });

      if (isExpanded) {
        toggleText.textContent = 'Show less';
        toggleIcon.className = 'fa-solid fa-chevron-up text-xs';
      } else {
        toggleText.textContent = 'Show more';
        toggleIcon.className = 'fa-solid fa-chevron-down text-xs';
      }
    });
  }

  // Course Content Accordion Toggle Logic
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  const toggleAllBtn = document.getElementById('toggle-all-sections');
  let allSectionsExpanded = true;

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector('.accordion-arrow');

      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        arrow.className = 'fa-solid fa-chevron-up accordion-arrow text-xs text-gray-700';
      } else {
        content.classList.add('hidden');
        arrow.className = 'fa-solid fa-chevron-down accordion-arrow text-xs text-gray-700';
      }
    });
  });

  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
      allSectionsExpanded = !allSectionsExpanded;

      accordionHeaders.forEach(header => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector('.accordion-arrow');

        if (allSectionsExpanded) {
          content.classList.remove('hidden');
          arrow.className = 'fa-solid fa-chevron-up accordion-arrow text-xs text-gray-700';
        } else {
          content.classList.add('hidden');
          arrow.className = 'fa-solid fa-chevron-down accordion-arrow text-xs text-gray-700';
        }
      });

      toggleAllBtn.textContent = allSectionsExpanded ? 'Collapse all sections' : 'Expand all sections';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const descriptionWrapper = document.getElementById('description-wrapper');
  const showMoreBtn = document.getElementById('show-more-btn');
  const showMoreIcon = document.getElementById('show-more-icon');

  if (showMoreBtn && descriptionWrapper) {
    showMoreBtn.addEventListener('click', () => {
      const isCollapsed = descriptionWrapper.classList.contains('collapsed');

      if (isCollapsed) {
        descriptionWrapper.classList.remove('collapsed');
        descriptionWrapper.classList.add('expanded');
        showMoreBtn.querySelector('span').textContent = 'Show less';
        showMoreIcon.className = 'fa-solid fa-chevron-up text-xs';
      } else {
        descriptionWrapper.classList.remove('expanded');
        descriptionWrapper.classList.add('collapsed');
        showMoreBtn.querySelector('span').textContent = 'Show more';
        showMoreIcon.className = 'fa-solid fa-chevron-down text-xs';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const descWrapper = document.getElementById('description-wrapper');
  const toggleBtn = document.getElementById('description-toggle-btn');
  const arrowIcon = document.getElementById('description-arrow');

  if (toggleBtn && descWrapper) {
    toggleBtn.addEventListener('click', () => {
      const isCollapsed = descWrapper.classList.contains('collapsed');

      if (isCollapsed) {
        descWrapper.classList.remove('collapsed');
        descWrapper.classList.add('expanded');
        toggleBtn.querySelector('span').textContent = 'Show less';
        arrowIcon.className = 'fa-solid fa-chevron-up text-xs';
      } else {
        descWrapper.classList.remove('expanded');
        descWrapper.classList.add('collapsed');
        toggleBtn.querySelector('span').textContent = 'Show more';
        arrowIcon.className = 'fa-solid fa-chevron-down text-xs';
      }
    });
  }
});

// Toggle logic for "Students also bought" section
const toggleBoughtBtn = document.getElementById('toggle-bought-btn');
const extraBoughtCourses = document.getElementById('extra-bought-courses');

if (toggleBoughtBtn && extraBoughtCourses) {
  toggleBoughtBtn.addEventListener('click', () => {
    const isHidden = extraBoughtCourses.classList.contains('hidden');

    if (isHidden) {
      extraBoughtCourses.classList.remove('hidden');
      toggleBoughtBtn.textContent = 'Show less';
    } else {
      extraBoughtCourses.classList.add('hidden');
      toggleBoughtBtn.textContent = 'Show more';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Dynamically calculate FBT section totals
  const fbtCards = document.querySelectorAll('.fbt-card');
  const totalPriceElement = document.getElementById('fbt-total-price');
  const totalOriginalElement = document.getElementById('fbt-total-original');
  const cartBtn = document.getElementById('fbt-cart-btn');

  if (fbtCards.length > 0 && totalPriceElement && totalOriginalElement) {
    let totalPrice = 0;
    let totalOriginal = 0;

    fbtCards.forEach(card => {
      const price = parseFloat(card.getAttribute('data-price')) || 0;
      const original = parseFloat(card.getAttribute('data-original')) || 0;

      totalPrice += price;
      totalOriginal += original;
    });

    // Update total text displays
    totalPriceElement.textContent = `₹${totalPrice.toLocaleString('en-IN')}.00`;
    totalOriginalElement.textContent = `₹${totalOriginal.toLocaleString('en-IN')}.00`;
  }

  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      alert('Courses added to cart successfully!');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Helpful/Unhelpful Feedback Button Interactions
  const reviewCards = document.querySelectorAll('.review-card');

  reviewCards.forEach(card => {
    const likeBtn = card.querySelector('.like-btn');
    const dislikeBtn = card.querySelector('.dislike-btn');

    if (likeBtn && dislikeBtn) {
      likeBtn.addEventListener('click', () => {
        const isActive = likeBtn.classList.contains('active');
        likeBtn.classList.toggle('active');
        dislikeBtn.classList.remove('active');

        // Toggle icon state between solid and regular
        const icon = likeBtn.querySelector('i');
        if (icon) {
          icon.className = !isActive ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
        }
        const dislikeIcon = dislikeBtn.querySelector('i');
        if (dislikeIcon) {
          dislikeIcon.className = 'fa-regular fa-thumbs-down';
        }
      });

      dislikeBtn.addEventListener('click', () => {
        const isActive = dislikeBtn.classList.contains('active');
        dislikeBtn.classList.toggle('active');
        likeBtn.classList.remove('active');

        // Toggle icon state between solid and regular
        const icon = dislikeBtn.querySelector('i');
        if (icon) {
          icon.className = !isActive ? 'fa-solid fa-thumbs-down' : 'fa-regular fa-thumbs-down';
        }
        const likeIcon = likeBtn.querySelector('i');
        if (likeIcon) {
          likeIcon.className = 'fa-regular fa-thumbs-up';
        }
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Footer interactive controls
  const cookieBtn = document.getElementById('cookie-settings-btn');
  const langBtn = document.getElementById('lang-selector-btn');

  if (cookieBtn) {
    cookieBtn.addEventListener('click', () => {
      alert('Cookie preferences modal opened.');
    });
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      alert('Language selector modal opened.');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-toggle-btn');
  const closeNavBtn = document.getElementById('close-nav-btn');
  const sideNav = document.getElementById('side-navigation');
  const backdrop = document.getElementById('drawer-backdrop');

  const openNav = () => {
    sideNav?.classList.add('open');
    backdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    sideNav?.classList.remove('open');
    backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuBtn?.addEventListener('click', openNav);
  closeNavBtn?.addEventListener('click', closeNav);
  backdrop?.addEventListener('click', closeNav);
});