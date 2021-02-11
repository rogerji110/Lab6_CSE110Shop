let productList = document.getElementById("product-list");

window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("itemInfo")){
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => localStorage.setItem("itemInfo", JSON.stringify(data)))
  };

  JSON.parse(localStorage.getItem("itemInfo")).forEach(item => {
    let productCard = document.createElement("product-item");

    productCard.setAttribute("title", item.title);
    productCard.setAttribute("image", item.image);
    productCard.setAttribute("price", item.price);
    productCard.setAttribute("id", item.id);

    productList.appendChild(productCard);
  });
});