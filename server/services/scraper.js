let axios = require('axios');
let cheerio = require('cheerio');
const articleService = require('../services/article');

const scrape = async () => {
    const page = await axios.get('https://en.wikipedia.org/wiki/Friends_(season_6)')    
    const $ = cheerio.load(page.data);    
    $('tr.vevent').each(function () {
        $('td.summary', this).each(function(){
            const row = $(this);
            title = row.text();

            let d = row.nextAll().eq(2).text();
            d = d.substr(d.indexOf('(')+1,10)
            let published = new Date(d);

            articleService.createArticle(title, published);
        });        
    });
};

module.exports = {
    scrape
};