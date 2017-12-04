// search and return results
$('input[name=searchName]').change(function(e) {
    //type can be movie, tv, person
    let type = 'movie'
    //console.log(createHTML({title:'hello', overview:'test'}))
    // $('.resultContainer').replaceWith('<div class="resultContainer"></div>')
    $.get('https://api.themoviedb.org/3/search/' + type + '?&api_key=48ca54ddb0a0259e28dbb2afa690ed61&query=' + encodeURIComponent(e.target.value), function(data) {
        for (var i = 0; i < data.results.length; i++) {
            // $('.resultContainer').append(createHTML(data.results[i]))
        }
        console.log(data.results);
        console.log('returning results');
    })
})
