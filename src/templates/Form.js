
const Form = () => {
  return (`
  <form action="#/comunidad">
    <span class="form__formulario--name">
      <input type="text" name="firstname" id="firstname" placeholder="Firstname">
      <input type="text" name="lastname" id="lastname" placeholder="Lastname">
      <input type="email" name="email" id="email" placeholder="Email">
      <input type="text" name="twitter" id="twitter" placeholder="Twitter">
      <label for="imagen" class="upload">
        <input type="file" name="imagen" id="imagen">
        Upload profile picture
      </label>
      <span class="form__formulario--terms">
        <input type="checkbox" name="terminos" id="terminos">
        <label for="terminos">I accept the <b> terms of service </b> and the <b> privacy policy </b></label>
      </span>
      <input type="submit" value="Enviar" class="button-primary" id='send'>
    </span>
  </form>
  `);
};

export default Form;
