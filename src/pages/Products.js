import getData from '../utils/getData.js'


const randomNumber = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
}

const Products = async () => {
  const plants = await getData();
  const view = `
  <main class="product">
    <!-- <div class="container--filter fadeIn">
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
    </div> -->
    
    <!-- seccion de texto -->
    <!-- <section class="header--text fadeInLeft">
      <h1>
        Aprendamos un poco más de las nuestras plantas.<br>
        En cada producto encontraras una pequeña descripción de cada una.<br>
      </h1>
    </section> -->
    
    <!-- card clasificacion -->
    
    <section class="product__card">
    ${plants.photos.map((plant) => `
    <a href="/#:id/${plant.id}" >
        <img src="${plant.src.original}" alt="${plant.photographer}" />
      <span class="product__content">
        <h3>${plant.photographer}</h3>
        <h3>$${randomNumber(10, 35)}</h3>
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
