Vue.component('footer-comp', {
	template:
		`
	<div class="footer">
		<div class="footer__subscription">
			<div class="footer__subscription-wrapp">

				<div class="footer__subscription-img-text-wrapp">
					<img class="footer__subscription-pic" src="img/foot-women.png" alt="women">

					<p class="footer__subscription-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <i>a
							pulvinar
							purus condimentum</i> “
					</p>
				</div>

				<form class="footer__subscription-form" action="#!">
					<h3 class="footer__subscription-form-title">subscribe <span
							class="footer__subscription-form-subtitle">for our newletter
							and promotion</span> </h3>

					<fieldset class="footer__subscription-button-send">
						<label class="visually-hidden">email</label>
						<input type="email" class="footer__subscription-input" required placeholder="Enter Your Emai">
						<button type="submit" class="footer__subscription-button">Subscribe</button>
					</fieldset>

				</form>
			</div>
		</div>

		<div class="footer__copy">
			<div class="container">

				<div class="footer__copy-copy-messend">
					<h4 class="footer__copy-copy">&copy; 2022 Brand All Rights Reserved.</h4>

					<ul class="footer__copy-list">
						<li class="footer__copy-item">
							<a href="#!">
								<img class="footer__copy-icon" src="img/svg/icon-facebook.svg" alt="icon-facebook">
							</a>
						</li>
						<li>
							<a href="#!">
								<img class="footer__copy-icon" src="img/svg/icon-instagram.svg" alt="icon-instagram">
							</a>
						</li>
						<li>
							<a href="#!">
								<img class="footer__copy-icon" src="img/svg/icon-pinterest.svg" alt="icon-pinterest">
							</a>
						</li>
						<li>
							<a href="#!">
								<img class="footer__copy-icon" src="img/svg/icon-twitter.svg" alt="icon-twitter">
							</a>
						</li>
					</ul>


				</div>


			</div>
		</div>

	</div>
`

});