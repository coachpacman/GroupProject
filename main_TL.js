$(document).ready(function() {
	//NEWS API 
	$.get("https://json-data.herokuapp.com/restaurant/news/1",function(news) {
		console.log(news)
	})

	//SPECIALS MENU API
	$.get("https://json-data.herokuapp.com/restaurant/special/1", function(specials) {
		console.log(specials)
	})

	//ENTRES, APPETIZERS, ALA CARTE MENU ITEMS API
	$.get("https://json-data.herokuapp.com/restaurant/menu/1", function(menuItems) {
		console.log(menuItems)
	})

})