
const filter = [
  {
    href: window.history.back(),
    title: 'Volver'
  },
  {
    href: window.history,
    title: 'Siguiente'
  },
]


const navegation = () => {
  const view = `
  <div class="container--filter fadeIn">
    <div class="filter">
    ${filter.map(navegation => `
    <div class="filter--sections">
      <a href=${navegation.href}>
        <h3>
          ${navegation.title}
        </h3>
      </a>
    </div>
    `).join("")}
    </div>
</div>
  `;
  return view;
}
