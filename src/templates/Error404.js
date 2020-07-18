
import ErrorImg from '../assets/images/5.jpg'

const Error404 = () => {
  const view = `
  <div class="error">
  <img src=${ErrorImg} alt="" class="fadeIn-top">
  <h1 class="fadeIn-right">
    Error 404
  </h1>
  <h2>
    Lo Sentimos no Encontramos lo que buscabas. <a href="/">Regresar</a>
  </h2>
</div>
  `;
  return view;
}

export default Error404;