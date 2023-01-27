new Splide('.splide', {
  autoplay: true,
  pagination: false,
  gap: '16px',
  mediaQuery: 'min',
  padding: {
    left: 16,
    right: 16
  },
  breakpoints: {
    768: {
      perPage: 2,
      gap: '32px',
      fixedWidth: 330,
      padding: {
        left: 32,
        right: 32
      },
    },
    1280: {
      fixedWidth: 528,
      gap: '64px',
      perPage: 2,
      padding: {
        left: 192,
        right: 32
      },
    }
  }
}).mount();