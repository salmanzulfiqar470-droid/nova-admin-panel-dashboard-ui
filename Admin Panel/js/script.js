/* SIDEBAR TOGGLE */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

});

/* CLOSE SIDEBAR */

overlay.addEventListener("click", () => {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

});

/* COLLAPSE */

const collapseBtn = document.getElementById("collapseBtn");

collapseBtn.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

});

/* DROPDOWN */

const dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach((btn) => {

    btn.addEventListener("click", (e) => {

        e.preventDefault();

        const submenu = btn.nextElementSibling;
        const arrow = btn.querySelector(".arrow");

        submenu.classList.toggle("show");
        arrow.classList.toggle("rotate");

    });

});

/* CHART */

const ctx = document.getElementById("salesChart");

new Chart(ctx, {

    type: "line",

    data: {

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
        ],

        datasets: [{

            label: "Sales",

            data: [
                1200,
                1900,
                3000,
                2500,
                4200,
                5000
            ],

            borderWidth: 3,
            tension: 0.4,
            fill: true

        }]
    },

    options: {

        responsive: true,
        maintainAspectRatio: false

    }

});



/* DARK MODE */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

/* TEAM PERFORMANCE CHART */

const teamCtx = document.getElementById("teamChart");

new Chart(teamCtx, {

    type: "doughnut",

    data: {

        labels: [
            "Design",
            "Development",
            "Marketing"
        ],

        datasets: [{

            data: [
                35,
                45,
                20
            ],

            borderWidth: 0

        }]

    },

    options: {

        responsive: true,
        maintainAspectRatio: false

    }

});