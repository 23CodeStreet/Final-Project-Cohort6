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

  function readMoreResults(data) {
    console.log(data)
    var container = '<div class="readmorecontainer">';
    var trailer = '<img src="https://image.tmdb.org/t/p/w500' + data.backdrop_path + '" class="trailer">';
    var title = '<h3 class="movietitle">' + data.title + '</h3>';
    var description = '<div class="moviedescription">' + data.overview + '</div>';
    var review = '<div class="starrating">' + data.vote_average + '</div>';
    var closeContainer = '</div>';

    var result = container + trailer + title + description + review + closeContainer;

    return result;
  }



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
