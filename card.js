export default class Card {
  constructor(someProduct = {}) {
    this.state = someProduct;
    this.renderProduct();
  }

  getTemplate() {
    return `
    <div class="product-card-wrapper">
    <div class="product">
      <img class="product-image" src="${this.state.images[1]}" alt="notebook">
      <div class="product-info-wrapper">
        <div class="product-price-wrapper">
          <div class="product-rating">
            <span class="rating">${this.state.rating}</span>
            <span class="image_star"></span>
          </div>
          <div class="product-price">${this.state.price}</div>
        </div>
        <div class="product-title">
          ${this.state.title}
        </div>
        <div class="product-type">${this.state.category}</div>
      </div>
      <button class="product-button">
        Add To Cart
      </button>
    </div>
  </div>
    `;
  }

  update(data = {}) {
    this.state = data;
    this.element.innerHTML = this.getTemplate();
  }

  renderProduct() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
  }
}