// helper function which calls the search highlight and then adds markers to sidebar for each search result
function buildsb(keyword) {
	console.log("starting...");
	var st = new Date().getTime();
	var cnt = find_string('body', keyword);
	var et = new Date().getTime();
	console.log(et-st);
	st=et;
	var sb = $.fn.scrollIndicatorBar({append: false});
	var et = new Date().getTime();
	console.log(et-st);
	st=et;
	for (i=0; i < cnt; i++ ) {
		sb.addMarker(".match_indicator_"+i);
	}
	var et = new Date().getTime();
	console.log(et-st);
	st=et;
	$(document.body).append(sb);
	var et = new Date().getTime();
	console.log(et-st);
	st=et;
}

// this function will find and hightlight all the matching text in our document
function find_string(container,what,spanClass) {		
	var el = $(container)[0],
		content = el.innerHTML,
		re = new RegExp(what, "ig"),
		startTag = "",
		endTag = "</span>";
	
	var output = "";
	var counter = 0;
	while (true) {
		match = re.exec(content);
		if (match == null) break;
		
		startTag = "<span style='color:red !important' class='match_indicator_"+(counter++)+"'>";
		
		output += [content.slice(0, match.index), startTag].join('');
		output += [content.substr(match.index, re.lastIndex-match.index), endTag].join('');
		content = content.slice(re.lastIndex);
		re.lastIndex = 0;
	}
	
	el.innerHTML = output;		
	return counter;
}

// start it on load	
$(document).ready(function() {
	buildsb("test");
});
