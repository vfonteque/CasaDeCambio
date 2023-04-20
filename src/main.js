import '../style.css';

const btn = document.getElementById('button');
const coin = document.getElementById('exchange');
const list = document.getElementById('results');
const BASE_URL = 'https://api.exchangerate.host/latest?base';

const funcao = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let index = 0;
  keys.forEach((coins) => {
    const li = document.createElement('li');
    li.innerHTML = `${coins}: ${values[index]}`;
    list.appendChild(li);
    index += 1;
  });
};

btn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`${BASE_URL}=${coin.value}`)
    .then((Response) => Response.json())
    .then((data) => funcao(data.rates))
    .catch();
});
