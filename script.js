// JavaScript Business Name Generator

let Adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire",
    4: "Magic"
};

let Shop_name = {
    1: "Engine",
    2: "Foods",
    3: "Garments",
    4: "Power"
};

let Another_word = {
    1: "Bros",
    2: "Limited",
    3: "Hub",
    4: "Shop"
};

function generateName() {
    // Generate random indices for each category
    let rnd1 = Math.floor(Math.random() * 4) + 1;
    let rnd2 = Math.floor(Math.random() * 4) + 1;
    let rnd3 = Math.floor(Math.random() * 4) + 1;

    // Combine selected words to create the business name
    let businessName = Adjectives[rnd1] + " " + Shop_name[rnd2] + " " + Another_word[rnd3];

    // Display the result in the HTML
    document.getElementById("result").innerText = businessName;
}
