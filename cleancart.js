//code inspiration --> https://stackoverflow.com/questions/12974893/delete-the-row-you-click-on-javascript-dynamic-table 


window.onload = function() {
    
    //delete item from cart
    
        $(document).on('click', '#del', function(){
              $(this).parents('tr').remove();

        });    
    
    /* stringify Cart Content */
    var cartContent = GetCartFromStorage();
    if (cartContent && cartContent.length > 0) {
        // alert(JSON.stringify(cartContent));
    }
    
    // displayCart : Function
    
    /* display cart */
    
    function displayCart() {
        var cartArray = listCart();
        var output = "";
        
        for (var i in cartArray) {
            output += "<li>"+cartArray[i].name
                +" "+cartArray[i].count
                +" x "+cartArray[i].price
                +" = "+cartArray[i].total
                +"<button class='delete-item' data-name'"
                +cartArray[i].name+"'>x</button>"
                +"</li>";
        }
        $("#show-cart").html(output);
        $("#total-cart").html( totalCart() );
    }
    
// get cart from local storage    
    
    function GetCartFromStorage() {
    var cart = window.localStorage.getItem('BUN_BUN_CART');
        if (cart) {
            return JSON.parse(cart);
        }
        return[]
    }
                   
/* List of objects in cart */
    
    var shoppingCart = {};
    shoppingCart.cart = [];
    shoppingCart.Item = function(name, price, count) {     
        this.name = name
        this.price = price
        this.count = count
    };     
    
    shoppingCart.addItemToCart = function(name, price, count) { // adds item to cart
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };
    
    shoppingCart.removeItemFromCartAll = function(name) { // removes all item name
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };
    
    shoppingCart.totalCart = function() { // total cost in cart
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    }
    
       
    shoppingCart.listCart = function() { // array of cart items
        var cartCopy = [];
        for (var i in cart) {
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }      
        return cartCopy;
    }
    
    shoppingCart.saveCart = function() { // save cart in local storage
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }
    
    shoppingCart.loadCart = function() { // get cart from local storage
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
    }
    
    
    // cart : Array
    // Item : Object/Class
    
    // addItemToCart : Function
    // removeItemFromCartAll : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
      
    //var template = "<li id=roll-vanilla><div><p>"+ location+ "</p><p>"+ glaze+ "</p><p>Quantity</p></div></li>";    
    
/* total price in cart */
  
    
    $("#total-cart").html("99.75");

    
// **********************************    
    
/* add item to cart on click */
    

    $(".add-to-cart").click(function(event){
        event.preventDefault();
        var name = $(this).attr("data-name");
        var price = Number($(this).attr("data-price"));
    });
                        
    
    // document.querySelectorAll 
    
    /*from ASIT
    localStorage.setItem('STORAGE', JSON.stringify(cartItems)); */
    
    
   /* var cart = $('#roll-vanilla');
        
        var location;
        var glaze;
        
        var item = {name:"Pumpkin Spice", glaze:"None", cost:3.00, quantity:3};

        
        for (var i=0; i < cart.length; i++) {
            cart[i]
            if (value && value !== 'glaze') {
                if (img) {
                    var imageSource = 'roll-' + value + '.png';
                    img.setAttribute('src, imageSource');
                }
            }  else {
                if (img) {
                    var imageSource = 'bunz.jpg';
                    img.setAttribute('src', imageSource);
                }
            }  
        }        
    
    */
    
/* making the cart look active/like it has items in it */
    
    function onReady () {
        var button = document.getElementById('addToCart');
        if (button){
            button.addEventListener('click', onCartBtnClick); {
                console.log('button is working')
            }
        }
    }
    
    function onCartBtnClick() {
        // GET QUANTITY FROM INPUT
        var input = document.getElementByID()
        //GET THE FLAVOR 
        //WRITE TO STORAGE
        //UPDATE BADGE
    }

    /*
 
        var list = [{img_location: "roll-vanilla", name: "Pumpkin Spice", glaze: "Vanilla",  cost: 3.00, quantity: 1},
        {img_location: "roll-vanilla", name: "Pumpkin Spice", glaze: "Vanilla",  cost: 3.00, quantity: 3},
        {img_location: "roll-vanilla", name: "Pumpkin Spice", glaze: "Vanilla",  cost: 3.00, quantity: 6},
        {img_location: "roll-vanilla", name: "Pumpkin Spice", glaze: "Vanilla",  cost: 3.00, quantity: 12},
        {img_location: "roll-double-chocolate", name: "Pumpkin Spice", glaze: "Chocolate", cost: 3.00, quantity: 1}
        {img_location: "roll-double-chocolate", name: "Pumpkin Spice", glaze: "Chocolate", cost: 3.00, quantity: 3}
        {img_location: "roll-double-chocolate", name: "Pumpkin Spice", glaze: "Chocolate", cost: 3.00, quantity: 6}
        {img_location: "roll-double-chocolate", name: "Pumpkin Spice", glaze: "Chocolate", cost: 3.00, quantity: 12}
        {img_location: "roll-sugar-milk", name: "Pumpkin Spice", glaze: "Chocolate", cost: 3.00, quantity: 1}
        {img_location: "roll-sugar-milk", name: "Pumpkin Spice", glaze: "Chocolate", cost: 3.00, quantity: 3}
        {img_location: "roll-sugar-milk", name: "Pumpkin Spice", glaze: "Chocolate", cost: 3.00, quantity: 6}
        {img_location: "roll-sugar-milk", name: "Pumpkin Spice", glaze: "Chocolate", cost: 3.00, quantity: 12}
        {img_location: "bunz", name: "Pumpkin Spice", glaze: "None", cost: 3.00, quantity: 1}
        {img_location: "bunz", name: "Pumpkin Spice", glaze: "None", cost: 3.00, quantity: 3}
        {img_location: "bunz", name: "Pumpkin Spice", glaze: "None", cost: 3.00, quantity: 6}
        {img_location: "bunz", name: "Pumpkin Spice", glaze: "None", cost: 3.00, quantity: 12}];
   
   

        var list = [{img_location: "roll-vanilla", name: "Pumpkin Spice", glaze: "Vanilla", cost: 3.00, quantity: 3},
                   {img_location: "roll-double-chocolate", name: "Pumpkin Spice", glaze: "Chocolate", cost: 3.00, quantity: 1}];

        For each item in list, append the "template" to #cartlist.
        1. Run a for loop
        2. Get one item from list
        3. Get the variables such as img_location, etc. and put them in the template
        4. Append the item to #cartlist
        */       
    
}
