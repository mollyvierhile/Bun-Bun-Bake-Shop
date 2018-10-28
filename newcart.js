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
            var totalItem = "<tr><td>" + rolltype + glaze + quantity + "</td></tr>"
            totalTable = totalTable + totalItem;
        }

        var cartTable = document.getElementById('cart-items');
        var finalTable = totalTable;
    
        cartTable.innerHTML = finalTable;    
    

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
    

    const rollitem = {
        roll: 'Roll Type',
        glaze: 'Glaze',
        quantity: 'Quantity',
    }
    
    
    //puts data into HTML element
    
    const markup = `
    <tr class="rollitem">
        <td><p><img style="float: left; margin: 0px 0px 0px 50px;" src="bunphoto1.jpg" width="150"></td>
        <td><p>${rollitem.roll}<br><br>Glaze:${rollitem.glaze}<br><br>Quantity:${rollitem.quantity}</p></td>
        <td><button id="del">X</button></td>
    </tr>`;
    
    cartTable.innerHTML = markup;  
    console.log('works')
    
    }
    
    //gets cart from storage
    
    var cart = GetCartFromStorage();
    renderTable(cart);
    console.log("works")
    
