import getId from '../utils/getId';
import getPhotoFromCache from '../utils/getPhotoFromCache';
import Photo from '../templates/Photo';

const Payment = async () => {
  const { idUser } = getId();
  const photo = await getPhotoFromCache(idUser);
  const description = photo.url.split('/')[4].split('-');
  description.pop();
  const view = `
  <section class="detail">
    <span class="detail__src">
    ${Photo(photo)}
    </span>
    <span class="payment__content">
        <input type="text" name="name" id="name" placeholder="Name" >
        <input type="text" name="lastname" id="lastname" placeholder="Lastname" >
        <input type="email" name="email" id="email" placeholder="Email" >
        <input type="text" name="message" id="message" placeholder="Message" >
        <a href="#/successfull">
          <button>La Quiero</button>
        </a>
    </span>
</section>
  `;
  return view;
};

export default Payment;
