
const sections = [
  {
    title: 'Blog',
    href:  'blog.html',
    img:   '../src/assets/images/2.jpg',
    alt: 'blog',
  },
  {
    title: 'Productos',
    href:  '/#products',
    img:   '../src/assets/images/5.jpg',
    alt: 'productos',
  },
  {
    title: 'Comunidad',
    href:  'comunidad.html',
    img:   '../src/assets/images/7.jpg',
    alt: 'comunidad',
  },
]

const partners = [
  {
    href: 'index.html',
    image: '../src/assets/images/partners-1.svg',
    alt: 'partner-1',
  },
  {
    href: 'index.html',
    image: '../src/assets/images/partners-2.svg',
    alt: 'partner-1',
  },
  {
    href: 'index.html',
    image: '../src/assets/images/partners-3.svg',
    alt: 'partner-1',
  },
  {
    href: 'index.html',
    image: '../src/assets/images/partners-4.svg',
    alt: 'partner-1',
  },
  {
    href: 'index.html',
    image: '../src/assets/images/partners-5.svg',
    alt: 'partner-1',
  },
  {
    href: 'index.html',
    image: '../src/assets/images/partners-6.svg',
    alt: 'partner-1',
  },
]


const Main = () => {
  const view = `
  <section class="section">
  <!-- products cards -->
    <section class="page">
    ${sections.map( section => `
    <div class="page__card fadeIn-left">
      <a href="${section.href}">
        <figure>
          <img src="${section.img}" alt="${section.alt}">
        </figure>
        <span class="page__content">
          <p>${section.title}</p>
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