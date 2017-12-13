/* ---
CODE TO GRAB THE VALUE FROM THE RADIO BUTTON -
- CURRENTLY NOT BEING USED FOR ANYTHING!
--- */
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


// READ MORE HTML

$.get('https://api.themoviedb.org/3/movie/'+ 284053 +'?api_key=48ca54ddb0a0259e28dbb2afa690ed61&append_to_response=videos,credits,images,reviews,similar', function(data){

  console.log(data);
  console.log(data.videos.results[0].key);
  console.log(data.reviews.results[0].content);
  console.log("https://www.youtube.com/watch?v=" + data.videos.results[0].key);

  for (var j = 0; j < 10; j++) {
    console.log(data.similar.results[j].title)
  }

  $('.readmoreresults').append(readMoreResults(data));
})

$.get('https://api.themoviedb.org/3/movie/' + 284053 + '/credits?api_key=48ca54ddb0a0259e28dbb2afa690ed61', function(data){
  console.log(data)
  // console.log(data.cast[0].character + ' ' + 'played by' + ' ' + data.cast[0].name)

  for (var j = 0; j < 10; j++) {
    console.log(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name)
  }
})

  function readMoreResults(data) {

    for (var j = 0; j < data.length; j++) {
      $(".similarmovies").html(data.similar.results[j].title);
      $(".castandcrew").html(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name);
    }

    // for (var j = 0; j < data.cast.length; j++) {
    //   $(".castandcrew").html(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name)
    // }

    $(".movietitle").html(data.title);
    $(".tagline").html('"' + data.tagline + '"');
    $(".trailer").html('source src="' + "https://www.youtube.com/watch?v=" + data.videos.results[0].key + '"' + ' ' + 'type="video/mp4"')
    $(".moviedescription").html(data.overview);
    // $(".similarmovies").html(data.similar.results[j].title);
    // $(".castandcrew").html(data.cast[j].character + ' ' + 'played by' + ' ' + data.cast[j].name)
    $(".starrating").html('Average' + ' ' + data.vote_average + ' ' + 'out of 10');
    $(".reviewsactual").html(data.reviews.results[0].content + ' ' + 'by' + ' ' + data.reviews.results[0].author);

    //console.log(data)
    // var container = '<div class="readmorecontainer">';
    // var trailer = '<img src="https://image.tmdb.org/t/p/w500' + data.poster_path + '" class="poster">';
    // var title = '<h2 class="movietitle">' + data.title + '</h2>';
    // var description = '<div class="moviedescription">' + data.overview + "out of 10" + '</div>';
    // var review = '<div class="starrating">' + data.vote_average + '</div>';
    // var closeContainer = '</div>';
    //
    // var result = container + trailer + title + description + review + closeContainer;
    //
    // return result;
  }

//var id = 284053;






// $.get('https://api.themoviedb.org/3/movie/'+ 284053 +'/credits/?&api_key=48ca54ddb0a0259e28dbb2afa690ed61', function(data) {
//       console.log(data)
// })





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
