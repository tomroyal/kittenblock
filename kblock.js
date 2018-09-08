
function checkforDM (tabId, changeInfo, tab) {
    if (tab.url.indexOf('dailymail.co.uk') > -1) {
        chrome.tabs.update(tabId, {url: "http://www.teaandkittens.co.uk/blocked/"});	  
    };
    if (tab.url.indexOf('www.express.co.uk') > -1) {
        chrome.tabs.update(tabId, {url: "http://www.teaandkittens.co.uk/blocked/"});	  
    };
};
// Listen
chrome.tabs.onUpdated.addListener(checkforDM);
