import logo from '../assets/images/Logo2.svg'


const data = {

  logo: [
    {
      href: '#/',
      title: logo,
    }
  ],
  menu: [
    {
      href: '#/comunidad',
      title: 'Comunidad'
    },
    {
      href: '#/blog',
      title: 'Blog'
    },
    {
      href: '#/products',
      title: 'Productos'
    },
  ]
}

const Header = () => {
  const view = `
  <!-- menu de navegacion  -->
    <nav class="header fadeIn-top">
      <div class="header__left">
      ${data.logo.map(logoMenu => `
          <a href=${logoMenu.href}>
          <img src=${logoMenu.title}  />
          </a>
          `).join("")}
      </div>
      <div class="header__right">
        <ul>
        ${data.menu.map(link => `
          <li>
            <a href=${link.href}>${link.title}</a>
          </li>
          `).join("")}
        </ul>
      </div>
    </nav>
  `;
  return view;
}

export default Header;