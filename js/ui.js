class UI {
  constructor() {
    this.uiContainer = document.getElementById('content');
    this.city;
  }

  populateUI(data) {
    if (!(data === null && data === 'undefined')) {
      this.uiContainer.innerHTML = `
      <div class= "card mx-auto mt-5"> 
        <div class="card-body justify-content-center">
          <h5 class="card-title">${data.name} country ${data.sys.country}</h5>
          <h6 class = "card-subtitle mb-2 text-muted">Hights of ${Math.floor(data.main.temp_max)}. Low of ${Math.floor(data.main.temp_min)}</h6>
          <p class="card-text"> Weather conditions are desccribe as: ${data.weather[0].description}</p>
          <p class="card-text"> Humidity: ${data.main.humidity}</p>
          <p class="card-text"> Wind speed: ${data.wind.speed}</p>
          <p class="card-text">Sunrise: ${window.moment(data.sys.sunrise * 1000).format('HH:mm a')}</p>
          <p class="card-text">Sunset: ${window.moment(data.sys.sunset * 1000).format('HH:mm a')}</p>
        </div>
      </div>
    `;
    }
  }

  getTime(sun, data) {
    let date = new Date(data)
    let hour = date.getHours().toString().length === 1
      ? `0${date.getHours()}`
      : date.getHours();
    let min = date.getMinutes().toString().length === 1
      ? `0${date.getMinutes()}`
      : date.getMinutes();

    return `${sun} time: ${hour} hours, ${min} minutes `
  }

  claerUI() {
    this.uiContaine.innerHTML = '';
  }

  saveToLS(data) {
    localStorage.setItem('city', JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem('city' == null)) {
      return null;
    } else {
      this.city = JSON.parse(localStorage.getItem('city'))
    }

    return this.city
  }

  clearLS() {
    localStorage.clear()
  }
}
