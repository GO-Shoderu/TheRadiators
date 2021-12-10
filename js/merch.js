function changeCartColor() {
	// document.getElementById('id').style.backgroundColor = 'green' ;
	var x = document.getElementsByClassName('cart');
	x[0].style.backgroundColor = "#e3ac19";
}

let carts = document.querySelectorAll('.ATC');

let listings =[
	{
		name: "Crest Windbreaker",
		tag: "crestwindbreaker",
		price:350,
		amount:0,
		src: "Crest Jacket"
	},
	{
		name: "Crest T-Shirt",
		tag: "cresttshirt",
		price:150,
		amount:0,
		src: "Crest Shirt"
	},
	{
		name: "Logo Hoodie",
		tag: "logohoodie",
		price:200,
		amount:0,
		src: "Logo Hoodie"
	},
	{
		name: "Logo T-Shirt",
		tag: "logotshirt",
		price:150,
		amount:0,
		src: "Logo Shirt"
	},
	{
		name: "Radiators Hoodie",
		tag: "radiatorsshoodie",
		price:200,
		amount:0,
		src: "Radiators Hoodie"
	},
	{
		name: "Logo Cap",
		tag: "logocap",
		price:120,
		amount:0,
		src: "Logo Cap"
	},
	{
		name: "Notebook",
		tag: "notebook",
		price:70,
		amount:0,
		src: "Notebook"
	},
	{
		name: "Radiators Beanie",
		tag: "radiatorsbeanie",
		price:80,
		amount:0,
		src: "Radiators Beanie"
	},
	{
		name: "Logo Mug",
		tag: "logomug",
		price:70,
		amount:0,
		src: "Mug"
	}
]
for(let i=0;i<carts.length;i++)
{
	carts[i].addEventListener('click',()=>{
		cartItemsCounter(listings[i]);
		totalCost(listings[i]);
	})
}

function onLoadCartNumber(){

	let productNumbers = localStorage.getItem('cartCounter');

	if(productNumbers){
		document.querySelector('.cart span').textContent=productNumbers;
	}
}

function cartItemsCounter(listing){

	let productNumbers = localStorage.getItem('cartCounter');
	productNumbers=parseInt(productNumbers);

	if(productNumbers) {
		localStorage.setItem('cartCounter',productNumbers+1);
		document.querySelector('.cart span').textContent=productNumbers+1;
	} else {
		localStorage.setItem('cartCounter',1);
		document.querySelector('.cart span').textContent=1;
	}

	setItems(listing);
}

function setItems(listing){

	let cartItems=localStorage.getItem('productsInCart');
	cartItems=JSON.parse(cartItems);

	if(cartItems!=null) {
		if(cartItems[listing.tag] == undefined) {
			cartItems= {
				...cartItems,
				[listing.tag]:listing
			}
		}
		cartItems[listing.tag].amount+=1;
	} else {
		listing.amount=1;
		cartItems={
			[listing.tag]:listing
		}
	}

	localStorage.setItem('productsInCart',JSON.stringify(cartItems));
}

function totalCost(product) {
	let cartCost=localStorage.getItem('totalCost');


	if(cartCost!=null) {
		cartCost=parseInt(cartCost);
		localStorage.setItem('totalCost',cartCost+product.price);
	} else {
		localStorage.setItem('totalCost',product.price);
	}

}

function displayCart(){

	let cartCost=localStorage.getItem('totalCost');
	let cartItems=localStorage.getItem('productsInCart');
	cartItems=JSON.parse(cartItems);
	let productContainer=document.querySelector(".products");

	if(cartItems && productContainer) {
		productContainer.innerHTML='';
		Object.values(cartItems).map(item =>{
			productContainer.innerHTML += `
				<div class='product'>
					<img src="img/products/${item.src}.png">
					<span>${item.name}</span>
				</div>
				<div class="price">R${item.price},00</div>
				<div class="quantity">${item.amount}</div>
				<div class="total">
					R${item.amount * item.price},00
				</div>`;
		});

		productContainer.innerHTML += `
			<div class="basketTotalContainer">
				<h5 class="basketTotalTitle">
					Basket Total
				</h5>
				<h5 class="basketTotal">
					R${cartCost},00
				</h5>
			</div>`;
	}
}

onLoadCartNumber();
displayCart();
