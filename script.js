async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "9a99fbdd37dd736aeeb6c2ef22f53edb";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod != 200) {
            alert("City not found ❌");
            return;
        }

        document.getElementById("city-name").innerText = data.name;

        document.getElementById("temp").innerText =
            data.main.temp + "°C";

        document.getElementById("desc").innerText =
            data.weather[0].description;

        // Weather Icon
        const iconCode = data.weather[0].icon;
        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    } catch (err) {
        alert("Error ❌");
    }
}