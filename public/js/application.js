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
        $('.articles').append(
          buildArticle(article.Title, article.Source, article.Description, article.Url, index));
      })
    });

  })

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
