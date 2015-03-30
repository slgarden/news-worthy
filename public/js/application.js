$(document).ready(function() {
  var query;
  var counter = 0;

  $('.search_form').on('submit', function(event) {
    event.preventDefault();
    query = $(this).serializeArray()[0].value
    GetBing(query);
    counter += 15;
  })

  $('.next').on('click', function(event) {
    event.preventDefault();
    GetBing(query);
  })


  function GetBing(query) {
    //Build up the URL for the request
    var requestStr = "https://api.datamarket.azure.com/Bing/Search/v1/News?$format=json&Query=%27" + query + "%27&$skip=" + counter;
    var encodedKey = 'Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ='

    $.ajax({
      url: requestStr,
      headers: {
        'Authorization': 'Basic ' + encodedKey
      }
    }).done( function (data) {
      var results = data.d.results
      $.each(results, function(index, object) {
        $('.wrapper').append('<div id="article_' + index + '">' + results[index].Url + '</div>')
      })

    });
  }

});
