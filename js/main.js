const btnAddCat = document.querySelector("#btnAddCat"); //boton de añadir categoria
const categorias = document.querySelector("#categorias"); // caja donde van todas las categorias
const inputAddCat = document.querySelector("#inputAddCat"); //input que nombra las categorias

/**
 * cuando escucha el click ejecuta la funcion para
 * crear toda la tarjeta de la categoria
 */
btnAddCat.addEventListener("click", addCat);

function addCat() {
  console.log("escucho el boton de añadir categoria");
  /**
   * Primero Crea el div contenedor
   */
  const catCard = document.createElement("div");
  catCard.classList = "card"; // le añade la clase correspondiente
  const cardTitle = document.createElement("h3"); // creo el h3 que sera el titulo
  cardTitle.textContent = inputAddCat.value;
  cardTitle.classList = "card__titulo";
  const btnRemoveCat = document.createElement("button");
  btnRemoveCat.id = inputAddCat.value;
  btnRemoveCat.textContent = "x";
  btnRemoveCat.classList = "btnRemoveCat";
  /**
   * Escucho el click en el boton para eliminar la tarjeta
   * y ejecutar la funcion removeCat
   */
  btnRemoveCat.addEventListener("click", removeCat);
  function removeCat() {
    categorias.removeChild(catCard);
  }
  /**
   * ----------------------------------------------------------
   */
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
    const btnRemoveWord = document.createElement("button");
    btnRemoveWord.id = inputAddCat.value;
    btnRemoveWord.textContent = "x";
    btnRemoveWord.classList = "btnRemoveWord";
    palabra.appendChild(btnRemoveWord);
    /**
     * Escucho el click en el boton para eliminar la tarjeta
     * y ejecutar la funcion removeCat
     */
    btnRemoveWord.addEventListener("click", removeCat);
    function removeCat() {
      lista.removeChild(palabra);
    }
  }
  let puntosAcumulados = 0;
  const btnsBar = document.createElement("div");
  btnsBar.classList = 'btnBar'

  const btnRest = document.createElement("button");
  btnRest.textContent = "-5";
  btnRest.addEventListener("click", function () {
    pts.textContent = puntosAcumulados -= 5;
  });
  const btnAdd = document.createElement("button");
  btnAdd.textContent = "+5";
  btnAdd.addEventListener("click", function () {
    pts.textContent = puntosAcumulados += 5;
  });

  const totalPts = document.createElement("h3");
  totalPts.textContent = "Puntos Totales";
  totalPts.style.textAlign = "center";
  const pts = document.createElement("h2");
  pts.textContent = puntosAcumulados;
  pts.style.textAlign = "center";

  addWord.append(input);
  addWord.append(btn);
  categorias.append(catCard);
  catCard.append(btnRemoveCat);
  catCard.append(cardTitle);
  catCard.append(lista);
  catCard.append(addWord);
  catCard.append(totalPts);
  catCard.append(pts);
  catCard.append(btnsBar);
  btnsBar.append(btnRest);
  btnsBar.append(btnAdd);
}
