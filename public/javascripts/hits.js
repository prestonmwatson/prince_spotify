$(document).ready(function(e) {

  getTracks()

});

function getTracks(){
  $.ajax({
    url: '/songs',
    method: 'GET',
    dataType: 'JSON'
  })
   .done(function(data, textStatus){
    for (var i = 0; i < data.tracks.length; i++) {
      var link = data.tracks[i].external_urls.spotify;
      var name = data.tracks[i].name;
     console.log(data.tracks[i].external_urls.spotify);
     $('ul').append('<li> <a class="links" href="' + link + '"><img class="playbtn" src=http://www.clker.com/cliparts/i/P/7/C/V/X/purple-play-button.svg </a><span>' + name + '</span></li>');

    }
      return data;

   })
}
