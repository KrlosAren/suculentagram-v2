import getCurrentUrl from '../utils/getCurrentUrl.js'


// Function to return text of header, can be better.
const textHeader = (currentUrl) => {
  if (currentUrl === '/products') {
    const data = {
      title: 'products',
      text: `
      Aqui podras encontrar una variedad extensa de Suculentas. <br>
      Podras revisar cada una, ver sus caracteristicas y asi decidir cual quieres tener. <br>
      ¡Comienza tu jardín de Suculentas con nosotros, y dale ese toque fantástico a tu Casa! <br>

      `,
    }
    return data
  } else {
    const data = {
      title: 'home',
      text: `
        Crear un jardín de Suculentas requiere atención y cuidado.<br>
        Aquí encontraras las diferentes clasificaciones de estas plantas, sus propiedades y cuidado.<br>
        Anímate a comenzar tu jardín de Suculentas con Nosotros!<br>
      `,
    }
    return data
  }
}

const Text = () => {
  const currentUrl = getCurrentUrl()
  const data = textHeader(currentUrl)
  const view = `
  <!-- seccion de texto -->
  <section class="text opacity-back">
    <h1>
    ${data.text}
    </h1>
  </section>
  `;
  return view
}


export default Text;