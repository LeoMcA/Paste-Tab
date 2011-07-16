var menu = require("context-menu");
var tabs = require("tabs");
var clipboard = require("clipboard");

exports.main = function() {
	
	menu.Item({

		label: "Open link from clipboard",

		contentScript: 'self.on("click", self.postMessage);',

		onMessage: function () {
			var content = clipboard.get("text");
			tabs.open(content);
		}
	});
};
