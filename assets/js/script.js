'use strict';

const elementToggleFunc = (elem) => elem.classList.toggle('active');

/* Sidebar contacts toggle */
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
const sidebarInfoMore = document.querySelector('.sidebar-info_more');

if (sidebarBtn && sidebarInfoMore) {
  sidebarBtn.addEventListener('click', () => {
    const isOpen = sidebarInfoMore.classList.toggle('is-open');
    sidebarBtn.setAttribute('aria-expanded', String(isOpen));
    const label = isOpen ? 'Hide Contacts' : 'Show Contacts';
    const icon = isOpen ? 'chevron-up' : 'chevron-down';
    sidebarBtn.innerHTML = `<span>${label}</span><ion-icon name="${icon}" aria-hidden="true"></ion-icon>`;
  });
}

/* Testimonials modal (optional) */
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

if (modalContainer && modalCloseBtn && overlay) {
  const testimonialsModalFunc = () => {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  testimonialsItem.forEach((item) => {
    item.addEventListener('click', () => {
      const avatar = item.querySelector('[data-testimonials-avatar]');
      const title = item.querySelector('[data-testimonials-title]');
      const text = item.querySelector('[data-testimonials-text]');
      if (modalImg && avatar) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
      }
      if (modalTitle && title) modalTitle.innerHTML = title.innerHTML;
      if (modalText && text) modalText.innerHTML = text.innerHTML;
      testimonialsModalFunc();
    });
  });

  modalCloseBtn.addEventListener('click', testimonialsModalFunc);
  overlay.addEventListener('click', testimonialsModalFunc);
}

/* Project filter select */
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = (selectedValue) => {
  const normalized = selectedValue.toLowerCase().trim();
  filterItems.forEach((item) => {
    const category = (item.dataset.category || '').toLowerCase();
    const show = normalized === 'all' || normalized === category;
    item.classList.toggle('active', show);
    item.style.display = show ? '' : 'none';
  });
};

if (select && selectValue) {
  select.addEventListener('click', () => {
    elementToggleFunc(select);
    const list = select.nextElementSibling;
    if (list) list.classList.toggle('active');
  });

  selectItems.forEach((item) => {
    item.addEventListener('click', () => {
      const selectedValue = item.innerText.toLowerCase();
      selectValue.innerText = item.innerText;
      elementToggleFunc(select);
      const list = select.parentElement?.querySelector('.select-list');
      if (list) list.classList.remove('active');
      filterFunc(selectedValue);
    });
  });
}

let lastClickedBtn = filterBtn[0] || null;

filterBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const selectedValue = btn.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = btn.innerText;
    filterFunc(selectedValue);
    filterBtn.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    lastClickedBtn = btn;
  });
});

/* Contact form validation */
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formBtn) {
  const validateForm = () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute('disabled');
    } else {
      formBtn.setAttribute('disabled', '');
    }
  };

  formInputs.forEach((input) => input.addEventListener('input', validateForm));
  validateForm();
}

/* Page navigation */
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    const pageName = link.textContent.trim().toLowerCase();

    pages.forEach((page) => {
      const isActive = page.dataset.page === pageName;
      page.classList.toggle('active', isActive);
    });

    navigationLinks.forEach((navLink) => {
      const isActive = navLink === link;
      navLink.classList.toggle('active', isActive);
      navLink.setAttribute('aria-current', isActive ? 'page' : 'false');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    /* Animate skill bars when resume is shown */
    if (pageName === 'resume') {
      animateSkillBars();
    }
  });
});

/* Mobile navbar */
const toggleButton = document.querySelector('.navbar-toggle');
const navbarList = document.querySelector('.navbar-list');

if (toggleButton && navbarList) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navbarList.classList.toggle('active');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navbarList.classList.remove('active');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

/* Scroll reveal */
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add('is-visible'));
}

/* Skill progress bars */
const skillFills = document.querySelectorAll('.skill-progress-fill');
let skillsAnimated = false;

function animateSkillBars() {
  if (skillsAnimated) return;
  skillFills.forEach((fill) => fill.classList.add('is-animated'));
  skillsAnimated = true;
}

if (skillFills.length && 'IntersectionObserver' in window) {
  const skillsSection = document.querySelector('.skills-progress-section');
  if (skillsSection) {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars();
            skillObserver.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    skillObserver.observe(skillsSection);
  }
}

/* Initial filter state */
filterFunc('all');
