const Products = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
];
const tot = [0, 0, 0];
let container2 = document.querySelector(".container-2").children;
let cart1 = document.getElementById("cart1");
let cart2 = document.getElementById("cart2");
let check = true;

function displaycart() {
  document.querySelectorAll(".products").forEach(function (ele, index) {
    ele.innerHTML = `<span>${Products[index].name}</span> <span>${Products[index].price}</span> <div><button class="button-">-</button><span id="${Products[index].id}">0</span> <button class="button+">+</button></div>`;
    ele.addEventListener("click", function (e) {
      let value = `${Products[index].id}`;
      let quantity = parseInt(document.getElementById(value).innerText);
      if (e.target.classList.contains("button-")) {
        if (quantity > 0) {
          quantity -= 1;
          document.getElementById(value).innerText = `${quantity}`;
          tot[index] = parseInt(Products[index].price);
          tot[index] *= quantity;
          check = false;
        } else {
          quantity = 0;
          document.getElementById(value).innerText = `${quantity}`;
        }
        buttonclick(quantity, index);
      } else if (e.target.classList.contains("button+")) {
        quantity += 1;
        document.getElementById(value).innerText = `${quantity}`;
        tot[index] = parseInt(Products[index].price);
        tot[index] *= quantity;
        check = true;
        buttonclick(quantity, index);
      }
    
      if (cart1.children.length === 0) {
        container2[1].style.display = "flex";
        cart2.style.display = "none";        
      } else {
        container2[1].style.display = "none";
        cart2.style.display = "flex";
     }
     let sum = 0;
     for (const value of tot) {
       sum += value;
     }
     document.getElementById("total").innerText = `${sum}`;
    });
  });
}

function buttonclick(quantity, index) {
  let t = `${Products[index].id}`;
  if (quantity === 0) {
    let element = document.getElementById("class" + t).parentElement;
    element.remove();
  } else if (quantity === 1 && check) {
    container2[2].style.display = "flex";
    cart1.innerHTML += `<div class="cartarea1"><span>${Products[index].name}</span><span id="class${Products[index].id}">${quantity} X ${Products[index].price}</span></div>`;
  } else if (quantity > 1 || check == false) {
    container2[2].style.display = "flex";
    document.getElementById(
      "class" + t
    ).innerText = `${quantity} X ${Products[index].price}`;
  }
}

displaycart();
