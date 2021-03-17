'use strict';

const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

const leftImage = document.getElementById('left');
const centerImage = document.getElementById('center');
const rightImage = document.getElementById('right');

// can't make it const because it will filled in later
let allProducts = [];

//here we can't convert it to const
const container = document.getElementById('image_container');
const viewed = [];
const labels = [];
const pics = [leftImage, centerImage, rightImage];
const list = document.getElementById('productlist');

// here we can't convert it to const because totalclicks will change
let totalClicks = 0;
const views = [];
const votes = [];

// in loops can't change to const variable because it change in every iteration

function Product(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * names.length);
}

//when i change from var to let appear error here in var rando variable because it created inside while loop and console it outside the while loop so it give me an error so i have to back to var in (var)we can recal the variable even if it not in same scope
// rando variable can't be const
function displayPics(){
  while(viewed.length < 6){
    var rando = makeRandom();
    while(!viewed.includes(rando)){
      viewed.push(rando);
    }
  }
  console.log(rando);
  // TODO: In a sentence or two, explain why the previous line of code threw an error when we changed the variable declaration from `var to `let`.
  // PUT YOUR RESPONSE IN THIS COMMENT
  console.log(viewed);

  for (let i = 0; i < 3; i++){
    // in temp variable can be change to const because it created and assigned at first time
    const temp = viewed.shift();
    pics[i].src = allProducts[temp].path;
    pics[i].id = allProducts[temp].name;
    allProducts[temp].views += 1;
  }
}

function handleClick(event) {
  if (event.target.id === 'image_container') {
    return alert('Be sure to click directly on an image!!');
  }
  totalClicks += 1;
  if(totalClicks > 24) {
    container.removeEventListener('click', handleClick);
    container.style.display = 'none';
    showList();
    makeChart();
  }
  for(let i = 0; i < names.length; i++){
    if(event.target.id === allProducts[i].name) {
      allProducts[i].votes += 1;
      console.log(event.target.id + ' has ' + allProducts[i].votes + ' votes in ' + allProducts[i].views + ' views');
    }
  }
  localStorage.busmall = JSON.stringify(allProducts);
  localStorage.busmallProducts = JSON.stringify(allProducts);
  displayPics();
}

function showList() {
  for(let i = 0; i < allProducts.length; i++) {
    let liEl = document.createElement('li');
    //liEl.textContent = allProducts[i].name + ' has ' + allProducts[i].votes + ' votes in ' + allProducts[i].views + ' views';
    liEl.textContent = `${allProducts[i].name}  has  ${allProducts[i].votes}  votes in  ${allProducts[i].views}  view`;
    list.appendChild(liEl);
  }
}

function makeChartData(){
  allProducts.forEach(function(product){
    labels.push(product.name);
    votes.push(product.votes);
    views.push(product.views);
  });
}

function makeChart(){
  makeChartData();
  // can use const in ctx variable because it createed and assigned by one time and wont change
  const ctx = document.getElementById('chartypants').getContext('2d');
  new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'total votes',
        backgroundColor: 'gold',
        borderColor: '#214',
        data: votes,
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            max: 20,
            min: 0,
            stepSize: 1
          }
        }]
      }
    }
  });
  Chart.defaults.global.defaultFontColor = '#eee'; //eslint-disable-line
}

container.addEventListener('click', handleClick);

document.getElementById('bus').addEventListener('click', function(){
  localStorage.removeItem('busmall');
  console.log('Local storage was cleared!');
});

if(localStorage.busmall){
  console.log('Local storage data exists');
  allProducts = JSON.parse(localStorage.busmall);
} else {
  console.log('There is no local storage data; initialize app by creating instances');
  for(let i = 0; i < names.length; i++) {
    new Product(names[i]);
  }
}

displayPics();
