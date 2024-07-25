let mobileShop = {
  iPhone: {
    iPhone15promax: {
      model: "iPhone 15 pro max",
      color: "natural titanium",
      memory: "256gb",
      image: "./images/15-pro-max.jpg",
      price: "Rs: 450,000",
    },
    iPhone14promax: {
      model: "iPhone 14 pro max",
      color: "space black",
      memory: "256gb",
      image: "./images/14-pro-max.jpg",
      price: "Rs: 350,000",
    },
    iPhone13promax: {
      model: "iPhone 13 pro max",
      color: "sierra blue",
      memory: "128gb",
      image: "./images/13-pro-max.jpg",
      price: "Rs: 230,000",
    },
  },
  samsung: {
    samsungS24ultra: {
      model: "Samsung s24 ultra",
      color: "titanium violet",
      memory: "12gb / 512gb",
      image: "./images/s24-ultra.jpg",
      price: "Rs: 410,000",
    },
    samsungS23ultra: {
      model: "Samsung s23 ultra",
      color: "lavender",
      memory: "8gb / 256gb",
      image: "./images/s23-ultra.jpg",
      price: "Rs: 305,000",
    },
    samsungfold5: {
      model: "Samsung galaxy z fold 5",
      color: "icy blue",
      memory: "12gb / 256gb",
      image: "./images/fold-5.jpg",
      price: "Rs: 530,000",
    },
  },
  xiaomi: {
    xiaomi14ultra: {
      model: "Xiaomi 14 ultra",
      color: "White",
      memory: "16gb / 512gb",
      image: "./images/xiaomi-14-ultra.jpeg",
      price: "Rs: 300,000",
    },
    xiaomi14: {
      model: "Xiaomi 14",
      color: "Pink",
      memory: "16gb / 512gb",
      image: "./images/xiaomi-14.jpg",
      price: "Rs: 250,000",
    },
    xiaomi13tpro: {
      model: "Xiaomi 13T pro",
      color: "Alpine blue",
      memory: "12gb / 256gb",
      image: "./images/xiaomi-13T.jpg",
      price: "Rs: 180,000",
    },
  },
  honor: {
    honormagicv2: {
      model: "Honor magic v2 rsr",
      color: "Agate gray",
      memory: "16gb / 1tb",
      image: "./images/honor-magic-v2.png",
      price: "Rs: 800,000",
    },
    honormagic6pro: {
      model: "Honor magic 6 pro",
      color: "Green",
      memory: "16gb / 512gb",
      image: "./images/honor-magic-6-pro.png",
      price: "Rs: 275,000",
    },
    honor200pro: {
      model: "Honor 200 pro",
      color: "Moonlight white",
      memory: "8gb / 256gb",
      image: "./images/honor-200-pro.jpg",
      price: "Rs: 140,000",
    },
  },
};

const companySelect = document.getElementById("company");
const modelSelect = document.getElementById("model");
const list = document.getElementById("list");

for (let company in mobileShop) {
  let option = `<option value="${company}"> ${company} </option> `;
  companySelect.innerHTML += option;
}

for (let company in mobileShop) {
  for (let model in mobileShop[company]) {
    const mobile = mobileShop[company][model];
    let card = `<div class="card" style="width: 18rem;">
    <img src="${mobile.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mobile.model}</h5>
      <p class="card-text">Price: ${mobile.price}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">storage: ${mobile.memory}</li>
      <li class="list-group-item">color: ${mobile.color}</li>
    </ul>
  </div>`;
    list.innerHTML += card;
  }
}

function selectCompany() {
  modelSelect.innerHTML = "";
  const company = companySelect.value;
  for (let model in mobileShop[company]) {
    let option = `<option value="${model}"> ${model} </option> `;
    modelSelect.innerHTML += option;
  }
}

function search() {
  const company = companySelect.value;
  const model = modelSelect.value;

  const mobile = mobileShop[company][model];
  let card = `<div class="card" style="width: 18rem;">
    <img src="${mobile.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mobile.model}</h5>
      <p class="card-text">Price: ${mobile.price}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">storage: ${mobile.memory}</li>
      <li class="list-group-item">color: ${mobile.color}</li>
    </ul>
  </div>`;
  list.innerHTML = card;
}
