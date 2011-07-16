var menu = require("context-menu");
var tabs = require("tabs");
var clipboard = require("clipboard");

exports.main = function() {
	
	menu.Item({

		label: "Open copied link in new tab",

		contentScript: 'self.on("click", self.postMessage);',

		onMessage: function () {
			var content = clipboard.get("text");
			tabs.open(content);
		}
	});

	var curtab = menu.Item({

               	label: "Open link copied in current tab",

               	contentScript: 'self.on("click", self.postMessage);',
	});

	tabs.on("open", function(tab) {
		curtab.on("message", function () {
                	        var content = clipboard.get("text");
                        	tab.url = content;
                });
	});
};
