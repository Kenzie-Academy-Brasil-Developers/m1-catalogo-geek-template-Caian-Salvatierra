const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },

  // Produto 3 
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name:"Controle Playstation",
    price:"R$ 99,00",
    type:"Paintings",
  },  

  //Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name:"Mario",
    price:"R$ 275,00",
    type:"Paintings",
  },

  //Produto 5 
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name:"Pacman",
    price:"R$ 160,00",
    type:"Paintings",
  },

  //Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name:"Smart Watch",
    price:"R$ 120,00",
    type:"Paintings",
  },

  //Produto 7 
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$ 700,00",
    type: "Action Figures",
  },
  
  //Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },

  //Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures",
  },

  //Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures",
  },

  //Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures",
  },
];

const paintings = [];
const actionFigures = [];

function separateItems(productsArray){
  for( let i = 0; i < productsArray.length; i++){
    const elementCurrent = productsArray[i];
      if(productsArray[i].type === "Paintings" ){
        paintings.push(elementCurrent);
   }  else {
      actionFigures.push(elementCurrent);
   }
  }

}

separateItems(productsArray);

function cardPaintings(paintings){
  const ulCard = document.querySelector('.card')
  for(let i = 0; i < paintings.length; i++){
    const liCard = document.createElement('li');
    const imgCard = document.createElement('img');
    const divCard = document.createElement('div');
    const spanCard = document.createElement('span');
    const spanCard2 = document.createElement('span');

    imgCard.classList.add("img-card");
    spanCard.classList.add("titulo-produto");
    spanCard2.classList.add("preco-produto");

    imgCard.src= paintings[i].image;
    spanCard.innerText = paintings[i].name;
    spanCard2.innerText = paintings[i].price;

    divCard.append(spanCard , spanCard2) ;
    liCard.append(imgCard , divCard);
    ulCard.appendChild(liCard);
  }
}

function cardActionFigures(actionFigures){
  const ulCard = document.querySelector('.card2')
  for(let i = 0; i < actionFigures.length; i++){
    const liCard = document.createElement('li');
    const imgCard = document.createElement('img');
    const divCard = document.createElement('div');
    const spanCard = document.createElement('span');
    const spanCard2 = document.createElement('span');

    imgCard.classList.add("img-card");
    spanCard.classList.add("titulo-produto");
    spanCard2.classList.add("preco-produto");

    imgCard.src= actionFigures[i].image;
    spanCard.innerText = actionFigures[i].name;
    spanCard2.innerText = actionFigures[i].price;

    divCard.append(spanCard , spanCard2) ;
    liCard.append(imgCard , divCard);
    ulCard.appendChild(liCard);
  }
}

cardPaintings(paintings);
cardActionFigures(actionFigures);