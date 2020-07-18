import background from '../assets/images/fontPlants.svg'

const data = {
  title : 'main.home',
  text : `
    Crear un jardín de Suculentas requiere atención y cuidado.<br>
    Aquí encontraras las diferentes clasificaciones de estas plantas, sus propiedades y cuidado.<br>
    Anímate a comenzar tu jardín de Suculentas con Nosotros!<br>
  `,
  background: background
}

const Text = () => {
  const view = `
  <!-- seccion de texto -->
  <section class="text opacity-back">
    <img src=${data.background} />
    <h1>
    ${data.text}
    </h1>
  </section>
  `;
  return view
}


export default Text;