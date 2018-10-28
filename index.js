window.onload = function() {
/* stringify Cart Content */
    var cartContent = GetCartFromStorage();
    if (cartContent && cartContent.length > 0) {
        // alert(JSON.stringify(cartContent));
    }
    
/* update price when selecting different quantities of buns */
    var quantityBuns = document.getElementById('quantityOfBuns');
    var costDiv = document.getElementById('cost');
    quantityBuns.onchange = function() {
        var value = quantityBuns.value;  
        console.log('Quantity changed');
        console.log(value);
        
        var newCost = value * 3.00;
        var newCostString = '$' + newCost + '.00';
        
        costDiv.innerHTML = newCostString;
    }
    
/* change photo if different type of glaze is selected */
    var glazeSelection = document.getElementById('glaze-selection');
    glazeSelection.onchange = function(event) {
        var value = glazeSelection.value;
        var img = document.getElementById('roll-image');
        if (value === 'none') {
            var imageSource = 'bunz.jpg';
        } else {
            var imageSource = value + '.png';
        }
        img.setAttribute('src', imageSource);
    }
    
/* update roll price */    
    var cartButton = document.getElementById('cartbutton');
    cartButton.onclick = function() {
        // GET ROLL VALUE
        var glazeSelectionElement = document.getElementById('glaze-selection');
        var glaze = glazeSelectionElement.value;
        // cartButton.innerHTML = "Added to Cart!";
        var quantityBuns = document.getElementById('quantityOfBuns')
        var quantity = quantityBuns.value;
        var rolltype = "Pumpkin Spice";
            
        var newItem = {
            glaze: glaze,
            quantity: quantity,
            rolltype: rolltype,
        }
        
        
        
/* store in local storage */
       
        var currentCart = GetCartFromStorage();
        currentCart.push(newItem);
        SetCartToStorage(currentCart);
    }   
}

function GetCartFromStorage() {
    var cart = window.localStorage.getItem('BUN_BUN_CART');
    console.log(cart);
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
}

function SetCartToStorage(cart) {
    window.localStorage.setItem('BUN_BUN_CART', JSON.stringify(cart));
}