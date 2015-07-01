//When the extension is installed or upgraded
chrome.runtime.onInstalled.addListener(function(){
  //Replace all rules
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
    //With a new rule
    chome.declarativeContent.onPageChanged.addRules([
      {
        //That fires when a page's URL contains "wikipedia"
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'wikipedia' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ])
  });
});
