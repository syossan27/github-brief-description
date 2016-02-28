$(document).ready(function(){
  $(".watch_started div.body div.simple div.title a:nth-child(2) ").on({
    'mouseenter':function(){
      var init_text = "Loading..."
      $(this).append('<div class="desc-tooltips"><p class="font-bold">' + init_text + '</p></div>')
      var repo_url = $(this).attr('href')
      $.ajax({
        type: "GET",
        url: "https://api.github.com/repos" + repo_url,
        dataType: "json",
        success: function(result) {
          $(".desc-tooltips").text('')
          $(".desc-tooltips").append("<p class='font-bold'>" + result['description'] + "</p>")
          $(".desc-tooltips").append("<hr class='separate'>")
          $(".desc-tooltips").append("<p class='font-bold repo-language'>" + result['language'] + "</p>")
          $(".desc-tooltips").append("<hr class='separate'>")
          $(".desc-tooltips").append("<span class='font-bold repo-star'>★" + result['stargazers_count'] + "</span>")
        },
        error: function(err) {
          $(".desc-tooltips").text("Load Failed...")
        }
      });
    },
    'mouseleave':function(){
      $(this).find(".desc-tooltips").remove();
    }
  });
});
