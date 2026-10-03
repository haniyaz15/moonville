/* ================= MOONVILLE PLACES ================= */

const places = {

    cafe: {
        icon: "☕",
        title: "Moon Café",
        text: "The warmest little café in Moonville. People come here for hot chocolate, quiet music and conversations that somehow last until midnight.",
        hours: "Open until 12 AM",
        location: "Old Lantern Street"
    },

    library: {
        icon: "📚",
        title: "Starlight Library",
        text: "An old library with wooden shelves, dusty books and a giant window facing the moon. Some locals say there is a hidden room upstairs.",
        hours: "Open until 10 PM",
        location: "North Moon Street"
    },

    park: {
        icon: "🌳",
        title: "Dreamer's Park",
        text: "The quietest place in the city. Bring a book, sit under the trees and watch the stars. Nobody will ask you where you're going.",
        hours: "Always open",
        location: "West Moonville"
    },

    cinema: {
        icon: "🎬",
        title: "Moonlight Cinema",
        text: "An outdoor cinema where old movies play beneath the night sky. Blankets are free and popcorn is mandatory.",
        hours: "Shows from 7 PM",
        location: "River Road"
    },

    market: {
        icon: "🛍️",
        title: "Night Market",
        text: "A lively little market filled with handmade objects, warm street food, old records and things you never knew you needed.",
        hours: "6 PM — 1 AM",
        location: "Market Square"
    },

    hall: {
        icon: "🏛️",
        title: "Old Town Hall",
        text: "The oldest building in Moonville. Every important city event has happened here since the town was founded.",
        hours: "9 AM — 6 PM",
        location: "Central Square"
    }

};


/* ================= OPEN PLACE ================= */

function openPlace(place) {

    const data = places[place];

    document.getElementById("popupIcon").textContent =
        data.icon;

    document.getElementById("popupTitle").textContent =
        data.title;

    document.getElementById("popupText").textContent =
        data.text;

    document.getElementById("popupHours").textContent =
        "◷ " + data.hours;

    document.getElementById("popupLocation").textContent =
        "⌖ " + data.location;

    document.getElementById("popup").classList.add("show");

    document.body.style.overflow = "hidden";
}


/* ================= CLOSE POPUP ================= */

function closePlace() {

    document.getElementById("popup").classList.remove("show");

    document.body.style.overflow = "";
}


/* ================= CLOSE WITH OUTSIDE CLICK ================= */

document.getElementById("popup").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            closePlace();
        }

    }
);


/* ================= ESCAPE KEY ================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closePlace();
        }

    }
);


/* ================= DAY / NIGHT MODE ================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("light");

        if (
            document.body.classList.contains("light")
        ) {
            themeBtn.textContent = "☾";
        } else {
            themeBtn.textContent = "☀";
        }

    }
);


/* ================= MOONVILLE CLOCK ================= */

function updateClock() {

    const now = new Date();

    /*
        Moonville runs 2 hours ahead
        just to make the fictional city
        feel different.
    */

    let hours = now.getHours() + 2;

    if (hours >= 24) {
        hours -= 24;
    }

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");

    const time =
        String(hours).padStart(2, "0")
        + ":"
        + minutes
        + ":"
        + seconds;

    document.getElementById("cityTime").textContent =
        time;


    const message =
        document.getElementById("cityMessage");


    if (hours >= 5 && hours < 12) {

        message.textContent =
            "The city is waking up slowly.";

    }

    else if (hours >= 12 && hours < 18) {

        message.textContent =
            "Afternoon light is falling across Moonville.";

    }

    else if (hours >= 18 && hours < 23) {

        message.textContent =
            "The city is getting ready for another night.";

    }

    else {

        message.textContent =
            "Moonville is wide awake. Some stories only begin at night.";

    }

}


updateClock();

setInterval(updateClock, 1000);