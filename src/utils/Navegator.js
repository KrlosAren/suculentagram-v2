
const historyBack = () => {
  history.back()
}

const historyForward = () => {
  history.forward()
}

const filter = [
  {
    history: history.back,
    title: 'Volver'
  },
  {
    history: historyForward,
    title: 'Siguiente'
  },
]

const Navegator = () => {
  const view = `
  <div class="container--filter fadeIn">
    <div class="filter">
    ${filter.map(navegation => `
    <div class="filter--sections">
      <button onclick="${navegation.history}()">
        <h3>
          ${navegation.title}
        </h3>
      </button>
    </div>
    `).join("")}
    </div>
</div>
  `;
  return view;
}

export default Navegator;