$(document).ready(function(){
//JQUERY//
$("#addtocart").click(function(){
	addItemToCart();
	displayCart();
	
});

//**********************************//
//Shopping CART Functions//

var cart = [];

//**** CONSTRUCTOR for item ****//
function Item(){
	var name = $(".title").text();
	var quantity = $("#quantity option:selected").text();
	var size = $("#select-pack option:selected").text();
	var flavors = $("#flavors option:selected").text();
	var price = $("#price").text();
	this.name = name;
	this.price = price;
	this.quantity = quantity;
	this.size = size;
	this.flavors = flavors;
};

//**** FUNCTION to add item to cart ****//
function addItemToCart(){
	
	//increase the quantity of the item in case same item is added//
	for (var i in cart){
		if (cart[i].name === name){
			cart[i].quantity += quantity;
			return;
		}
	}
	//push new item to cart//
	var item  = new Item ();
	cart.push(item);
	console.log (cart);
	saveCart();

}

//**** FUNCTION to remove one item from cart ****//
function removeItemFromCart(name){
	for (var i in cart){
		if (cart[i].name === name){
			cart[i].quantity --;
			if (cart[i].quantity === 0){
				cart.splice (i,1); //remove the item name from the cart when its quantity is 0 (prevent negative quantity)//
			}
			break; //quit the loop//
		}
	}
	saveCart();

}

//**** FUNCTION to remove one type of item entirely from cart ****//
function removeItemFromCartAll(name){
	for (var i in cart){
		if (cart[i].name === name){
			cart.splice (i,1); //remove the entire item from the cart//
			break; //quit the loop//
		}
	}
	saveCart();

}

//**** FUNCTION to clear cart ****//
function clearCart(){
	//cart[];
	saveCart();
}

//**** FUNCTION to return the total number of items in the cart ****//
function quantityCart(){
	var totalQuantity = 0;
	for (var i in cart){
		totalQuantity += cart[i].quantity;
	}
	return totalQuantity;
}

//**** FUNCTION to return the total price of all the items in the cart ****//
function totalPrice(){
	var totalPrice = 0;
	for (var i in cart){
		totalPrice += cart[i].price;
	}
	return totalPrice;
}

//**** FUNCTION to save items in cart on local storage ****//
function saveCart(){
	localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

//**** FUNCTION to load items in cart stored on local storage ****//
function loadCart(){
	cart = JSON.parse(localStorage.getItem("shoppingCart"));
}
loadCart();

//**** FUNCTION to display cart in html document//
function displayCart() {
		var output = " ";
	for (var i in cart) {
		output += "<li>" + cart[i].name +" " + cart[i].price + cart[i].size +" " + cart[i].quantity + " " + cart[i].flavors + "</li>"
	}
	$("#show-cart").html(output);
		console.log(output);

}

displayCart();



});


