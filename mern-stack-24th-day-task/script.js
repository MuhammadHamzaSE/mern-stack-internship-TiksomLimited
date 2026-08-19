
const boxes = document.getElementById("dynamic-boxes");
const card = document.getElementById("card");
const generateButton = document.getElementById("gen-btn");
const deleteButton = document.getElementById("del-btn");

generateButton.addEventListener("click", function (event) {
    const totalCards = Number(card.value);

    for (let index = 0; index < totalCards; index++) {
        
        const newCard = document.createElement("div");
        newCard.classList.add("generated-card"); 

        newCard.textContent = `Card ${index + 1}`;
        newCard.style.border = "2px solid black";
        newCard.style.width = "100px";
        newCard.style.height = "100px";
        newCard.style.margin = "5px";
        newCard.style.display = "inline-block"; 
        newCard.style.textAlign = "center";
        newCard.style.lineHeight = "100px";

        boxes.append(newCard);
    }


    card.value = "";
});

deleteButton.addEventListener("click", function (event) {
    const allCards = boxes.querySelectorAll(".generated-card");

    if (allCards.length > 0) {
        allCards[0].remove(); 
    } else {
        alert("Delete karne ke liye koi card nahi hai!");
    }
});