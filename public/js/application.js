$(document).ready(function() {

  // $.ajax({
  //   type: 'POST',
  //   url:
  // }).done(function(data) {

  // });

  function setHeader(xhr) {
    xhr.setRequestHeader('Authorization', 'Basic bnY3d1c4TzluNDFZVGJ1YjhpaGhkY1VQT2dBLzBGT0dOSUpwZTNBTmdWNA==');
  };

  $('.search_form').on('submit', function(event) {
    event.preventDefault();
    var query = $(this).serializeArray()[0].value
    GetBing(query);
  })

  function GetBing(query) {
    //Build up the URL for the request
    debugger
    var requestStr = "https://api.datamarket.azure.com/Bing/Search/v1/News?$format=json&Query=%27" + query + "%27";
    var encodedKey = 'Om52N3dXOE85bjQxWVRidWI4aWhoZGNVUE9nQS8wRk9HTklKcGUzQU5nVjQ='
    // https://api.datamarket.azure.com/Bing/Search/v1/News
    //Return the promise from making an XMLHttpRequest to the server
    $.ajax({
      url: requestStr,
      headers: {
        'Authorization': 'Basic ' + encodedKey
      }
    }).done( function (data) {
      debugger
      var results = [], count;

      // Use the JSON parser on the results, safer than eval
      var obj = JSON.parse(data.responseText);

      // Verify if the service has returned images
      if (obj.d !== undefined) {
        var items = obj.d.results;

        // Data adapter results needs an array of items of the shape:
        for (var i = 0, itemsLength = items.length; i < itemsLength; i++) {
          var dataItem = items[i];
          results.push({
            key: (fetchIndex + i).toString(),
            data: {
              title: dataItem.Title,
              thumbnail: dataItem.Thumbnail.MediaUrl,
              width: dataItem.Width,
              height: dataItem.Height,
              linkurl: dataItem.MediaUrl
            }
          });
        }
      } else {

      }
    });
  }

});
