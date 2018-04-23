let path = require('path');
let fs = require('fs');


let pathToChirps = path.join(__dirname, '../chirps.json');


let chirps = [
    {
        text: "My cat is hard labor, and I want to die trying. We need free fruit, apparently. #cooldiet #randomtweet"
    },
    {
        text: "My script is a fairytale, and I want to level up. Here is to better followers, bro. #globalfest #randomtweet"
    },
    {
        text: "My best friend is being a jerk, and I want to go faster. More detailed music, IMHO. #stickythoughts #randomtweet"
    },
    {
        text: "My dog is a pain, and I want to plant a tree. Craptastic grand meetings, for real. #grimsport #randomtweet"
    },
    {
        text: "My home is cramping my style, and I want to get a yo-yo. Fabulous sick family, forever. #yolonut #randomtweet"
    }
];

let chirpsJson = JSON.stringify(chirps);


fs.writeFile(pathToChirps, chirpsJson, err => {
    if (err) {
        console.log(err);
    }
});

fs.readFile(pathToChirps, function(err, data){
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})


