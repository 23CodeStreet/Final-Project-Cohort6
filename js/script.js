/* ---
CODE TO GRAB THE VALUE FROM THE RADIO BUTTON -
- CURRENTLY NOT BEING USED FOR ANYTHING!
--- */
/*
function getRadioValue() {
    var radioValue = $("input[name='type']:checked").val();
    console.log(radioValue);

    // Return something if you wish to
    return radioValue;
}


// Starts the search function. API calls will run asynchronously so it is best to split your function into 2 parts.
function startSearch() {

    var searchTerm = $('input[name=searchName]').val();
    // Array of types
    var types = ["movie", "person", "tv"];

    // For each type in array, make a search
    for (var i = 0; i < types.length; i++) {

        // Check that the search term isn't blank
        if(searchTerm != '') {
            makeSearch(types[i]);
        }
    }

}

// Search function - get the results by type
function makeSearch(type) {
    $.get('https://api.themoviedb.org/3/search/' + type + '?&api_key=48ca54ddb0a0259e28dbb2afa690ed61&query=' + encodeURIComponent($('input[name=searchName]').val()), function(data) {

        // For each result...
        for (var j = 0; j < data.results.length; j++) {

            var m = {};

            // Check on the type and grab title / name respectively
            if (type == "movie") {
                m.title = data.results[j].title;
            } else if (type == "person" || type == "tv") {
                m.title = data.results[j].name;
            }
            // Print type and title out to the screen
            console.log(type + ' ' + m.title);
        }
    });
}



// RESULTS HTML

for(var i = 0; i < 24; i++) {
   $('.movieResults').append(createResults());
   console.log ("loop is working")
}

function createResults() {

   var container = '<div class="movieContainer">';
   // var image = '<img src="img/placeholder.png" class="poster">';
   var image = '<img src="http://www.joblo.com/timthumb.php?src=/posters/images/full/moonlight-poster-lg.jpg&h=600&q=100" class="poster">'
   var titleContainer = '<div class="titleContainer">'
   var title = '<h3 class="movieTitle"> movie title</h3>'
   var description = "<p class='movieDesciption'> Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.</p>"
   var readMore = '<a href="#" class=readMoreButton> Read more </a>'
   var closeDiv = '</div>';

   var result = container + image + titleContainer + title + description + readMore + closeDiv + closeDiv;

   return result;

   console.log ("return is working")
}
*/

// READ MORE HTML






 // function readMoreResults() {
 //
 //   for (var j = 0; j < data.length; j++) {
 //     $(".similarmovies").html(data.similar.results[j].title);
 //     $(".castandcrew").html(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name);
 //   }
 //
 //   for (var j = 0; j < data.cast.length; j++) {
 //     $(".castandcrew").html(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name)
 //   }
 //
 //   var container = '';
 //   var trailer = '"https://www.youtube.com/watch?v=" + data.videos.results[0].key +';
 //   var moviedescription = '<div class="moviedescription">'  + data.overview + '</div>';
 //   var castandcrew = '<div class="castandcrew">' data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name + '</div>';
 //   var starrating = '<div class="starrating">' + 'Average' + ' ' + data.vote_average + ' ' + 'out of 10' + '</div>';
 //   var reviewsactual = '<div class="reviewsactual">' data.reviews.results[0].content + ' ' + 'by' + ' ' + data.reviews.results[0].author + '</div>';
 //
 // }

 $.get('https://api.themoviedb.org/3/movie/' + 284053 + '?api_key=48ca54ddb0a0259e28dbb2afa690ed61&append_to_response=videos,images,reviews,similar', function(data){

   console.log(data);
   console.log(data.videos.results[0].key);
   console.log(data.reviews.results[0].content);
   console.log("https://www.youtube.com/watch?v=" + data.videos.results[0].key);

   for (var j = 0; j < 10; j++) {
     console.log(data.similar.results[j].title)
      $(".similarmovies").append("<li>" + data.similar.results[j].title + "</li>");
   }
   //write to the screen:
   $(".movietitle").html(data.title);
   $(".tagline").html('"' + data.tagline + '"');
   $(".trailer").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + data.videos.results[0].key + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
   $(".moviedescription").html(data.overview);
   $(".starrating").html('Average' + ' ' + data.vote_average + ' out of 10');
   $(".reviewsactual").html(data.reviews.results[1].content +  ' by ' + data.reviews.results[1].author);

 })


 $.get('https://api.themoviedb.org/3/movie/' + 284053 + '/credits?api_key=48ca54ddb0a0259e28dbb2afa690ed61', function(data){
   console.log(data)
   // console.log(data.cast[0].character + ' ' + 'played by' + ' ' + data.cast[0].name)

   for (var j = 0; j < 10; j++) {
     console.log(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name)
     $(".castandcrew").append("<li>" + data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name + "</li>");
   }
   console.log(data)


 })

  //
  // function readMoreResults(data) {
  //
  //   console.log(data.similar.results[0].title)
  //   console.log('Average' + ' ' + data.vote_average + ' ' + 'out of 10')
  //   console.log(data.reviews.results[0].content + ' ' + 'by' + ' ' + data.reviews.results[0].author)
  //
  //   // for (var j = 0; j < 10; j++) {
  //   //   $(".similarmovies").append(data.similar.results[j].title);
  //   //   $(".castandcrew").append(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name);
  //   //   //
  //   //   // console.log(data.similar.results[j].title)
  //   //   // console.log(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name)
  //   // }
  //
  //   // for (var j = 0; j < data.cast.length; j++) {
  //   //   $(".castandcrew").html(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name)
  //   // }
  //
  //   $(".movietitle").html(data.title);
  //   $(".tagline").html('"' + data.tagline + '"');
  //   $(".trailer").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + '"' + data.videos.results.key + '"' + 'frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
  //   $(".moviedescription").html(data.overview);
  //   $(".similarmovies").html(data.similar.results[j].title);
  //   $(".castandcrew").html(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name)
  //   $(".starrating").html('Average' + ' ' + data.vote_average + ' ' + 'out of 10');
  //   $(".reviewsactual").html(data.reviews.results[0].content + ' ' + 'by' + ' ' + data.reviews.results[0].author);
  //
  // }
