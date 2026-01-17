// Navigation configuration - single source of truth
// Order is consistent across all pages
const navItems = [
  { href: 'index.html', icon: 'fas fa-home', text: 'Home' },
  { href: 'podcasts.html', icon: 'fas fa-podcast', text: 'Podcasts' },
  { href: 'library.html', icon: 'fas fa-book', text: 'Library' },
  { href: 'https://www.linkedin.com/in/jordanbaucke', icon: 'fab fa-linkedin', text: 'LinkedIn' },
  { href: 'https://github.com/jordanbaucke', icon: 'fab fa-github', text: 'GitHub' },
  { href: 'mailto:jordan.baucke@gmail.com', icon: 'fas fa-envelope', text: 'Email' },
  { href: 'https://t.me/jordanbaucke', icon: 'fab fa-telegram', text: 'Telegram' }
];

function loadNavigation() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Build navigation - same on all pages
  nav.innerHTML = navItems
    .map(item => `<a href="${item.href}"><i class="${item.icon}"></i> ${item.text}</a>`)
    .join('');
}

// Load navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
  loadNavigation();
}

// Popover functionality
function initPopover() {
  const popoverBtn = document.getElementById('aiboy-popover-btn');
  const popover = document.getElementById('aiboy-popover');
  const closeBtn = document.getElementById('aiboy-close-btn');

  if (!popoverBtn || !popover || !closeBtn) return;

  popoverBtn.addEventListener('click', () => {
    popover.classList.toggle('hidden');
  });

  closeBtn.addEventListener('click', () => {
    popover.classList.add('hidden');
  });

  // Close popover when clicking outside
  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && !popoverBtn.contains(e.target)) {
      popover.classList.add('hidden');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPopover);
} else {
  initPopover();
}
