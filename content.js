// content.js

if (window.location.href.includes("op.gg")) {
  var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

  chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
          var firstHref = $("a[href^='http']").eq(0).attr("href");
    
          console.log(firstHref);
        }
      }
    );


  winrateArray = [];
  let summoner1 = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(1) > div.summoner-summary > div.graph > div > span")
  let summoner2 = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(2) > div.summoner-summary > div.graph > div > span")
  let summoner3 = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(3) > div.summoner-summary > div.graph > div > span")
  let summoner4 = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(4) > div.summoner-summary > div.graph > div > span")
  let summoner5 = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(5) > div.summoner-summary > div.graph > div > span")
  winrateArray.push(parseInt(summoner1.innerText, 10), parseInt(summoner2.innerText, 10), parseInt(summoner3.innerText, 10), parseInt(summoner4.innerText, 10), parseInt(summoner5.innerText, 10));
  let S1stripped = winrateArray[0];
  let S2stripped = winrateArray[1];
  let S3stripped = winrateArray[2];
  let S4stripped = winrateArray[3];
  let S5stripped = winrateArray[4];

  let s1posWR = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(1) > div.recent-matches > div.positions > div:nth-child(1) > div > div.win-rate");
  let s2posWR = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(2) > div.recent-matches > div.positions > div:nth-child(1) > div > div.win-rate");
  let s3posWR = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(3) > div.recent-matches > div.positions > div:nth-child(1) > div > div.win-rate");
  let s4posWR = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(4) > div.recent-matches > div.positions > div:nth-child(1) > div > div.win-rate");
  let s5posWR = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(5) > div.recent-matches > div.positions > div:nth-child(1) > div > div.win-rate");

  let pos1 = (S1stripped + 1);  let pos2 = (S2stripped + 1);  let pos3 = (S3stripped + 1);  let pos4 = (S4stripped + 1);  let pos5 = (S5stripped + 1);

  if (s1posWR > 50) {
    pos1 = (pos1 + 1);
  }
  if (s2posWR > 50) {
    pos2 = (pos2 + 1);
  }
  if (s3posWR > 50) {
    pos3 = (pos3 + 1);
  }
  if (s4posWR > 50) {
    pos4 = (pos4 + 1);
  }
  if (s5posWR > 50) {
    pos5 = (pos5 + 1);
  }


  let s1rank = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(1) > div.summoner-summary > div.lp");
  let s2rank = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(2) > div.summoner-summary > div.lp");
  let s3rank = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(3) > div.summoner-summary > div.lp");
  let s4rank = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(4) > div.summoner-summary > div.lp");
  let s5rank = document.querySelector("body > div.l-wrap.l-wrap--multi > div.l-container > div.MultiSearchLayoutWrap > div > div.ContentWrap > div > div > ul > li:nth-child(5) > div.summoner-summary > div.lp");


  let totalWR = (S1stripped + S2stripped + S3stripped + S4stripped + S5stripped) / 5;
  let totalPosWR = (pos1 + pos2 + pos3 + pos4 + pos5) / 5;

  var newLine = "\r\n"
  var msg = `Team Total Winrate: ${totalWR}%`
  msg += newLine;
  msg += `Team Total Positional Winrate: ${totalPosWR}%`
  msg += newLine;
  msg += newLine;
  if (totalWR < 50) {
    msg += "Possible Dodge";
  } else {
    msg += "Good to go!";
  }
  alert(msg);
}