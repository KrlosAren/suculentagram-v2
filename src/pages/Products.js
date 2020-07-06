import getData from '../utils/getData.js'

const Products = async () => {
  const plants = await getData();
  const view = `
  <main class="container--main">
    <div class="container--filter fadeIn">
      <div class="filter">
        <div class="filter--sections">
          <a href="../index.html">
            <h3>
              All / Plants
            </h3>  
          </a>
        </div>
        <div class="filter--search">
          <a href="/public/detailProduct.html">
            <h3>
              Filter / Search 
            </h3>
          </a>
        </div>
      </div>
    </div>
    
    <!-- seccion de texto -->
    <section class="header--text fadeInLeft">
      <h1>
        Aprendamos un poco más de las nuestras plantas.<br>
        En cada producto encontraras una pequeña descripción de cada una.<br>
      </h1>
    </section>
    
    <!-- card clasificacion -->
    
    <section class="main--products">
    ${plants.photos.map((plant) => `
    <a href="/#:id/${plant.id}" class="products--cards"/>
      <figure class="product__image">
        <img src="${plant.src.original}" alt="${plant.photographer}" />
      </figure>
      <span class="product__image--info__text">
        <span class="text--name">${plant.photographer}</span>
        <span class="text--price">$ 13.00</span>
        <span class="text--button">
          <button>Detalles</button>
        </span>
      </span>
    </a>
    <!-- final cards -->
    `)
      .join("")}
    </section>
    </main>`;
  return view;
}



export default Products;
