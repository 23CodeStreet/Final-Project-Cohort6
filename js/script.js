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
