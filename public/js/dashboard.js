$(document).ready(function() {
    $("#dash").show();
    $("#logout").show();
  
  
    $("#searchButton").on("click", function() {
      var keyword = $("#searchInput")
        .val()
        .trim();
      $("#searchInput").val("");
  
  
      $.ajax("/api/search/" + keyword, {
        type: "GET"
      }).then(function(response) {
        $("#recipesBody").empty();
  
        for (let i = 0; i < response.length; i++) {
          const element = response[i];
  
          $("#recipesBody").append(
            `<div class="col-md-4 recipe-card" id="${element.title}">
            <div class="card">
                <img src="${element.image}" class="card-img-top" alt="Recipe Image">
                <div class="card-body">
                    <h4 class="card-title">${element.title}</h4>
                    <p class="card-text">Serves: ${element.servings}</p>
                </div>
                <div class="card-footer">
                    <div class="text-center">
                        <button type="submit" data-id="${element.id}" class="btn btn-info save">Save Recipe</button>
                    </div>
                </div>
            </div>
        </div>`
          ); 
        }
      });
    });
  
  
    $(document).on("click", "button", function() {
      console.log("save clicked");
      var currentRecipe = $(this).attr("data-id");
      $.get("/user").then(function(user) {
        var userId = user.id;
        $.post("/api/save/" + userId + "/" + currentRecipe, {}).then(function() {
          console.log("saved");
        });
      });
    });
  
  
    $.get("/user").then(function(user) {
      var userid = user.id;
      $.ajax("/api/saved/" + userid, {
        type: "GET"
      }).then(function(response) {
        $("#recipesBody").empty();
  
        for (let i = 0; i < response.length; i++) {
          const element = response[i];
  
          $("#recipesBody").append(
            `<div class="col-md-4 recipe-card" id="${element.title}">
            <div class="card">
                <img src="${element.image}" class="card-img-top" alt="Recipe Image">
                <div class="card-body">
                    <h4 class="card-title">${element.title}</h4>
                    <p class="card-text">Serves: ${element.servings}</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-link">Remove from Faves</a>
                </div>
            </div>
        </div>`
          );
        }
      });
    });
  
  
    $(document.body).on("click", ".recipe-card", function() {
      var keyword = this.getAttribute("id");
      $.get("/user")
        .then(function(user) {
          var userId = user.id;
          return userId;
        })
        .then(function(userId) {
          $.ajax("/api/search/" + keyword, {
            type: "GET"
          })
            .then(function(response) {
              $("#recipesBody").empty();
              const element = response[0];
              const valuesIng = Object.values(element.ingredients);
              $("#savefavorite").data("recipeData", element);
              $("#recipesBody").data("recipeData", element);
  
              $("#recipesBody").append(
                `<div class="col-md-3">
                <div class="card">
                    <img src="${element.image}" class="card-img-top" alt="Recipe Image">
                    <div class="card-body">
                        <h4 class="card-title">${element.title}</h4>
                        <p class="card-text">Serves: ${element.servings}</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link" id="openModal">Add or Edit favorite</a>
                        <a href="#" class="card-link">Remove from Faves</a>
                    </div>
                </div>
            </div>
            
            <!-- Card two -->
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Ingredients</h4>
                        <hr>
                        <ul id="recList" class="list-group list-group-flush">
                            <!-- Add ingredients as list items here -->
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Card three -->
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Directions</h4>
                        <hr>
                        <ol id="recDirections">
                            <!-- Add directions as list items here -->
                        </ol>
                    </div>
                </div>
            </div>
        `
              );
  
  
              for (let j = 0; j < valuesIng.length; j++) {
                const ing = "<li>" + valuesIng[j] + "</li>";
                $("#recList").append(ing);
              }
              var instructions = element.instructions;
              var a1 = new Array();
              a1 = instructions.split(".");
              for (let k = 0; k < a1.length - 1; k++) {
                const instrucDisplay = "<li>" + a1[k] + "</li>";
                $("#recDirections").append(instrucDisplay);
              }
              return element;
            })
            .then(function(element) {
              var recipeId = element.id;
              $.get("/api/favorite/" + recipeId + "/" + userId).then(function(favorite) {
                if (favorite) {
                  $("#recipesBody").append(
                    `<div class="col-md-3">
                    <div class="card large favorite">
                        <div class="card-body">
                            <h4 class="card-title">favorites</h4>
                            <hr>
                            <p class="card-text">${save.favorite}</p>
                        </div>
                    </div>
                </div>
              `
                  );
                } else {
                  $("#recipesBody").append(
                    `<div class="col-md-3">
                    <div class="card large favorite">
                        <div class="card-body">
                            <h4 class="card-title">favorites</h4>
                            <hr>
                        </div>
                    </div>
                </div>
                `
                  );
                }
              });
            });
        });
    });
  
    $("#savefavorite").on("click", function() {
      var favorite = $("#userfavorites")
        .val()
        .trim();
  
      var currentRecipe = $(this).data("recipeData");
      $.get("/user").then(function(user) {
        var favoriteObj = {
          favorite: favorite,
          RecipeId: currentRecipe.id,
          UserId: user.id
        };
  
        $.ajax({
          type: "put",
          url: "/api/favorite",
          data: favoriteObj
        }).then(function() {
          $("#userfavorites").val(" ");
          $.get("/api/favorite/" + favoriteObj.RecipeId + "/" + favoriteObj.UserId).then(
            function(favorite) {
              $("#recipesBody").data("favoriteData", favorite);
            }
          );
        });
      });
    });
  
    $("#deletefavorite").on("click", function() {
      var favoriteId = 2;
      $.ajax({
        type: "delete",
        url: "/api/favorite/" + favoriteId
      }).then(function() {
        console.log("favorite deleted");
      });
    });
  
    $(document.body).on("click", "#openModal", function() {
      $(".modal").addClass("is-active");
    });
  
    $(document.body).on("click", "#closeModal", function() {
      $(".modal").removeClass("is-active");
    });
  
    $(document.body).on("click", "#savefavorite", function() {
      $(".modal").removeClass("is-active");
    });
  
  
    $(document.body).on("click", ".delete", function() {
      $(".modal").removeClass("is-active");
    });
  }); 
  