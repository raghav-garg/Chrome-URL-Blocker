chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // console.log(details)
    return {cancel: true}; 
  },
  {urls: 
    ["*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.facebook.com/*"]
  },
  ["blocking"]
);
