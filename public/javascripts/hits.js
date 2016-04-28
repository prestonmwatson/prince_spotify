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
      console.log(data);
   })
}
