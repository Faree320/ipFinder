let myData = [];
let txt = '';
const findIP = () => {
  let f_ip = document.querySelector('input').value;
  console.log({ f_ip });
  if (f_ip !== '') {
    fetch(`https://json.geoiplookup.io/?ip=${f_ip}`)
      .then((response) => response.json())
      .then((data) => {
        let placeholders = document.getElementById('data-result');

        myData.push(data);
        console.log(myData);
        let out = '';
        for (let i of myData) {
          out += `
            <tr>
                <td>${i.ip}</td>
            </tr>
            <tr>
                <td>${i.asn}</td>
            </tr>
            <tr>    
                <td>${i.asn_number}</td>
            </tr>
            <tr>    
                <td>${i.asn_org}</td>
            <tr>
                <td>${i.city}</td>
            </tr>
            <tr>
                <td>${i.connection_type}</td>
            </tr>
            <tr>
                <td>${i.continent_code}</td>
            </tr>
            <tr>
                <td>${i.continent_name}</td>
            </tr>
            <tr>
                <td>${i.country_code}</td>
            </tr>
            <tr>
                <td>${i.country_name}</td>
            </tr>
            <tr>
                <td>${i.currency_code}</td>
            </tr>
            <tr>
                <td>${i.currency_name}</td>
            </tr>
            <tr>
                <td>${i.district}</td>
            </tr>
            <tr>
                <td>${i.hostname}</td>
            </tr>
            <tr>
                <td>${i.ip}</td>
            </tr>
            <tr>
                <td>${i.isp}</td>
            </tr>
            <tr>
                <td>${i.latitude}</td>
            </tr>
            <tr>
                <td>${i.longitude}</td>
            </tr>
            <tr>
            <td>${i.org}</td>
            </tr>
            <tr>
                <td>${i.region}</td>
            </tr>
            <tr>
                <td>${i.timezone_name}</td>
            </tr>
        `;
        }
        placeholders.innerHTML = out;
      });
  } else {
    fetch(`https://json.geoiplookup.io/`)
      .then((response) => response.json())
      .then((data) => {
        let placeholders = document.getElementById('data-result');

        myData.push(data);
        console.log(myData);
        let out = '';
        for (let i of myData) {
          out += `
            <tr>
                <td>${i.ip}</td>
            </tr>
            <tr>
                <td>${i.asn}</td>
            </tr>
            <tr>    
                <td>${i.asn_number}</td>
            </tr>
            <tr>    
                <td>${i.asn_org}</td>
            <tr>
                <td>${i.city}</td>
            </tr>
            <tr>
                <td>${i.connection_type}</td>
            </tr>
            <tr>
                <td>${i.continent_code}</td>
            </tr>
            <tr>
                <td>${i.continent_name}</td>
            </tr>
            <tr>
                <td>${i.country_code}</td>
            </tr>
            <tr>
                <td>${i.country_name}</td>
            </tr>
            <tr>
                <td>${i.currency_code}</td>
            </tr>
            <tr>
                <td>${i.currency_name}</td>
            </tr>
            <tr>
                <td>${i.district}</td>
            </tr>
            <tr>
                <td>${i.hostname}</td>
            </tr>
            <tr>
                <td>${i.ip}</td>
            </tr>
            <tr>
                <td>${i.isp}</td>
            </tr>
            <tr>
                <td>${i.latitude}</td>
            </tr>
            <tr>
                <td>${i.longitude}</td>
            </tr>
            <tr>
            <td>${i.org}</td>
            </tr>
            <tr>
                <td>${i.region}</td>
            </tr>
            <tr>
                <td>${i.timezone_name}</td>
            </tr>
        `;
        }
        placeholders.innerHTML = out;
      });
  }
};
