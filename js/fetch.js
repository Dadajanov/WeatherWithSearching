class Fetch {

  async getCurrent(input) {
    const myKey = 'ee81e96faf61641647e628831f74a763';

    let response = await fetch(`
      http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${myKey}&units=metric
    `);

    console.log(response);
    let data = await response.json();

    console.log(data);

    return data;
  }
}

// class Fetch {
//   async getCurrent(input) {
//     const myKey = "ee81e96faf61641647e628831f74a763";

//     //make request to url

//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
//     );

//     const data = await response.json();

//     console.log(data);

//     return data;
//   }
// }

