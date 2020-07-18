
import successfullImg from '../assets/images/2.jpg'

const Successful = () => {
  const view = `
  <div class="successfull">
    <img src=${successfullImg} alt="">
    <h2>
      Su Compra ha sido Exitosa, Muchas Gracias. <a href="/">Regresar</a>
    </h2>
  </div>
  `;
  return view;
}

export default Successful;