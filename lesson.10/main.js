// map,     filter,      reduce,      sort,     find,     slice,    forEach,     split,     join,     push,

// ---pop,     ---unshift,     ---shift,     includes,     ---concat

let menu = ["Home", "About", "Profile"];

//   function (alert, prompt, confirm,)

//  method  (.map(),  .filter())

// callback function

function callbackFn(value, index, array) {
  const li = document.createElement("li");
  li.innerText = index + 1 + "-" + value;
  document.body.appendChild(li);
  li.style.listStyle = "none";
  document.body.style.fontFamily = "Oswald, sans-serif";
  document.body.style.backgroundColor = "blueviolet";
  document.body.style.color = "white";
  li.style.height = "100px";
  return li;
}

let menuLi = menu.map(callbackFn);

//-----------FILTER-----------

function cbFn(value, index, array) {
  console.log(value);
  console.log(value.length);
  console.log(value.length <= 5);
  return value.length <= 5;
}

let shortMenu = menu.filter(cbFn);
console.log("shortMneu: ", shortMenu);

let users = ["Guliza", "Akylay", "Nazima"];

let guliza = users.filter((value) => {
  return value === "Guliza";
});

console.log(guliza);

const price = [300, 500, 700, 900];
const letter = ["b", "d", "c", "a"];

const word = letter.sort();
console.log(word);

const sortedPrice = price.sort((a, b) => b - a);

console.log(sortedPrice);

const cars = ["BMW", "MAZDA", "MERSEDES"];

const bmw = cars.find((el) => el === "BMW");
console.log(bmw + " IS COOOOOOLLL");

const laptops = [
  {
    name: "Dell",
    price: 30000,
    year: 2018,
    ssd: 5012,
  },
  {
    name: "Asus",
    price: 30000,
    year: 2018,
    ssd: 5012,
  },
  {
    name: "Acer",
    price: 30000,
    year: 2018,
    ssd: 5012,
  },
];

const renderLaptops = (arr, index) => {
  const ol = document.createElement("ol");
  const li = document.createElement("li");
  li.innerHTML = `
    <p>${arr[index].name}</p>
    <p>${arr[index].year}</p>
    <p>${arr[index].price}</p>
    <p>${arr[index].ssd} $</p>
    `;
  ol.appendChild(li);
  document.body.append(ol);
};
const select = document.getElementById("variant");
select.onchange = (e) => {
  console.log(e.target.value);
  switch (e.target.value) {
    case "dell":
      const dell = laptops.filter(element => element.name === "Dell");
      renderLaptops(dell, 0);
      break;
    case "Asus":
      const asus = laptops.filter(element =>  element.name === "Asus");
      renderLaptops(asus, 0);
      break;
    case "Acer":
      const acer = laptops.filter(element =>  element.name === "Acer");
      renderLaptops(acer, 0);
      break;
    default: 
      renderLaptops(laptops, 2);
      renderLaptops(laptops, 1);
      renderLaptops(laptops, 0);
  }
};
