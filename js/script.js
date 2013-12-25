/* jshint -W032 */

$(document).ready(function() {
    // Open all links in new tabs
    $("a").attr("target", "_blank");

    /* YouTube embed player of current LEGO-related video
    preferably from the LEGO channel (http://www.youtube.com/user/LEGO
    */

    /* FUTURE When updating the YouTube video, always get the code directly after
    "watch?v=". For example, if you wanted to embed http://www.youtube.com/watch?v=g8-4wXkT60c,
    you would take "g8-4wXkT60c" and place it after "embed/".
    Thus the new link would like "http://www.youtube.com/embed/g8-4wXkT60c"
    */
    var ytVideo = "http://www.youtube.com/embed/YEtjhWwUv2g";

    /* Player parameters. Full list and definition at
    https://developers.google.com/youtube/player_parameters#Parameters */
    var ytVideoParams = "?html5=1&rel=0&autohide=1&modestbranding=1";

    // Give the iframe an src attribute of the new video
    $("#yt-video").attr("src", ytVideo + ytVideoParams);
});
