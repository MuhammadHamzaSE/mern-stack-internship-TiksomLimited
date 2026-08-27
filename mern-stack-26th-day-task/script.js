const card = document.querySelector(".cards");
const menu_btn = document.getElementById("menu-btn");
const menu = document.querySelector("#menu");

let arr = [
    {
        image: "./assets/1.png",
        tit: "Earn Tokens When others Trade",
        description: "Crypto Currency is the future of banking and the monetary system. TMS token holders are awarded extra tokens as a bonus for simply being a token holder further increasing their profit potential."
    },
    {
        image: "./assets/1.png",
        tit: "Earn Commissions From Other Trader Activity",
        description: "Token Holders can now, for the first time ever, begin earning commissions from the trading activity of other traders on the platform."
    },
    {
        image: "./assets/1.png",
        tit: "Earn Tokens When others Trade",
        description: "Using your crypto coins, you can now trade major asset classes such as Forex, Equities and CFD’s all on one platorm"
    },
    {
        image: "./assets/1.png",
        tit: "Worlds 1st Decentralised Crypto Currency Trading Platform",
        description: "TMS Network is the 1st ever decentralised crypto currency trading platform and a leader in the world of technology and financial trading."
    },
    {
        image: "./assets/1.png",
        tit: "Unique bonus token earning Program",
        description: "TMS Network is unique as it offers investors greater returns because for the first time ever, Investors will Earn tokens as a result of trading activity employed by other traders on the platform."
    },
    {
        image: "./assets/1.png",
        tit: "Your Crypto Currency one stop shop for all your trading needs",
        description: "TMS Network can fulfil all your trading needs from buying tokens to trading equities or leveraged products such as FX and CFD’s. You can even use your coins to trade other markets."
    }
];

card.innerHTML = " ";
arr.forEach((user) => {
    const inerCard = document.createElement("div");
    inerCard.classList.add("inerCard");
    const image = document.createElement("img");
    const title = document.createElement("p");
    const desc = document.createElement("p");

    image.src = user.image;
    title.textContent = user.tit;
    desc.textContent = user.description;

    title.style.color = "#509984";
    title.style.fontFamily = "Space Grotesk";

    desc.style.color = "white";
    desc.style.fontFamily = "Space Grotesk";

    inerCard.appendChild(image);
    inerCard.appendChild(title);
    inerCard.appendChild(desc);

    card.appendChild(inerCard);
});

if (menu_btn) {
    menu_btn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}