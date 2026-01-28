// Timeline functionality for appearances page
(function() {
  'use strict';

  // Timeline data - add new entries at the top (most recent first)
  const timelineData = [
    {
      year: 2024,
      month: 'March',
      title: 'Podcast Interview - Salesforce Journey and Career Insights',
      description: 'Interview discussing my journey with Salesforce since 2008, experiences in startups and enterprise, certifications, burnout awareness, and advice for engineers starting their careers.',
      videoId: '9mXU-4nW0rY'
    }
  ];

  function renderTimeline() {
    const container = document.querySelector('.timeline-items');
    if (!container) return;

    let currentYear = null;
    let html = '';

    timelineData.forEach((entry, index) => {
      // Add year marker if this is the first entry of a new year
      if (entry.year !== currentYear) {
        html += `<div class="timeline-year-marker">${entry.year}</div>`;
        currentYear = entry.year;
      }

      // Build entry HTML
      html += `
        <div class="timeline-item" data-year="${entry.year}" data-month="${entry.month}">
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
            <div class="timeline-month">${entry.month}</div>
          </div>
          <div class="timeline-content">
            <h3>${entry.title}</h3>
            ${entry.description ? `<p>${entry.description}</p>` : ''}
            ${entry.videoId ? `
              <div class="timeline-video">
                <iframe 
                  src="https://www.youtube.com/embed/${entry.videoId}" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // Initialize timeline when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderTimeline);
  } else {
    renderTimeline();
  }
})();
