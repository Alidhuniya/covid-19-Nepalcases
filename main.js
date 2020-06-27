const loadWW = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.covid19api.com/world/total", true);

    xhr.contentType = "JSON";

    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            
            let output = " ";

                output += `
                <ul>
                <li>Total-Confirmed: ${data.TotalConfirmed} </li>
                <li>Total-Deaths: ${data.TotalDeaths} </li>
                <li>Total-Recovered: ${data.TotalRecovered} </li>
                </ul>
                `
                document.getElementById("data").innerHTML = output;
            }

          
            
        }

    xhr.send();

}

document.getElementById("btn1").addEventListener("click", loadWW);