window.onload = function() {
    
    //renders price of items in cart
   
    function renderPrice(cart) {
        var totalCart = 0;
        for (var i=0; i < cart.length; i++) {
            var item = cart[i];
            console.log(item)
            var value = item.quantity;
            var itemCost = value * 3.00;
            totalCart = itemCost + totalCart;
        }

        var cartPrice = document.getElementById('total-cart');
        var finalPrice = '$' + totalCart + '.00';
    
        cartPrice.innerHTML = finalPrice;    
    
    }
    
    //gets cart from storage
    
    var cart = GetCartFromStorage();
    renderPrice(cart);
    console.log("works")

    
    //renders cart items in a table

    function renderTable(cart) {
        var totalTable = "";
        for (var i=0; i < cart.length; i++) {
            var item = cart[i];
            console.log("hi")
            var rolltype = item.rolltype;
            var glaze = item.glaze;
            var quantity = item.quantity;
            var totalItem = rolltype + glaze + quantity
            totalTable = totalTable + totalItem;
        }

        var cartTable = document.getElementById('cart-items');
        var finalTable = '$' + totalTable;
    
        cartTable.innerHTML = finalTable;    
    
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
    
} 