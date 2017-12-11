/* ---
CODE TO GRAB THE VALUE FROM THE RADIO BUTTON -
--- */
function getRadioValue() {
    var radioValue = $("input[name='type']:checked").val();

    // Return something if you wish to
    return radioValue;
};


// Starts the search function. API calls will run asynchronously so it is best to split your function into 2 parts.

function startSearch() {

    var type = getRadioValue();

    var searchTerm = $('input[name=searchName]').val();

      if(searchTerm != '') {
          makeSearch(type);
      };

};

// Search function - get the results by type
function makeSearch(type) {
    $.get('https://api.themoviedb.org/3/search/' + type + '?&api_key=48ca54ddb0a0259e28dbb2afa690ed61&query=' + encodeURIComponent($('input[name=searchName]').val()), function(data) {

        // For each result...


            var m = {};
            console.log(data)

            // Check on the type and grab title / name respectively
            if (type == "movie") {
              for (var i = 0; i < data.results.length; i++) {
                moviesByName(data.results[i].title);
                console.log(data.results[i].title);
                // console.log(data.results[i])
                // m.title = data.results[i].title;
                }
            } else if (type == "person") {
                  moviesByActor(data.results[0].id);
                  console.log(data.results[0].name);
                  // console.log(moviesByActor())
                  // for (var j = 0; j < data.results.length; j++) {
                  // m.person = data.results[j].title; }
            }
            // Print type and title and id out to the screen
            // console.log(type + ' ' + m.title);
    });
};


// show movies searched by Name

function moviesByName(type) {
  $.get('https://api.themoviedb.org/3/search/movie' + '?&api_key=48ca54ddb0a0259e28dbb2afa690ed61&query=' + encodeURIComponent($('input[name=searchName]').val()), function(data) {
    // console.log(data)

    })
};

// show movies for actor searched

function moviesByActor(id) {
    $.get('https://api.themoviedb.org/3/discover/movie' + '?&api_key=48ca54ddb0a0259e28dbb2afa690ed61&with_cast=' + id, function(movies){
      console.log(movies)
      for (var i = 0; i < movies.results.length; i++) {
        console.log(movies.results[i].title);
      }
    })
};

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
   var readMore = '<a href="#" class="readMoreButton"> Read more </a>'
   var closeDiv = '</div>';

   var result = container + image + titleContainer + title + description + readMore + closeDiv + closeDiv;

   return result;

   console.log ("return is working")
}


function getSimilarMovies () {
      $.get('https://api.themoviedb.org/3/movie/' + '123' + '/similar?&api_key=48ca54ddb0a0259e28dbb2afa690ed61',
      function(data){
        console.log(data.results)
        for(var i = 0; i < data.results.length; i++) {
           console.log (data.results[i])
        }
      })
}

getSimilarMovies()



// This is just test code for now - we will get this working on Thursday.
// function getGenres() {
//
//     var genreList = [];
//
//     // Get response values from only *checked* checkboxes
//     $.each($("input[name='genre']:checked"), function() {
//         genreList.push($(this).val());
//     });
//
//     console.log(genreList.join(", "));
//     searchByGenre(genreList[0]);
// }
//
// function searchByGenre(genre) {
//     $.get('https://api.themoviedb.org/3/genre/' + genre + '/movies?api_key=48ca54ddb0a0259e28dbb2afa690ed61', function(data) {
//         // $('.resultContainer').replaceWith('<div class="resultContainer"></div>')
//         for (var i = 0; i < data.results.length; i++) {
//             console.log(data.results[i]);
//             // $('.resultContainer').append(createHTML(data.results[i]))
//         }
//     })
// }

