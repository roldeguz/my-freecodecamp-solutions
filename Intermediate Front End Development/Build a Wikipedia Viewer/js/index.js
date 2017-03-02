$(document).ready(function() {
  $(document).on("keyup", "#search_text", function(e) {
     if (e.which == 13) {
         $.ajax({
          type: 'GET',
          url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + encodeURI($.trim($('#search_text').val())) + '&callback=JSON_CALLBACK',			
          dataType: 'jsonp',
          success: function(data) {
            $('#result-box').empty();
            for (var pid in data.query.pages) {
              var page = data.query.pages[pid];
             
              var article = '';
              article += '<div class="col-xs-12 result"><img src="'+ page.thumbnail.source +'" alt="'+ page.pageimage +'" class="pull-left gap-right img-thumbnail"><a href="https://en.wikipedia.org/?curid=' + page.pageid + '" target="_blank">' + page.title + '</a><br />' + page.extract +'</div>';
             
              $('#result-box').append(article);
            }            
          },
          error: function(xhr, textStatus, errorThrown) { 
            //console.log(xhr. textStatus, errotThrown);
          }
        });
     }
  });
});
