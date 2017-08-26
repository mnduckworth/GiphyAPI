$(document).ready(function(){
	var selectedButton;
	var topics = ["League of Legends", "World of Warcraft", "Mass Effect", "Kingdom Hearts", "Team Fortress", "Heroes of the Storm", "Overwatch", "Fallout", "Skyrim", "Crash Bandicoot"];
	for (i = 0; i < topics.length; i++){
		$("#buttons").append("<button>" + topics[i] + "</button>");
	}
	$(document).on("click", "button", function(){
		selectedButton = $(this).text();
		$.ajax({
			url: "https://api.giphy.com/v1/gifs/search?api_key=c5039a1247684d6e9d3eb780a5db6673&q=" + selectedButton + "&limit=10&offset=0&rating=G&lang=en",
			method: "get"
		})
		.done(function(response){
			for (i = 0; i < 9; i++){
				$("#images").append("<img src=" + response.data[i].images.fixed_height_still.url + ">");
			}
		});
	})
})