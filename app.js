const conteiner = document.querySelector(".conteiner");
const cards_length = 32;
const cards = [];
const reset = document.querySelector('.reser');
const audio = document.createElement('audio');
audio.src = "flip.mp3"


const find = document.createElement('audio');
find.src = "find.mp3"

let previousShownCard = undefined;

let icons = [
    'ryuma.jpg',
    'dressrose.jpg',
    'rosinante.jpg',
    'luffy.jpg',
    'sed.jpg',
    'mask.jpg',
    'mikey.jpg',
    'money.jpg',
    'enel.jpg',
    'crocodile.jpg',
    'love.jpg',
    'anime.jpg',
    'hiro.jpg',
    'sanji.jpg',
    'tobi.jpg',
    'doflamingo.jpg',
]
icons.push(...icons);

for (let i = 0; i < 100; i++) {
    const idx1 = Math.floor(Math.random() * icons.length);
    const idx2 = Math.floor(Math.random() * icons.length);

    const temp = icons[idx1];
    icons[idx1] = icons[idx2];
    icons[idx2] = temp;
}

for (let i = 0; i < icons.length; i++) {
    const cardEl = document.createElement("div");
    cardEl.classList.add('card');
    cardEl.innerHTML = `
        <div class="fonts">
            <img src="${icons[i]}" alt="image" class="images">
        </div>
        <div class="back" onclick="audio.play()">
        
        </div>
    `

    cardEl.addEventListener("click", () => {
        if (!cardEl.classList.contains('show')) {
            cardEl.classList.add('show');
        }
        if (!previousShownCard) {
            previousShownCard = cardEl;
        } else {
            const iconOne = previousShownCard.querySelector('img').classList[1];
            
            const iconTwo = cardEl.querySelector('img').classList[1];
            
            // console.log(iconTwo);
            if (iconOne == iconTwo) {
                const temp = previousShownCard;
                setTimeout(() => {
                    temp.classList.remove('show');  
                    cardEl.classList.remove('show');
                }, 500)
            }
            if(previousShownCard.querySelector('img').src == cardEl.querySelector('img').src){
                console.log(1);
                cardEl.style.transform = "rotateY(0deg)"
                previousShownCard.style.transform = "rotateY(0deg)"
                // cardEl.style.opacity = "0.0"
                // previousShownCard.style.opacity = "0.7"
                find.play();
            }
            previousShownCard = undefined;
        }
    })

    reset.addEventListener("click", () => {
        location.reload();
    })


    cards.push(previousShownCard);

    conteiner.appendChild(cardEl);
}