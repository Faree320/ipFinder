myData = [];
let ip_input = document.getElementById('ip_address');
let city_input = document.getElementById('city');
let country_input = document.getElementById('country');
let orginization_input = document.getElementById('orginization');
let c_code_input = document.getElementById('c_code');
let timezone_input = document.getElementById('timezone');
let connection_type_input = document.getElementById('connection_type');

fetch(
  `http://api.ipapi.com/api/check?access_key=8f8ebc4df14440ca8226fa4af60f995c`
)
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

    for (let i of myData) {
      ip = i.ip;
      city = i.city;
      county = i.country_name;
      orginization = i.asn_org;
      c_code = i.country_code;
      timezone = i.timezone_name;
      connection_type = i.connection_type;

      long = i.longitude;
      lati = i.latitude;
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

  fetch(
    `http://api.ipapi.com/api/${input}?access_key=8f8ebc4df14440ca8226fa4af60f995c`
  )
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

      for (let i of myData) {
        ip = i.ip;
        city = i.city;
        county = i.country_name;
        orginization = i.asn_org;
        c_code = i.country_code;
        timezone = i.timezone_name;

        long = i.longitude;
        lati = i.latitude;
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
