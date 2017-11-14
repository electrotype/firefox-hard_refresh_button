
hardRefresh = function () {
	browser.tabs.reload({bypassCache: true});
}

browser.browserAction.onClicked.addListener(hardRefresh);
