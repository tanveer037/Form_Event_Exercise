const form = document.querySelector('form');
const list = document.querySelector("#list");
form.addEventListener('submit', function(e){
    e.preventDefault();
    const prod = form.elements.product;
    const quant = form.elements.qty;
    addItem(prod.value, quant.value);
    prod.value = '';
    quant.value = '';
})

const addItem = (product, quantity) => {
    const newItem = document.createElement('li');
    newItem.innerText = `${quantity} ${product}`;
    list.appendChild(newItem);
}
