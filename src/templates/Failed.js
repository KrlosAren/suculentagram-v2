import failedImg from '../assets/images/5.jpg'


const Failed = () => {
  const view = `
  <div class="failed">
  <img src=${failedImg} alt="">
  <h2>
    No pudimos procesar su pago. Lo sentimos . <a href="#/">Regresar</a>
  </h2>
</div>`;
  return view;
}

export default Failed