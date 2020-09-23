import getId from '../utils/getId';
import getPhotoFromCache from '../utils/getPhotoFromCache';
import Photo from '../templates/Photo';

const Details = async () => {
  const { idUser } = getId();
  const photo = await getPhotoFromCache(idUser);
  const description = photo.url.split('/')[4].split('-');
  description.pop();
  const view = `
  <section class="detail">
    <span class="detail__src">
    ${Photo(photo)}
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
};

export default Details;

