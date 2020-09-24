import Badge from '../templates/Badge';
import Form from '../templates/Form';

const Comunidad = () => {

  return (`
  <div class="comunidad">
  <div class=content__comunidad>
  <h1>Badge Suculentagram</h1>
  <div class="form">
  ${Badge()}
  <div class="form__formulario">
  ${Form()}
  </div>
  </div>
  </div>
  </div>
  `);
};

export default Comunidad;
