import getId from   '../utils/getId.js'
import getData from '../utils/getData.js';

const Payment = async () => {
  const id = getId();
  const photo = await getData(id);
  let description = photo.url.split('/')[4].split('-');
  description.pop()
  const view = `
  <section class="product">
  <div class="product__details">
    <div class="product__details--img">
      <figure>
        <img src="${photo.src.original}" alt="${photo.photographer}">
      </figure>
    </div>
    <div class="product__details--text">
      <label>
      Nombre:<br>
      <input type="text"   />
      </label>
      <label>
      Correo:<br>
      <input type="email"  />
      </label>
      <label>
      Telefono:<br>
      <input type="phone"  />
      </label>
      <span class="product--button">
        <a href="/#successfull">
          <button>
          Pagar
          </button>
        </a>
      </span>
    </div>
  </div>
</section>
  `;
  return view;
}

export default Payment;