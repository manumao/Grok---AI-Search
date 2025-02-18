chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "https://x.com/i/grok" });
});
