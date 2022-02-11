const inputValue = document.querySelector('.inputValue');
const button = document.querySelector('.button');
const display = document.querySelector('.display')
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');


button.addEventListener('click', getWeatherApi);

function getWeatherApi() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3ff551abf33ed7ae33e65cdbfd5f73ae')
    .then(res=>res.json())
    .then(data=>{

      console.log(data)
      const nameValue = data['name'];
      const descValue = data['weather'][0]['description'];
      const tempValue = data['main']['temp'];

      name.innerHTML = nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML = tempValue;
  
      display.classList.add('display_color');
      inputValue.value = '';
    })
    .catch(error=>console.warn('There was an error: '+ error))
};