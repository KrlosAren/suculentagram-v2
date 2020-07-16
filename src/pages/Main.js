import img2 from '../assets/images/2.jpg'
import img7 from '../assets/images/7.jpg'
import img5 from '../assets/images/5.jpg'

import partners1 from '../assets/images/partners-1.svg'
import partners2 from '../assets/images/partners-2.svg'
import partners3 from '../assets/images/partners-3.svg'
import partners4 from '../assets/images/partners-4.svg'
import partners5 from '../assets/images/partners-5.svg'
import partners6 from '../assets/images/partners-6.svg'



const sections = [
  {
    title: 'Blog',
    href:  '/#/blog.html',
    img:   img2,
    alt: 'blog',
  },
  {
    title: 'Productos',
    href:  '/#/products',
    img:   img5,
    alt: 'productos',
  },
  {
    title: 'Comunidad',
    href:  '/#/comunidad.html',
    img:   img7,
    alt: 'comunidad',
  },
]

const partners = [
  {
    href: '/',
    image: partners1,
    alt: 'partner-1',
  },
  {
    href: '/',
    image: partners2,
    alt: 'partner-2',
  },
  {
    href: '/',
    image: partners3,
    alt: 'partner-3',
  },
  {
    href: '/',
    image: partners4,
    alt: 'partner-4',
  },
  {
    href: '/',
    image: partners5,
    alt: 'partner-5',
  },
  {
    href: '/',
    image: partners6,
    alt: 'partner-6',
  },
]

const Main = () => {
  const view = `
  <section class="main--types">
  <!-- products cards -->
    <section class="container__products ">
    ${sections.map( section => `
    <div class="section fadeIn-left">
      <a href="${section.href}">
        <figure class="section__img">
          <img src="${section.img}" alt="${section.alt}">
        </figure>
        <span class="section__overlay">
          <p>${section.title}</p>
        </span>
      </a>
    </div>
    `).join("")}
    </section>
    <!-- final products -->
        <!-- Inicio partners -->
    <section class="container__partners fadeIn-right">
    ${partners.map( partner => `
      <article class="partners">
        <a href="${partner.href}">
          <figure>
            <img src="${partner.image}" alt="${partner.alt}"
          </figure>
        </a>
      </article>
        `).join("")}
    </section>
  </section>
<!-- partners fin -->
`;
  return view;
}


export default Main;