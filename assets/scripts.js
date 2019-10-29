// Returns random int in the range [1,max]
function random(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// Randomly shuffles an array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// vertical images [1,2,3]
let container = document.querySelector(".img-container");
let rand = random(27);

let img = document.createElement("img");
img.src = "img/" + rand + ".png";

if (rand <= 3) {
    img.className = "full-height";
} else {
    img.className = "full-width";
}

container.appendChild(img);

let imgs = []
for (let i = 1; i < 28; i++) {
    if (i !== rand) {
        imgs.push(i);
    }
}

shuffle(imgs);
console.log(imgs);

for (let i = 0; i < imgs.length; i++) {
    let imgIndex = imgs[i];
    let container = document.createElement("div");
    container.className = "img-container";

    let img = document.createElement("img");
    img.src = "img/" + imgIndex + ".png";
    if (imgIndex <= 3) {
        img.className = "full-height";
    } else {
        img.className = "full-width";
    }

    container.appendChild(img);
    document.body.append(container);
}
