myData = [];
let ip_input = document.getElementById('ip_address');
let city_input = document.getElementById('city');
let country_input = document.getElementById('country');
let orginization_input = document.getElementById('orginization');
let c_code_input = document.getElementById('c_code');
let timezone_input = document.getElementById('timezone');
let connection_type_input = document.getElementById('connection_type');

fetch(`https://ipinfo.io/?token=ddfba88777bacc`)
  .then((response) => response.json())
  .then((data) => {
    myData.push(data);
    console.log(myData);
    let ip;
    let city;
    let county;
    let orginization;
    let c_code;
    let timezone;
    let long, lati;
    let connection_type;
    let loc;

    for (let i of myData) {
      ip = i.ip;
      city = i.city;
      county = i.country;
      orginization = i.org;
      loc = i.loc;
      c_code = i.region;
      timezone = i.timezone;
      connection_type = i.postal;
      const arr = loc.split(',');
      console.log({ arr });
      long = parseInt(arr[1]);
      console.log(typeof long);
      lati = parseInt(arr[0]);
      console.log({ lati });
    }
    ip_input.innerHTML = ip;
    city_input.innerHTML = city;
    country_input.innerHTML = county;
    orginization_input.innerHTML = orginization;
    c_code_input.innerHTML = c_code;
    timezone_input.innerHTML = timezone;
    connection_type_input.innerHTML = connection_type;
    console.log(long);
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: lati, lng: long },
      zoom: 8,
    });

    window.initMap = map;
  });

// AIzaSyD1PD8Z6B7gPc5cqwCmMw85Lgub6EbOijU
// Initialize and add the map

function ip_address() {
  let input = document.querySelector('input').value;

  fetch(`https://ipinfo.io/${input}?token=ddfba88777bacc`)
    .then((response) => response.json())
    .then((data) => {
      myData.push(data);
      console.log(myData);
      let ip;
      let city;
      let county;
      let orginization;
      let c_code;
      let timezone;
      let long, lati;
      let loc;

      for (let i of myData) {
        ip = i.ip;
        city = i.city;
        county = i.country;
        orginization = i.org;
        c_code = i.region;
        timezone = i.timezone;
        loc = i.loc;
        const arr = loc.split(',');
        console.log({ arr });
        long = arr[0];
        lati = arr[1];
      }
      ip_input.innerHTML = ip;
      city_input.innerHTML = city;
      country_input.innerHTML = county;
      orginization_input.innerHTML = orginization;
      c_code_input.innerHTML = c_code;
      timezone_input.innerHTML = timezone;
      console.log(long);
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: lati, lng: long },
        zoom: 8,
      });

      window.initMap = map;
    });
}
