const Comunidad = () => {
  const view = `
    <div class="comunidad">
      <div class=content__comunidad>
        <h1>Comunidad Suculentagram</h1>
        <div class="form">
          <div class="form__bagde"
            <span class="form__bagde--header">
              <p>Suculentagram</p>
            </span>
              <span class="form__badge--user">
                <img src="https://dummyimage.com/60x60/28287a/fff" alt="avatar">
                <span>
                  <p>FirstName</p>
                  <p>LastName</p>
                </span>
              </span>
          </div>
          <div class="form__formulario">
            <span class="form__formulario--name">
              <input type="text" name="firstname" id="firstname" placeholder="Firstname">
              <input type="text" name="lastname" id="lastname" placeholder="Lastname">
              <input type="email" name="email" id="email" placeholder="Email">
              <input type="text" name="username" id="username" placeholder="Username">
              <input type="text" name="twitter" id="twitter" placeholder="Twitter">
              <label for="imagen" class="upload">
                <input type="file" name="imagen" id="imagen">
                Upload profile picture
              </label>
              <span class="form__formulario--terms">
                <input type="checkbox" name="terminos" id="terminos">
                <label for="terminos">I accept the <b> terms of service </b> and the <b> privacy policy </b></label> 
              </span>
              <input type="submit" value="Enviar" class="button-primary">
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Comunidad;
