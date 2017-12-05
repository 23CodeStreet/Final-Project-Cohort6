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
