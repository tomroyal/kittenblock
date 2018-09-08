
function checkforDM (tabId, changeInfo, tab) {
    if (tab.url.indexOf('dailymail.co.uk') > -1) {
        chrome.tabs.update(tabId, {url: "http://www.tomroyal.com/teaandkittens/blocked.php?chrome"});	  
    };
    if (tab.url.indexOf('www.express.co.uk') > -1) {
        chrome.tabs.update(tabId, {url: "http://www.tomroyal.com/teaandkittens/blocked.php?chrome"});	  
    };
};
// Listen
chrome.tabs.onUpdated.addListener(checkforDM);
