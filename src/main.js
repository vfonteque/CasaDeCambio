import '../style.css';

const btn = document.getElementById('button');
const coin = document.getElementById('exchange');
const BASE_URL = 'https://api.exchangerate.host/latest?base';

btn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`${BASE_URL}=${coin.value}`)
    .then((Response) => Response.json())
    .then((data) => console.log(data.rates))
    .catch();
});
