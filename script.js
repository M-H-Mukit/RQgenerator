//Declaring Variable
var url      =  "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
	quote    =  $(".quote"),
	author   =  $(".author"),
	newQuote =  $("#myBut");


// Getting Quote From Forismatic API
function getQuote() {
	$.getJSON(url, function(data) {
    console.log(data);
		$(quote).text(data.quoteText);
    $(author).text(data.quoteAuthor);
	
	});

};
getQuote();

// Loading New Quote
$(newQuote).click(function(e) {
	e.preventDefault();
	getQuote();

  
})
