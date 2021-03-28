console.log('js ok')

//Il programma dovrà consentire di calcolare il prezzo del panino 
//selezionando o deselezionando gli ingredienti proposti.

//Richiamo dell HTML

var burguerName = document.getElementById('name');
var btn = document.getElementById('button');
var ingredients = document.getElementsByClassName('ingredient-checkbox')
var displayPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');
//array di codice coupon
var couponCodeValid = ['12354ABCDEF', '82954HJCDEF', '15554ABKSEF'];


btn.addEventListener('click', 
    function () {
        var clientBurguer = burguerName.value.trim();
        //console.log(clientBurguer);

            //inserisce il nome per andare avanti

        if (clientBurguer.length === 0 ) {
            alert ('nome dello hamburguer non specificato!');
                
        } else {
            var price = 50;

            // pescando il singoli ingredients
            for (var i = 0; i < ingredients.length; i++) {
                    //console.log(ingredients[i]);
                    var ingredient = ingredients[i];
                    //console.log(ingredient)

                    // se sono checkati allora fai la somma

                if (ingredient.checked) {

                    ingredient = ingredient.value;

                    //console.log(ingredient)
                    price += parseInt(ingredient);
                    
                }
                    
            }

            console.log(price)
            // coupon descount
            var couponCode = coupon.value
            //console.log(couponCode)
            if (couponCodeValid.includes(couponCode)) {
                var descount = price * 0.2;

                price -= descount;
            }

            displayPrice.innerHTML = price.toFixed(2);
        }
        
    }

)



