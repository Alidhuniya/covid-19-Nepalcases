// World Wide Cases

const loadWW = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.covid19api.com/world/total", true);

    xhr.contentType = "JSON";

    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            
            let output = " ";

                output += `
                <ul class="bgr">
                <li>Total-Confirmed: ${data.TotalConfirmed} </li>
                <li>Total-Deaths: ${data.TotalDeaths} </li>
                <li>Total-Recovered: ${data.TotalRecovered} </li>
                </ul>
                `
                document.getElementById("data").innerHTML = output;
            }

            else if  (xhr.status === 404) {
                document.getElementById("data").innerHTML = 
                `
                <h2>Not Found</h2>
                
                `
                ; 
            }

          
            
        }

    xhr.send();

}

document.getElementById("btn1").addEventListener("click", loadWW);


// Nepal Case Summary

const loadNepal = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.covid19api.com/summary", true);

    xhr.contentType = "JSON";

    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data.Countries[118]);
            
            
            let output = " ";

                output += `
                <ul class="bgr">
                <li>Country: ${data.Countries[118].Country} </li>
                <li>Date: ${data.Countries[118].Date} </li>
                <li>New-Confirmed: ${data.Countries[118].NewConfirmed} </li>
                <li>New-Deaths: ${data.Countries[118].NewDeaths} </li>
                <li>New -Recovered: ${data.Countries[118].NewRecovered} </li>
                <li>Total-Confirmed: ${data.Countries[118].TotalConfirmed} </li>
                <li>Total-Deaths: ${data.Countries[118].TotalDeaths} </li>
                <li>Total-Recovered: ${data.Countries[118].TotalRecovered} </li>
                </ul>
                `
                document.getElementById("data").innerHTML = output;
            }

            else if  (xhr.status === 404) {
                document.getElementById("data").innerHTML = 
                `
                <h2>Not Found</h2>
                
                `
                ; 
            }

          
            
        }

    xhr.send();

}

document.getElementById("btn2").addEventListener("click", loadNepal);


// Nepal provinces

const loadProvinces = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.covid19api.com/country/nepal/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z", true);

    xhr.contentType = "JSON";

    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            

            let output = " ";

            for (let i in data) {
                output += `
                <ul class="bgr">
                <li>Cases: ${data[i].Cases} </li>
                <li>Status: ${data[i].Status} </li>
                <li>Country: ${data[i].Country} </li>
                <li>Country - Code: ${data[i].CountryCode} </li>
                <li>Date: ${data[i].Date} </li>
                <li>Latitude: ${data[i].Lat} </li>
                <li>Longitude: ${data[i].Lon} </li>
                <li>Province: ${data[i].Province} </li>
                </ul>
                `
            }
                document.getElementById("data").innerHTML = output;
            }
            else if  (xhr.status === 404) {
                document.getElementById("data").innerHTML = 
                `
                <h2>Not Found</h2>
                
                `
                ; 
            }

        }

    xhr.send();

}

document.getElementById("btn3").addEventListener("click", loadProvinces);

