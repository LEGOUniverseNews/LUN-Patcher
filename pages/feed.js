/*
*  How to use the Feed Control to grab, parse and display feeds.
*/
    
google.load("feeds", "1");
    
function OnLoad() {
    // Create a feed control
    var feedControl = new google.feeds.FeedControl();
    
    // Add the feed
    feedControl.addFeed("http://www.thedailybrick.co.uk/blog/feed");      
    
     // Draw it
    feedControl.draw(document.getElementById("content"));

    // if more than one with a class
    $("a.gf-title").each(function() {
        $(this).attr("target","_blank");
    });
  }
   
  google.setOnLoadCallback(OnLoad);


