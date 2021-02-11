// product-item.js
class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    //creates the list item + its subparts for the product card
    let product = document.createElement("li");
    let productImg = document.createElement("img");
    let productName = document.createElement("p");
    let productPrice = document.createElement("p");

    product.setAttribute("class", "product");
    
    productImg.setAttribute("alt", this.getAttribute("title"));
    productImg.setAttribute("src", this.getAttribute("image"));
    productImg.setAttribute("class", "pix");
    productImg.setAttribute("width", 200);
  
      
    productName.innerHTML = this.getAttribute("title");
    productName.setAttribute("class", "title");

    productPrice.innerHTML = "$" + this.getAttribute("price");
    productPrice.setAttribute("class", "price");

    let button = document.createElement("button");
    let count = document.getElementById("cart-count");
    let id = this.getAttribute("id");

    //if we already have seen this product card before, set button to its old value
    //also increase total item count by one
    if (localStorage.getItem(id)) {
      button.innerHTML = "Remove from Cart";
      count.innerHTML = parseInt(count.innerHTML) + 1;
    } 
    else {
      button.innerHTML = "Add to Cart";
    }
    
    button.onclick = () => {
      if (button.innerHTML === "Add to Cart") {     
        alert("added item to cart!");
        //the value doesnt matter, just inserting the key to remember it existed
        localStorage.setItem(id, "blah blah blah");
      } 
      else {
        alert("removed item from cart");
        localStorage.removeItem(id);
      }
      count.innerHTML = parseInt(count.innerHTML) + (button.innerHTML === "Add to Cart" ? 1 : -1);
      button.innerHTML = button.innerHTML === "Add to Cart" ? "Remove from Cart" : "Add to Cart";
    };

    this.shadowRoot.appendChild(product);
    product.appendChild(productImg);
    product.appendChild(productName);
    product.appendChild(productPrice);
    product.appendChild(button);
    
    const linkStyleElement = document.createElement("link");
    linkStyleElement.setAttribute("rel", "stylesheet");
    linkStyleElement.setAttribute("href", "styles/styles.css");
    this.shadowRoot.appendChild(linkStyleElement);
    
  }
}

customElements.define("product-item", ProductItem);