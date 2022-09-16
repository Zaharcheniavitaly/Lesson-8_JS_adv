Vue.component('sales-comp', {
	template: `
	
<section class="sales">
<div class="container">

	<h2 class="visually-hidden">sales</h2>
	<ul class="sales__list">
		<li class="sales__item sales__item--women">
			<p class="sales__text">30% off</p>
			<h3 class="sales__title">for women</h3>
		</li>

		<li class="sales__item sales__item--men">
			<p class="sales__text">hot deal</p>
			<h3 class="sales__title">for men</h3>
		</li>

		<li class="sales__item sales__item--kids">
			<p class="sales__text">new arrivals</p>
			<h3 class="sales__title">for kids</h3>
		</li>

		<li class="sales__item sales__item--accesories">
			<p class="sales__text">luxirous & trendy</p>
			<h3 class="sales__title">accesories</h3>
		</li>
	</ul>
</div>
</section>
`

});