import getId from   '../utils/getId.js'
import getData from '../utils/getData.js';

const Details = async () => {
  debugger
  const id = getId();
  const photo = await getData(id);
  let description = photo.url.split('/')[4].split('-');
  description.pop()
  const view = `
  <section class="detail">
    <span class="detail__src">
      <figure>
        <img src=${photo.src.original} alt="${photo.photographer}">
      </figure>
    </span>
    <span class="detail__content">
      <h2>
        Photographer: 
      </h2>
        <h3>
          ${photo.photographer}
        </h3>
        <h2>
          Medidas: 
        </h2>
          <h3>
            ${photo.height} x ${photo.width} pixels
          </h3>
        <h2>
          Descripcion:
        </h2>
        <h3>
          ${description.join(' ')}
        </h3>
        <a href="#/payment/${photo.id}">
          <button>La Quiero</button>
        </a>
    </span>
</section>
  `;
  return view;
}

export default Details;