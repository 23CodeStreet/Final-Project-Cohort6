/* ---
CODE TO GRAB THE VALUE FROM THE RADIO BUTTON -
--- */
function getRadioValue() {
    var radioValue = $("input[name='type']:checked").val();

    // Return something if you wish to
    return radioValue;
}


// Starts the search function. API calls will run asynchronously so it is best to split your function into 2 parts.

function startSearch() {

    var type = getRadioValue();

    var searchTerm = $('input[name=searchName]').val();

      if(searchTerm != '') {
          makeSearch(type);
      };



    // This will be replacing the above array.


    // For each type in array, make a search
    // for (var i = 0; i < types.length; i++) {
    //
    //     // Check that the search term isn't blank
    //     if(searchTerm != '') {
    //         makeSearch(types[i]);
    //     }
    // // }
    // //
    // // for (var i = 0; i < types.length; i++) {
    // //
    // //     // Check that the search term isn't blank
    // //     if(searchTerm != 'person') {
    // //         makeSearch(types[i]);
    // //     }
    // }

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
            } else if (type == "person") {
                m.title = data.results[0].known_for[j].title;
            }
            // Print type and title out to the screen
            console.log(type + ' ' + m.title + ' ' + data.results[j].id);
        }
        //
        // for (var j = 0; j < data.results.length; j++) {
        //
        //     var m = {}
        //
        //     if (type == "person") {
        //         m.title = data.results[0].known_for[0].title;
        //     } else if ()
        //     console.log(type + ' ' + m.title + ' ' + data.results[0].id);
        // }
    });
}

// get movies with actor/person


   // $('input[name=searchInput]').change(function(e){
   //   $.get('https://api.themoviedb.org/3/search/person?&api_key=48ca54ddb0a0259e28dbb2afa690ed61&query=' + encodeURIComponent(e.target.value), function(data){
   //     console.log(data.results[0].known_for)
   //   })
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
