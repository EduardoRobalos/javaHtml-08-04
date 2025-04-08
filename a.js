let paragrafo = "O paragrafo";
   console.log(paragrafo);

let paragrafo1 = document.getElementById('paragrafo1');
   console.log(paragrafo1);

paragrafo1.textContent = "<h1> Novo paragrafo </h1>";
   console.log(paragrafo1);

paragrafo1.innerHTML = "<h1> Novo paragrafo </h1>";
   console.log(paragrafo1);

let paragrafo2 = document.getElementsByClassName('paragrafo2');
   console.log(paragrafo2);

let selector = document.querySelectorAll('p');
   console.log(selector);

const divParagrafo3 = document.createElement('div');
   document.body.appendChild(divParagrafo3);

const paragrafo3 = document.createElement('p');
 paragrafo3.textContent = "Father Time";
   divParagrafo3.appendChild(paragrafo3);

const botao = document.querySelector('#botao');
   botao.addEventListener("mouseover",() => {
      alert("i aint suposed to make it past 25");
   })