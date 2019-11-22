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
