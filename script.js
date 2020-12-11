import {createClient} from 'pexels';

// use (getElementById) to get the submit button, then attach an event handler
document.getElementById("travelSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const query = document.getElementById("travelInput").value;
  if (query === "")
    return;

  const client = createClient('563492ad6f91700001000001188a331fb18f49329e5bd31f49e14fb7');
  client.photos.search({ query, per_page: 1 }).then(response => {
      return response.json();
    }).then(function(json) {

      let results = "";
      results += '<h2>Destination: ' + json.name + "</h2>";

      results += '<img src="' + json.photos.url + '"/>';

      const photographerURL = json.photos.photographer_url;
      const photographer = json.photos.photographer;
      results += '<h3>Photographer: <a href=photographerURL>' + photographer + "</a></h3>";

      results += '<p>total results: ' + json.total_results + "</p>";
      results += '<p>results per page: ' + json.per_page + "</p>";
      results += '<p>page: ' + json.page + "</p>";
      results += '<p>next page: ' + json.next_page + "</p>";

      // use getElementById and innerHTML to set the #weatherResults div to contain this list.
      document.getElementById("travelResults").innerHTML = results;
    });
});
