const puppeteer = require('puppeteer');
const schedule = require('node-schedule');
// Add your list here
const list = [
            "https://www.carscoops.com/",
            "https://www.thedrive.com/",
            "https://jalopnik.com/",
            "https://www.pistonheads.com/",
            "https://www.motortrend.com/",
            "https://www.autoexpress.com/",

            ];

//const job = schedule.scheduleJob('27 22 * * *', function(){

    (async () => {
        for(i=0;i<list.length;i++){
            let lastSlice = list[i].slice(0, -1);
            let leftSlice = lastSlice.substring(12);
            const time = `${new Date().getUTCFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDate()}-${new Date().getUTCDay()}-${new Date().getUTCHours()}-${new Date().getUTCMinutes()}-${new Date().getUTCSeconds()}`;
            const browser = await puppeteer.launch({
                // headless: false 
            });
            const page = await browser.newPage();
            await page.setViewport({
                width: 1280, //Here is the Width of the webpage you will set
                height: 5000, //Here is the Height of the webpage you will set
            });
            await page.goto(list[i],{
                waitUntil: 'networkidle2',
            });
            await page.evaluate(() => {
                let ele = document.getElementById("qc-cmp2-container")
                if(ele){
                    ele.remove();
                }
            })
            await page.screenshot({ path: `${i}.png` });
            //await page.screenshot({ path: `${leftSlice}-${time}.png` });
            await browser.close();
            }
})();
//});
