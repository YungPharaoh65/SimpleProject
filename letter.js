//API Intergration on one file
$.ajax({
    type: "GET",
    url: "https://api.paperquotes.com/apiv1/quotes/",
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Token {token}');
    },
    success: function(result) {
        // Display the first quote in the <p> tag with id 'quoteDisplay'
        $('#quoteDisplay').text(result.results[0].quote);
    },
    error: function() {
        $('#quoteDisplay').text("An error occurred while fetching the quote.");
    }
});


