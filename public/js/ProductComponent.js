Vue.component('products', {
	props: ['products'],
	template: `<div class="catalog__list">
                <product v-for="item of products" 
                :key="item.id_product" 
               
                :product="item"></product>
               </div>`
});
Vue.component('product', {
	props: ['product'],
	template:
		`
	<div class="catalog__card" >
		<div class="catalog__card-wrp">
			<img class="catalog__card-img" :src="product.img" alt="jacket">
				<div class="catalog__card-overlay"></div>
				<button data-productId="0" type="button" class="catalog__button-overlay" @click="$parent.$emit('add-product', product)">
					<img class="catalog__btn-basket-img" src="img/svg/btn-basket.svg" alt="btn">
						<span class="catalog__btn-text">Add to Cart</span>
				</button>
		</div>

		<h3 class="catalog__card-title">{{product.product_name}}</h3>
		<p class="catalog__card-text">{{product.description}}</p>
		<p class="catalog__card-price">$<span class="catalog__card-price-value">{{product.price.toLocaleString()}}</span></p>
	</div>

	`

})






	`
            <div class="product-item">
                <img class="product-img" :src="product.img" alt="Some img">
                
                    <h3 class="product-title">{{product.product_name}}</h3>
                    <p class="product-price">{{product.price.toLocaleString()}}</p>
                    <button class="product__buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                
            </div>
    `

			// можно вместо    <button class="buy-btn"@click="$parent.$emit('add-product', product)   написать    @click="$root.addProduct(product)">Купить</button>

