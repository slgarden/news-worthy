![main-image](https://s3-us-west-1.amazonaws.com/githubimages/Screen+Shot+2015-05-20+at+5.34.01+PM.png)
[NewsWorthy](http://news-worthy.herokuapp.com/) is a news search web application that retrieves articles about current events and presents links to those articles on a spectrum ordered by ideological perspective, from liberal to conservative. Most people get their news from sources that align with their own political and ideological interests, which unfortunately does not give them the full story on a given issue. This app widens users' perspectives by making them cognizant of the biases associated with their most-frequented news sources and allowing them to explore what other paradigms are saying about an event. 

This was a solo project, built in four days midway through my programming course, Dev Bootcamp. 

The Ideological perspective scores for each news source are calculated based on data from the Pew Research Center's 2014 American Trends Panel survey. It is built in Ruby on a SQLite database, using the Sinatra framework for routing and ActiveRecord as an ORM. The articles are retrieved from the Bing News API (Google News API is deprecated).

Technologies/frameworks used include:

* Ruby
* Sinatra
* SQLite
* JavaScript
* JQuery
* AJAX
* ActiveRecord
* HTML5
* CSS3
* Bing News API

### SCREEN GRABS
##### 1) Landing Page
* Brief description of app
* Form field for current event query
* Drop-down menu (optional) for category of news
![dropdown-image](https://s3-us-west-1.amazonaws.com/githubimages/Screen+Shot+2015-05-20+at+10.08.53+PM.png)

##### 2) Articles Page
* Articles presented along spectrum from Liberal <--> Conservative
* Right and left arrows allow user to scroll through articles
  * As user moves through each article, spectrum along the bottom changes according to the ideological score of that article's news source
![articles-liberal-page](https://s3-us-west-1.amazonaws.com/githubimages/Screen+Shot+2015-05-20+at+10.10.27+PM.png)
![articles-conservative-page](https://s3-us-west-1.amazonaws.com/githubimages/Screen+Shot+2015-05-20+at+10.10.53+PM.png)

##### 3) Single Article Page
* When a user clicks the "Link to Article" button on a given article, a new tab opens in their browser linking to the original article
![article-link-page](https://s3-us-west-1.amazonaws.com/githubimages/Screen+Shot+2015-05-20+at+10.12.02+PM.png)
