import getId from   '../utils/getId.js'
import getPhotoFromCache from   '../utils/getPhotoFromCache'


const Payment = async () => {
  
  const id = getId();
  const photo = await getPhotoFromCache(id);
  let description = photo.url.split('/')[4].split('-');
  description.pop()
  const view = `
  <section class="detail">
    <span class="detail__src">
      <figure>
        <img src="${photo.src.landscape}" alt="${photo.photographer}">
      </figure>
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
}

export default Payment;