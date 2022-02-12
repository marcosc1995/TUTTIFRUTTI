const btnAddCat = document.querySelector("#btnAddCat");
const categorias = document.querySelector("#categorias");
const inputAddCat = document.querySelector("#inputAddCat");

btnAddCat.addEventListener("click", addCat);

function addCat() {
  console.log("escucho el boton de añadir categoria");
  const catCard = document.createElement("div");
  catCard.classList = "card";
  const cardTitle = document.createElement("h3");
  cardTitle.textContent = inputAddCat.value;
  cardTitle.classList = "card__titulo";
  const btnRemoveCat = document.createElement("button");
  btnRemoveCat.id = inputAddCat.value;
  btnRemoveCat.textContent = "x";
  btnRemoveCat.classList = "btnRemoveCat";
  btnRemoveCat.addEventListener("click", removeCat);
  function removeCat() {
    categorias.removeChild(catCard);
  }
  const lista = document.createElement("ul");
  lista.classList = "card__lista";

  const addWord = document.createElement("div");
  addWord.classList = "addWord";
  const input = document.createElement("input");
  input.classList = "addWord__input";
  input.placeholder = "Añadir Palabra";
  const btn = document.createElement("button");
  btn.classList = "addWord__btn";
  btn.textContent = "Añadir";

  btn.addEventListener("click", agregarPalabra);

  function agregarPalabra() {
    const palabra = document.createElement("li");
    palabra.textContent = input.value;
    lista.append(palabra);
    
    
  }

  addWord.append(input);
  addWord.append(btn);
  categorias.append(catCard);
  catCard.append(btnRemoveCat);
  catCard.append(cardTitle);
  catCard.append(lista);
  catCard.append(addWord);
}
