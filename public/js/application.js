$(document).ready(function() {

  $('.search_form').on('submit', function(event) {
    event.preventDefault();
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
      $('.search_form')[0].reset();
      $.each(data, function(index, object) {
        var article = data[index];
        $('.slidee').append(
          buildArticle(article.Title, article.Source, article.Description, article.Url, index));
      })
    });

  })

  $(".scroller").each(function (i, element) {
    debugger
  var $cont = $(element),
      $frame = $cont.find(".sly"),
      $scrollbar = $cont.find(".scrollbar");

  $frame.sly({
      // Sly type
      horizontal: 1,    // Change to horizontal direction.
      itemNav:    centered, // Item navigation type. Can be: basic, smart, centered, forceCentered.

      // Scrollbar
      scrollBar:     $scrollbar, // Selector or DOM element for scrollbar container.
      dragHandle:    0,    // Whether the scrollbar handle should be dragable.
      dynamicHandle: 0,    // Scrollbar handle represents the relation between hidden and visible content.
      minHandleSize: 50,   // Minimal height or width (depends on sly direction) of a handle in pixels.
      clickBar:      0,    // Enable navigation by clicking on scrollbar.
      syncFactor:    0.50, // Handle => SLIDEE sync factor. 0-1 floating point, where 1 = immediate, 0 = infinity.
  });
  $frame.sly('reload');

  function buildArticle(articleTitle, articleSource, articleDescription, articleUrl, index) {

    var articleTemplate = $.trim($('.article_template').html());
    var $article = $(articleTemplate);

    $article.find('.title').text(articleTitle);
    $article.find('.source').text(articleSource);
    $article.find('.short_description').text(articleDescription);
    $article.find('.url a').attr("href", articleUrl).text("Link to Article");
    $article.addClass("id_" + index)

    return $article;
  }

});
