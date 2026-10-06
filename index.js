const fruits = [
    { name: "Apple", price: 1.5 },
    { name: "Orange", price: 2 },
    { name: "Banana", price: 1 },
    { name: "Grapes", price: 3 },
];


const wrapper = document.getElementById("wrapper");

function renderFruits(fruits) {
    wrapper.innerHTML = "";
    fruits.forEach(fruit => {
        const ele = document.createElement("div");
        ele.innerHTML = `${fruit.name} - $${fruit.price}`;
        const changeButton = document.createElement("button");
        changeButton.innerHTML = "Change Price";
        // changeButton.addEventListener("click", () => {
        //   ele.document.createElement("input");
          
        //   renderFruits(fruits);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => {
          ele.remove();
        })
        wrapper.appendChild(ele);
        wrapper.appendChild(changeButton);
        wrapper.appendChild(deleteButton);
    }
)}



renderFruits(fruits);