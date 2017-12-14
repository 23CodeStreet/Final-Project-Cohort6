/* ---
CODE TO GRAB THE VALUE FROM THE RADIO BUTTON -
--- */
/*
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
    $('.movieResults').replaceWith("<div class='movieResults'></div>")
    // console.log(data)
    for (var i = 0; i < data.results.length; i++) {
    $('.movieResults').append(createResults(data.results[i]));
    }
    })
};

// show movies for actor searched

function moviesByActor(id) {
    $.get('https://api.themoviedb.org/3/discover/movie' + '?&api_key=48ca54ddb0a0259e28dbb2afa690ed61&with_cast=' + id, function(movies){
      $('.movieResults').replaceWith("<div class='movieResults'></div>")
      console.log(movies)
      for (var i = 0; i < movies.results.length; i++) {
      $('.movieResults').append(createResults(movies.results[i]));
      }
    })
};

function getGenres() {

  // Create a variable array that is empty
  var genreList = [];

  // if ("16".checked==true){
  //   // console.log(animation);
  // }

  // Get values from only *checked* checkboxes
  $.each($("input[name='genre']:checked"), function() {
    // push the values into an array
    genreList.push($(this).val());
  });

  // create a for loop to run as many itmes as there are items in the array
  for (var i = 0; i < genreList.length; i++) {
    console.log(genreList[i]);
    searchByGenre(genreList[i]);
  }

  // console.log(genreList.join(", "));

  // if(genreList != '') {
  //     searchByGenre(genreList[0]);
  // }
}


function searchByGenre(genre) {
  $.get('https://api.themoviedb.org/3/genre/' + genre + '/movies?api_key=48ca54ddb0a0259e28dbb2afa690ed61', function(data) {
    $('.movieResults').replaceWith("<div class='movieResults'></div>")
    // $('.resultContainer').replaceWith('<div class="resultContainer"></div>')
    for (var i = 0; i < data.results.length; i++) {
      console.log(genre);
      console.log(data.results[i].title);
      for (var i = 0; i < data.results.length; i++) {
        $('.movieResults').append(createResults(data.results[i]));
      }



// RESULTS HTML


      // $('body').append(data.results[i].title);
      // $('.resultContainer').append(createHTML(data.results[i]))

    }
  })
}


// RESULTS HTML

// for(var i = 0; i < 24; i++) {
//    $('.movieResults').append(createResults());
//
// }

function createResults(data) {
console.log(data)
   var container = '<div class="movieContainer">';
   // var image = '<img src="img/placeholder.png" class="poster">';
   var image = '<img src="https://image.tmdb.org/t/p/w500' + data.poster_path + '" class="poster">'
   var titleContainer = '<div class="titleContainer">'
   var title = '<h3 class="movieTitle">' + data.title + '</h3>'
   var description = "<p class='movieDesciption'>" + data.overview +"</p>"
   var readMore = '<a href="#" class="readMoreButton"> Read more </a>'
   var closeDiv = '</div>';

   var result = container + image + titleContainer + title + description + readMore + closeDiv + closeDiv;

   return result;

   console.log ("return is working")
}



// function getSimilarMovies () {
//       $.get('https://api.themoviedb.org/3/movie/' + '123' + '/similar?&api_key=48ca54ddb0a0259e28dbb2afa690ed61',
//       function(data){
//         console.log(data.results)
//         for(var i = 0; i < data.results.length; i++) {
//            console.log (data.results[i])
//         }
//       })
// }
//
// getSimilarMovies()



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

