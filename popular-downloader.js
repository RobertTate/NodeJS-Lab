let path = require('path');
let fs = require('fs');
let rp = require('request-promise');


let downloadPath = path.join(__dirname, 'downloads');



rp("https://reddit.com/r/popular.json")
    .then((result) => {

        let resultParsed = JSON.parse(result);

        let downloader = resultParsed.data.children.map((article) => {
            if (path.extname(article.data.url) === '.jpg' || path.extname(article.data.url) === '.png' || path.extname(article.data.url) === '.gifv' ) {
                
                fs.writeFile((`${downloadPath}/${article.data.title}`), article.data.url, err => {
                    if (err) console.log(err);  
                }) 
            }
            
        })


    })
    .catch(function (err) {
        console.log(err);
    });
