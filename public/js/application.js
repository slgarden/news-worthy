$(document).ready(function() {
  // var query;
  // var counter = 0;

  $('.search_form').on('submit', function(event) {
    event.preventDefault();
    // counter = 0;
    query = this.query.value
    category = this.category.value

    $.ajax({
      url: '/articles',
      type: 'POST',
      data: {
        query: query,
        category: category
      }
    }).done(function(data) {
      $.each(data, function(index, object) {

        $('.wrapper').append('<div id="article_' + index + '">' + data[index].Url + '</div>')
      })
    });

    // GetBing(query);
  })

  // $('.next').on('click', function(event) {
  //   event.preventDefault();
  //   counter += 15;
  //   GetBing(query);
  // })


  // function GetBing(query) {
  //   // Build up the URL for the request
  //   var requestStr = "https://api.datamarket.azure.com/Bing/Search/v1/News?$format=json&Query=%27" + query + "%27&$skip=" + counter;
  //   var encodedKey = 'Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ='

  //   $.ajax({
  //     type: 'POST',
  //     url: '/articles',
  //     data: {query: query}
  //   }).done( function (data) {
  //     var results = data.d.results

  //     $.each(results, function(index, object) {
  //       $('.wrapper').append('<div id="article_' + index + '">' + results[index].Url + '</div>')
  //     })

  //   });
  // }



});
