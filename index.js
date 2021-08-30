function getApi() {
    let inputfield = document.getElementById("input-field");
    let url = `https://api.covid19api.com/total/country/${inputfield.value}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data));
    inputfield.value = "";
    div.innerHTML = "";
}
let div = document.createElement("div");
function displayInfo(data) {
    let container = document.getElementById("container");
    div.innerHTML = `
    <div id="div1" class="grid-item">Country Name: ${data[data.length - 1].Country}</div>
        <div id="div2" class="grid-item">Active Cases: ${data[data.length - 1].Active}</div>
        <div id="div3" class="grid-item">Confirmed Cases: ${data[data.length - 1].Confirmed}</div>
        <div id="div4" class="grid-item">Deaths Cases: ${data[data.length - 1].Deaths}</div>
    `;
    container.appendChild(div);
}