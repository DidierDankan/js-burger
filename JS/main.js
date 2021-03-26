console.log('js ok')

//Il programma dovrà consentire di calcolare il prezzo del panino 
//selezionando o deselezionando gli ingredienti proposti.

//inserisce il nome per andare avanti

var burguerName = document.getElementById('name');
var btn = document.getElementById('button');
var ingredients = document.getElementsByClassName('ingredient-checkbox')
var displayPrice = document.getElementById('price');


btn.addEventListener('click', 
    function () {
        var clientBurguer = burguerName.value.trim();
        console.log(clientBurguer);

        if (clientBurguer.length === 0 ) {
            alert ('nome dello hamburguer non specificato!');
                
        } else {
            var price = 50;

            for (var i = 0; i < ingredients.length; i++) {
                    //console.log(ingredients[i]);
                    var ingredient = ingredients[i];
                    //console.log(ingredient)
                if (ingredient.checked) {
                    //ingredient =  ingredient.checked.value;
                    //console.log(ingredient.value)
                    ingredient = ingredient.value;

                    //console.log(ingredient)
                    price += parseInt(ingredient);
                    
                }
                    
            }
        }
        console.log(price)
        displayPrice.innerHTML = price.toFixed(2);
    }

)



