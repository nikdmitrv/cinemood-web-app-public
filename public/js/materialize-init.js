document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems);
});
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.dropdown-trigger.main');
  const instances = M.Dropdown.init(elems, {
    hover: true,
    coverTrigger: false,
    constrainWidth: false,
  });
});
// document.addEventListener('DOMContentLoaded', () => {
//   const elems = document.querySelectorAll('.dropdown-trigger.side');
//   const instances = M.Dropdown.init(elems, { coverTrigger: false });
// });
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
});
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelector('.tabs');
  const instances = M.Tabs.init(elems);
});
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelector('.carousel');
  const instances = M.Carousel.init(elems, {
    dist: 0,
    indicators: true,
  });
});
