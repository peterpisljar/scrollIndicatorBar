scrollIndicatorBar
==================

jquery plugin to show a bar next to scrollbar with markers showing where your content is. It is similar in functionality to what you see in google books, or what you see in chrome scrollbar if you CTRL+F. 

i created this, becouse i wanted to highlight the keywords user used to find my site in search engine. becouse i use a long-page design i also wanted to indicate positions of matched keywords next to the scrollbar.

you can see a demo here: http://

Usage:

- include script and stylesheets in your page
- after your page has loaded do:
    var scroll_bar = $.fn.scrollIndicatorBar();

- now you can add markers to your scrollbar
    scroll_bar.addMarker(".mymarkers");



Options:

$.fn.scrollIndicatorBar(options) accepts the following options (which need to be passed as option array):
- barColor: background color of the bar                        (default: blue)
- markerColor: default makrer color                            (default: red)
  = can be overriden for each specific marker that you add
- topSpace: bar top margin                                     (default: 0)
- bottomSpace: bar bottom margin                               (default: 0)
- container: container element into which to possition the bar (default: document.body)
- clickable: should clicking on marker take you to its position(default: true)
- hoverable: should we add class "hover" to hovered marker     (default: true)
- append: should we automaticly append bar to container        (default: true)
  = this is usefull if you want to add many markers at load


.addMarker(element, optons) function accepts the jquery selector and adds matching elements to bar. 
- markerColor: you can override marker color here
- clickable: you can override if this marker is clickable
- hoverable: you can override if this marker is hoverable


Helper functions:

there are few helper functions added to help you doing some common tasks:



TODO:

