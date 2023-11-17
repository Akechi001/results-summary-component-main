document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen HTML tempat Anda ingin menampilkan data
    const dataContainer = document.getElementById("row-smmry");

    // Ambil data dari file JSON
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Proses data dan tampilkan dalam elemen HTML
            data.forEach(item => {
                const category = item.category;
                const score = item.score;
                const icon = item.icon;

                // Buat elemen HTML untuk setiap item
                const itemElement = document.createElement("div");
                itemElement.innerHTML = `
                    <div class="${category} rectangle">
                      <div class="left-section">
                        <img src="${icon}" alt=""/>
                        <p>${category}</p>
                      </div>
                      <div class="right-section">
                        <p class="score">${score}</p>
                        <p> / </p>
                        <p>100</p>
                      </div>
                    </div>
                `;

                // Tambahkan elemen ke dalam container
                dataContainer.appendChild(itemElement);
            });
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});