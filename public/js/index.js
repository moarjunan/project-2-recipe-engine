$(document).ready(function () {
    $("#dash").hide();
    $("#logout").hide();
  
    $("#login").on("click", function(event){
      event.preventDefault();
      var email = $("#loginEmail").val().trim();
      var password = $("#loginPassword").val().trim();
      var userData = {
        email: email,
        password: password
      };
      if(!userData.email || !userData.password) {
        return;
      }
      loginUser(userData.email, userData.password);
      $("#loginEmail").val(" ");
      $("#loginPassword").val(" ");
    });
  
  
    function loginUser(email, password){
      $.post("/api/login", {
        email: email,
        password: password
      }).then(function(){
        window.location.replace("/dashboard");
      }).catch(function(err){
        console.log(err);
      });
    }
  
  
    $("#signup").on("click", function(){
      console.log("you clicked on me");
      window.location.href = "/signup";
      return false;
    });
  
  
  
    $("#searchButton").on("click", function () {
      console.log("search works");
  
     
      var keyword = $("#searchInput")
        .val()
        .trim();
      console.log(keyword);
  
  
      $.ajax("/api/search/" + keyword, {
        type: "GET"
      }).then(function (response) {
        $("#recipesBody").empty();
  
        for (let i = 0; i < response.length; i++) {
          const element = response[i];
  
          $("#recipesBody").append(
            `<div class="col-md-4 recipe-card" id="${element.title}">
            <div class="card">
                <img src="${element.image}" class="card-img-top" alt="Recipe Image">
                <div class="card-body">
                    <h4 class="card-title">${element.title}</h4>
                    <p class="card-subtitle">Dish type: ${element.dishType}</p>
                    <p class="card-text">Serves: ${element.servings}</p>
                </div>
            </div>
        </div>`
          );
          $(".recipe-card").data("recipe", element);
        }
      });
    });
  
  
  
  
  
    $(document.body).on("click", ".recipe-card", function () {
      console.log("card clicking works");
      var recipeTitle = this.getAttribute("id");
      console.log(`id: ${recipeTitle}`);
  
  
      $.ajax("/api/search/" + recipeTitle, {
        type: "GET"
      }).then(function (response) {
        $("#recipesBody").empty();
        console.log("empty successful");
        const element = response[0];
  
        const valuesIng = Object.values(element.ingredients);
        console.log("values: " + valuesIng);
        console.log(valuesIng.length);
  
        $(".recipesBody").data("recipe", element);
  
        $("#recipesBody").append(
          `<div class="col-md-4">
          <div class="card">
              <div class="card-image">
                  <img src="${element.image}" class="img-fluid" alt="Recipe Image">
              </div>
              <div class="card-body">
                  <h4 class="card-title">${element.title}</h4>
                  <p class="card-subtitle mb-2">Dish type: ${element.dishType}</p>
                  <p class="card-text">Serves: ${element.servings}</p>
              </div>
          </div>
      </div>
      
      <!-- Card two -->
      <div class="col-md-4">
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
      
      <div class="col-md-4">
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
          $("#recList").append(
            ing
          );
        }
        console.log("test recList population successful");
  
  
        var instructions = element.instructions;
        var a1 = new Array();
        a1 = instructions.split(".");
        console.log("length is: " + a1.length);
        for (let k = 0; k < a1.length - 1; k++) {
          const instrucDisplay = "<li>" + a1[k] + "</li>";
          $("#recDirections").append(
            instrucDisplay
          );
        }
      });
    });
  });
  