window.onload = function() {
    
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
        var finalPrice = 'Subtotal: ' + '$' + totalCart + '.00';
    
        cartPrice.innerHTML = finalPrice;    
    
    }

    function findImage(item) {
        if (item.glaze === 'None') {
            var imageSource = 'bunphoto1.jpg';
        } else {
            var imageSource = item.glaze + '.png';
        }
        return imageSource
        
    } 
    
    //renders cart items in a table

    function renderTable(cart) {
        var totalTable = "";
        for (var i=0; i < cart.length; i++) {
            var item = cart[i];
            var totalItem = `
            <tr class="rollitem">
            <td><p><img style="float: left; margin: 0px 0px 0px 50px;" src="${findImage(item)}"width="150"></td>
            <td><p>${item.rolltype}<br><br>Glaze: ${item.glaze}<br><br>Quantity:${item.quantity}</p></td>
            <td><button class="del">X</button></td>
            </tr>`
            totalTable = totalTable + totalItem;
        
        }

        var cartTable = document.getElementById('cart-items');
        var finalTable = totalTable;
    
        cartTable.innerHTML = finalTable;    
    
    }
    
    //render cart price and table from cart items in storage
    
    function renderCart() {
        var cart = GetCartFromStorage();
        renderPrice(cart);
        renderTable(cart);
    }
    renderCart() 
 
    var table = document.getElementById('cart-items');
        table.onclick = function(event) {
            console.log(event)
            if (event.target.className !== "del") {
                return
                }          
        var tableRow = $(event.target).parent().parent();
        var rowIndex = $('#cart-items tr').index(tableRow);
        var cart = GetCartFromStorage();
        cart.splice(rowIndex, 1);
        SetCartToStorage(cart)
        renderCart()
    }
    
    
} 
    



