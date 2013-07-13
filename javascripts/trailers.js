$(document).ready(function() {
  // Show Play/Pause Instructions upon video mouseover
  $('video').mouseover(function() {
    $('#control_play_pause').css('display', 'block');
  });
  
  // Hide Play/Pause Instructions upon video mouseout
  $('video').mouseout(function() {
    $('#control_play_pause').css('display', 'none');
  });
  
  // Toggle Play/Pause upon clicking on video.
  $('video').click(function() {
      var video = $('video')[0];
      if(video.paused) {
        video.play();
      } else {
        video.pause();
      }
  });
  
  // Switch Play/Pause Instructions upon playback status change
  $('video').bind('pause', function() {
    $('#control_play_pause').html('<img src="../images/video_click_to_play.png"/>');
  });
  
  $('video').bind('play', function() {
    $('#control_play_pause').html('<img src="../images/video_click_to_pause.png"/>');
  });
});