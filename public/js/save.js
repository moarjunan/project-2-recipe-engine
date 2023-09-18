$(document).ready(function() {
    $("#addField").on("click", function(event) {
      event.preventDefault();
      var html =
        "<div class='form-group'><input class='form-control ingredient' id='ingredient' type='text'> </div>";
      $("#ingredientField").append(html);
    });
  
  
    var form = $(".recipe");
    form.validate({
      rules: {
        title: "required",
        servings: "required",
        category: "required",
        dishType: "required",
        ingredient: "required",
        instructions: "required"
      },
      messages: {
        title: "Please specify the title.",
        servings: "Specify how many servings this recipe makes.",
        category: "Please specify the cuisine type.",
        dishType: "Please specify the type of dish.",
        ingredient: "Please specify ingredient.",
        instructions: "Please enter the instructions for making the recipe."
      }
    });
  
    $("#submitRecipe").on("click", function(event) {
      event.preventDefault();
  
      if (form.valid()) {
        console.log("valid form");
  
        var ingredientJSON = {};
        var count = 0;
  
        $(".ingredient").each(function() {
          ingredientJSON["ingredient_" + count++] = $(this).val();
        });
  
        console.log(ingredientJSON);
        let newRecipe = {
          title: $("#title")
            .val()
            .trim(),
          servings: $("#servings").val(),
          image: $("#image")
            .val()
            .trim(),
          category: $("#category").val(),
          dishType: $("#dishType").val(),
          source: $("#source")
            .val()
            .trim(),
          instructions: $("#instructions")
            .val()
            .trim(),
          ingredients: ingredientJSON,
          UserId: 1
        };
  
        console.log(newRecipe);
        $.post("/api/newrecipe", newRecipe, function() {
          console.log("posted");
        });
      }
    });
  });
  