// Popover functionality
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('digital-scout-btn');
  const popover = document.getElementById('digital-scout-popover');
  const closeBtn = document.getElementById('digital-scout-close');

  if (btn && popover && closeBtn) {
    // Toggle popover on button click
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      popover.classList.toggle('hidden');
    });

    // Close popover on close button click
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      popover.classList.add('hidden');
    });

    // Close popover when clicking outside
    document.addEventListener('click', function(e) {
      if (!popover.contains(e.target) && !btn.contains(e.target) && !popover.classList.contains('hidden')) {
        popover.classList.add('hidden');
      }
    });
  }
});
