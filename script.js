document.addEventListener('DOMContentLoaded', function () {
    // Initialiser la carte
    const map = L.map('map').setView([48.8566, 2.3522], 13); // Coordonnées de Paris par défaut

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Obtenir les coordonnées via l'API gouvernementale
    fetch('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port')
        .then(response => response.json())
        .then(data => {
            var coordinates = data.features[0].geometry.coordinates;
            var lat = coordinates[1];
            var lon = coordinates[0];
            map.setView([lat, lon], 13);
            L.marker([lat, lon]).addTo(map);
        });
    document.addEventListener('DOMContentLoaded', function () {
        // Initialiser la carte
        const map = L.map('map').setView([48.8566, 2.3522], 13); // Coordonnées de Paris par défaut

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Obtenir les coordonnées via l'API gouvernementale
        fetch('https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port')
            .then(response => response.json())
            .then(data => {
                var coordinates = data.features[0].geometry.coordinates;
                var lat = coordinates[1];
                var lon = coordinates[0];
                map.setView([lat, lon], 13);
                L.marker([lat, lon]).addTo(map);
            });

        // Obtenir les informations météorologiques via Infoclimat
        fetch('https://www.infoclimat.fr/public-api/gfs/json?_ll=48.8566,2.3522&_auth=YOUR_API_TOKEN')
            .then(response => response.json())
            .then(data => {
                var weather = data[0]; // Adapter selon la structure de l'API Infoclimat
                document.getElementById('weather').innerHTML = `
                <h5>Météo à Paris</h5>
                <p>Température : ${weather.tmin}°C - ${weather.tmax}°C</p>
                <p>Condition : ${weather.weather}</p>
            `;
            });
    });

});