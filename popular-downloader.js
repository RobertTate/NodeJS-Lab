let path = require('path');
let fs = require('fs');
let rp = require('request-promise');


let downloadPath = path.join(__dirname, 'downloads');



rp("https://reddit.com/r/popular.json")
    .then((result) => {

        let resultParsed = JSON.parse(result);

        let downloader = resultParsed.data.children.map((article) => {
            let ext = path.extname(article.data.url);
            if (ext === '.jpg' || ext === '.png' || ext === '.gifv' ) {
                
                rp(article.data.url).pipe(fs.createWriteStream(`${downloadPath}/${article.data.id}${ext}`));
            }
            
        })


    })
    .catch(function (err) {
        console.log(err);
    });
