$(document).ready(function() {
  var homePage = {

      init: function() {
        homePage.initStyling();
        homePage.initEvents();
      },


      initStyling: function() {
        homePage.renderProfile($("aside"));
        homePage.renderRepo($(".repository"));
        homePage.renderPA($(".pubActivity"));
      },

      initEvents: function() {
        $("#repos").click(function(event){
          event.preventDefault();
          $(".pubActivity").addClass("hide");
          $(".repos").removeClass("hide");




        });
        $("#activity").click(function(event){
          event.preventDefault();
          $(".pubActivity").removeClass("hide");
          $(".repos").addClass("hide");


        });

       },
             render: function(template, data, $target) {
          var tmpl = _.template(template, data);

          $target.append(tmpl);
      },
      renderProfile: function($target) {
        homePage.render($("#profileTmpl").html(), gitHubProfile, $target);

      },
      renderRepo: function($target){
        homePage.render($("#reposTmpl").html(), gitHubRepos, $target);
      },
      renderPA: function($target){
        homePage.render($("#paTmpl").html(), gitHubPA, $target);
      },
  };

homePage.init();





});
