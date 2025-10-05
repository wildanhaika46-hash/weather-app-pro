<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App Pro</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <header>
            <h1><i class="fas fa-cloud-sun"></i> Weather App Pro</h1>
            <button id="toggleMode" class="mode-toggle"><i class="fas fa-moon"></i></button>
        </header>

        <main>
            <!-- Search Section -->
            <section class="search-section">
                <input type="text" id="cityInput" placeholder="Cari kota (misal: Jakarta)" />
                <button id="searchBtn"><i class="fas fa-search"></i> Cari</button>
                <button id="autoLocBtn"><i class="fas fa-location-arrow"></i> Lokasi Saya</button>
            </section>

            <!-- Weather Dashboard -->
            <section class="weather-dashboard" id="weatherDashboard">
                <div class="current-weather" id="currentWeather">
                    <h2 id="cityName">Pilih kota atau gunakan lokasi otomatis</h2>
                    <div class="temp" id="temperature">--</div>
                    <div class="description" id="description">--</div>
                    <div class="details">
                        <p><i class="fas fa-thermometer-half"></i> Suhu: <span id="tempDetail">--</span>°C</p>
                        <p><i class="fas fa-tint"></i> Kelembaban: <span id="humidity">--</span>%</p>
                        <p><i class="fas fa-wind"></i> Kecepatan Angin: <span id="windSpeed">--</span> m/s</p>
                    </div>
                    <div class="last-updated">Terakhir update: <span id="lastUpdate">--</span></div>
                </div>

                <!-- Riwayat Pencarian -->
                <section class="history-section">
                    <h3><i class="fas fa-history"></i> Riwayat Pencarian</h3>
                    <ul id="historyList"></ul>
                </section>
            </section>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>

