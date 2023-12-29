<template lang="">
	 <div class="body_wrap">
		<Top/>
		<!-- slide-bar start -->
		<aside class="slide-bar">
			<div class="close-mobile-menu">
				<a href="javascript:void(0);"><i class="fal fa-times"></i></a>
			</div>

			<!-- sidebar-info start -->
			<div class="cart_sidebar">
				<button type="button" class="cart_close_btn"><i class="fal fa-times"></i></button>
				<h2 class="heading_title text-uppercase">Cart Items - <span>4</span></h2>
				<div class="cart_items_list">
					<div class="cart_item">
						<div class="item_image">
							<img src="../../assets/client/img/product/img_01.png" alt="image_not_found">
						</div>
						<div class="item_content">
							<h4 class="item_title">
								Rorem ipsum dolor sit amet.
							</h4>
							<span class="item_price">$19.00</span>
							<button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
						</div>
					</div>
					<div class="cart_item">
						<div class="item_image">
							<img src="../../assets/client/img/product/img_02.png" alt="image_not_found">
						</div>
						<div class="item_content">
							<h4 class="item_title">
								Rorem ipsum dolor sit amet.
							</h4>
							<span class="item_price">$22.00</span>
							<button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
						</div>
					</div>
					<div class="cart_item">
						<div class="item_image">
							<img src="../../assets/client/img/product/img_03.png" alt="image_not_found">
						</div>
						<div class="item_content">
							<h4 class="item_title">
								Rorem ipsum dolor sit amet.
							</h4>
							<span class="item_price">$43.00</span>
							<button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
						</div>
					</div>
					<div class="cart_item">
						<div class="item_image">
							<img src="../../assets/client/img/product/img_04.png" alt="image_not_found">
						</div>
						<div class="item_content">
							<h4 class="item_title">
								Rorem ipsum dolor sit amet.
							</h4>
							<span class="item_price">$14.00</span>
							<button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
						</div>
					</div>
				</div>
				<div class="total_price text-uppercase">
					<span>Sub Total:</span>
					<span>$87.00</span>
				</div>
				<ul class="btns_group ul_li">
					<li><a href="cart.html" class="thm-btn">
							<span class="btn-wrap">
								<span>View Cart</span>
								<span>View Cart</span>
							</span>
						</a></li>
					<li><a href="checkout.html" class="thm-btn thm-btn__black">
							<span class="btn-wrap">
								<span>Checkout</span>
								<span>Checkout</span>
							</span>
						</a></li>
				</ul>
			</div>
			<!-- sidebar-info end -->

			<!-- side-mobile-menu start -->
			<nav class="side-mobile-menu">
				<div class="header-mobile-search">
					<form role="search" method="get" action="#">
						<input type="text" placeholder="Search Keywords">
						<button type="submit"><i class="ti-search"></i></button>
					</form>
				</div>
				<ul id="mobile-menu-active">
					<li class="dropdown"><a href="index.html">Home</a>
						<ul class="sub-menu">
							<li><a href="index.html">Home One</a></li>
							<li><a href="home-2.html">Home Two</a></li>
							<li><a href="home-3.html">Home Three</a></li>
						</ul>
					</li>
					<li class="dropdown">
						<a href="#">Shop</a>
						<ul class="sub-menu">
							<li><a href="shop.html">Shop Default</a></li>
							<li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
							<li><a href="shop-single.html">Shop Single</a></li>
							<li><a href="cart.html">Shop Cart</a></li>
							<li><a href="checkout.html">Shop Checkout</a></li>
							<li><a href="account.html">Account</a></li>
						</ul>
					</li>
					<li><a href="shop.html">Accesories</a></li>
					<li class="dropdown">
						<a href="#!">Blog</a>
						<ul class="sub-menu">
							<li><a href="news.html">Blog</a></li>
							<li><a href="news-single.html">Blog Details</a></li>
						</ul>
					</li>
					<li class="dropdown">
						<a href="#!">Pages</a>
						<ul class="submenu">
							<li><a href="about.html">About Us</a></li>
							<li><a href="about.html">Account</a></li>
							<li><a href="404.html">404</a></li>
						</ul>
					</li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
			<!-- side-mobile-menu end -->
		</aside>
		<div class="body-overlay"></div>
		<!-- slide-bar end -->
		<!-- <main> -->

		<router-view></router-view>
		<!-- </main> -->

		<Footer></Footer>

		<!-- start newsletter-popup-area-section -->
		<section class="newsletter-popup-area-section">
			<div class="newsletter-popup-area">
				<div class="newsletter-popup-ineer">
					<button class="btn newsletter-close-btn"><i class="fal fa-times"></i></button>
					<div class="img-holder">
						<img src="../../assets/client/img/bg/newsletter.jpg" alt>
					</div>
					<div class="details">
						<h4>Get 45% discount shipped to your inbox</h4>
						<p>Subscribe to the radios eCommerce newsletter to receive timely updates to your favorite
							products</p>
						<form>
							<div>
								<input type="email" placeholder="Enter your email" />
								<button type="submit">Subscribe</button>
							</div>
							<div>
								<label class="checkbox-holder"> Don't show this popup again!
									<input type="checkbox" class="show-message">
									<span class="checkmark"></span>
								</label>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import Top from "../../components/client/Top.vue";
import Footer from "../../components/client/Footer.vue";

import "../../assets/client/js/jquery-3.5.1.min.js";
import "../../assets/client/js/bootstrap.bundle.min.js";
import "../../assets/client/js/slick.js";
import "../../assets/client/js/backToTop.js";
import "../../assets/client/js/uikit.min.js";
import "../../assets/client/js/resize-sensor.min.js";
import "../../assets/client/js/theia-sticky-sidebar.min.js";
// import "../../assets/client/js/wow.min.js";
import "../../assets/client/js/jqueryui.js";
import "../../assets/client/js/touchspin.js";
import "../../assets/client/js/countdown.js";
import "../../assets/client/js/jquery.magnific-popup.min.js";
import "../../assets/client/js/metisMenu.min.js";
import "../../assets/client/js/main.js";

export default {
	
	components: {
		Top,
		Footer,
	},
	

}
</script>
<style>
@import "../../assets/client/css/bootstrap.min.css";
@import "../../assets/client/css/fontawesome.css";
@import "../../assets/client/css/animate.css";
@import "../../assets/client/css/metisMenu.css";
@import "../../assets/client/css/uikit.min.css";
@import "../../assets/client/css/jquery-ui.css";
@import "../../assets/client/css/slick.css";
@import "../../assets/client/css/magnific-popup.css";
@import "../../assets/client/css/main.css";
</style>