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
    href: '/index.html',
    image: partners1,
    alt: 'partner-1',
  },
  {
    href: '/index.html',
    image: partners2,
    alt: 'partner-2',
  },
  {
    href: '/index.html',
    image: partners3,
    alt: 'partner-3',
  },
  {
    href: '/index.html',
    image: partners4,
    alt: 'partner-4',
  },
  {
    href: '/index.html',
    image: partners5,
    alt: 'partner-5',
  },
  {
    href: '/index.html',
    image: partners6,
    alt: 'partner-6',
  },
]

const Main = () => {
  const view = `
  <section class="home">
  <!-- products cards -->
    <section class="main">
    ${sections.map( section => `
    <div class="main__sections fadeIn-left">
      <a href="${section.href}">
        <figure>
          <img src="${section.img}" alt="${section.alt}">
        </figure>
        <span class="main__overlay">
          <h2>${section.title}</h2>
        </span>
      </a>
    </div>
    `).join("")}
    </section>
    <!-- final products -->
        <!-- Inicio partners -->
    <section class="partner fadeIn-right">
    ${partners.map( partner => `
      <article class="partner__card">
        <a href="${partner.href}">
            <img src="${partner.image}" alt="${partner.alt}" />
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