import logo from '../assets/images/Logo2.svg'


const data = {

  logo: [
    {
      href: '/',
      title: logo,
    }
  ],
  menu: [
    {
      href: '/#/comunidad',
      title: 'Comunidad'
    },
    {
      href: '/#/Blog',
      title: 'Blog'
    },
    {
      href: '/#/products',
      title: 'Productos'
    },
  ]
}

const Header = () => {
  const view = `
  <!-- menu de navegacion  -->
    <nav class="menu fadeIn-top">
      <div class="menu--logo">
      ${data.logo.map(logoMenu => `
          <a href=${logoMenu.href}>
          <img src=${logoMenu.title}  />
          </a>
          `).join("")}
      </div>
      <div class="menu--links">
        <ul class="links--list">
        ${data.menu.map(link => `
          <li>
            <a href=${link.href}>${link.title}</a>
          </li>
          `).join("")}
        </ul>
      </div>
    </nav>
<!-- seccion de texto -->
<section class="header--text header--background opacity-back">
  <h1>
    Crear un jardín de Suculentas requiere atención y cuidado.<br>
    Aquí encontraras las diferentes clasificaciones de estas plantas, sus propiedades y cuidado.<br>
    Anímate a comenzar tu jardín de Suculentas con Nosotros!<br>
  </h1>
</section>
  `;
  return view;
}

export default Header;