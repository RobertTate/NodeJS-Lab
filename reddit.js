let path = require('path');
let fs = require('fs');
let rp = require('request-promise');

let articlePath = path.join(__dirname, 'popular-articles.json');




rp("https://reddit.com/r/popular.json")
    .then((result) => {

        let resultParsed = JSON.parse(result);

        let articleArray = resultParsed.data.children.map((article) => {
            return({
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            })
        });

        let articleStringify = JSON.stringify(articleArray);
      
        fs.writeFile(articlePath, articleStringify, err => {
            if (err) console.log(err);
        })

    })
    .catch(function (err) {
        console.log(err);
    });


