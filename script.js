/* =====================================================
   DESA PUSAKA
   JAVASCRIPT
   ===================================================== */


/* ================= MENU MOBILE ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("show");

        }
    );

}


/* Tutup menu ketika link diklik */

document
    .querySelectorAll("#navMenu a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navMenu) {

                    navMenu.classList.remove("show");

                }

            }
        );

    });


/* ================= TAHUN OTOMATIS ================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= DETAIL LAYANAN ================= */

function showService(serviceName) {

    alert(
        "LAYANAN DESA PUSAKA\n\n" +

        serviceName +

        "\n\n" +

        "Untuk informasi persyaratan dan " +
        "prosedur pengurusan, silakan " +
        "menghubungi atau datang ke " +
        "Kantor Desa Pusaka."
    );

}


/* ================= BACA BERITA ================= */

function readNews(title) {

    alert(
        "BERITA DESA PUSAKA\n\n" +

        title +

        "\n\n" +

        "Halaman artikel lengkap dapat " +
        "ditambahkan ketika sistem berita " +
        "desa sudah menggunakan database."
    );

}


/* ================= ANIMASI CARD ================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const cards =
            document.querySelectorAll(
                ".info-card, " +
                ".service-card, " +
                ".service-card-large, " +
                ".news-card, " +
                ".official-card, " +
                ".news-item"
            );


        cards.forEach(
            function (card, index) {

                card.style.opacity = "0";

                card.style.transform =
                    "translateY(20px)";


                setTimeout(
                    function () {

                        card.style.transition =
                            "opacity .5s ease, " +
                            "transform .5s ease";

                        card.style.opacity = "1";

                        card.style.transform =
                            "translateY(0)";

                    },
                    index * 80
                );

            }
        );

    }
);


/* ================= TUTUP MENU KETIKA KLIK LUAR ================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            navMenu &&
            menuToggle &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("show");

        }

    }
);
