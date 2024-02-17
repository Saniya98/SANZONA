import data from "../data.js"; //importing data from data.js
const HomeScreen = {
  //example of object with a method(function)
  render: () => {
    //In this function we will return an unordered list of products
    const { products } = data; //After importing data from data.js, to access data we need this line
    return `
        <ul class="products">
        ${products.map(
          (product) => `
        <li>
        <div class="product">
          <a href="/#/product/${product._id}">
            <img src="${product.image}" alt="${product.name}"/>
          </a>
          <div class="product-name">
            <a href="/#/product/1">
              ${product.name}
            </a>
          </div>
          <div class="product-brand">
            ${product.brand}
          </div>
          <div class="product-price">
            $${product.price}
          </div>
        </div>
      </li>

        `
        ).join('\n')}
        `;
  },
};
export default HomeScreen;