import getId from   '../utils/getId.js'
import getData from '../utils/getData.js';

const Details = async () => {
  debugger
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
      <span class="product--name">
      Photographer: ${photo.photographer}
      </span>
      <span class="product--clasification">
        Medidas: ${photo.height} x ${photo.width} pixels
      </span>
      <div class="product--description">
        Descripcion:<br>
        <ul>
        ${description.join(' ')}
        </ul>
      </div>
      <span class="product--button">
        <a href="/#payment/${photo.id}">
          <button>La Quiero</button>
        </a>
      </span>
    </div>
  </div>
</section>
  `;
  return view;
}

export default Details;