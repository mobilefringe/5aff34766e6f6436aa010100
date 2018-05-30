southcentre-holiday-information
<template>
	<footer>
		<section class="footer">
			<div class="section_content">
				<div class="footer_background">
					<div class="footer_wrap">
						<div class="footer_content">
						    <!--<hr>-->
							<h1 class="black">You can reach Guest Services at:<br/><span class="chronicle-display-italic black">(403) 271-7670</span></h1>
							<social-links></social-links>
							<h2 class="black chronicle">CORNER<em>&nbsp;&nbsp;of&nbsp;&nbsp;</em>ANDERSON<em>&nbsp;&nbsp;&&nbsp;&nbsp;</em>MACLEOD</h2>
							<hr>
							<div class="footer_nav">
								<ul class="footer_links">
									<li><a href="/pages/southcentre-about-us">About Us</a></li>
									<li><a href="/pages/southcentre-contact">Contact</a></li>
									<li><a href="/jobs">Careers</a></li>
									<li><a href="/pages/southcentre-leasing">Leasing</a></li>
									<li><a href="/pages/southcentre-media">Media</a></li>
									<li><a href="/retail_users/sign_in">Retailer Login</a></li>
									<li><a href="http://www.oxfordproperties.com/corp/downloads/Oxford_Privacy_Statement-EN_2017.pdf">Privacy Statement</a></li>
								</ul>
								<img  alt="logo oxford" src="//codecloud.cdn.speedyrails.net/sites/5aff34766e6f6436aa010100/image/png/1526676569100/logo_sc.png"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</footer>
</template>
<style>
	@media only screen and (max-width: 120.063em) and (min-width: 64.063em) {
        footer  h1 {
            font-size: 3rem;
        }
        .footer_content h2 {
            font-size: 1.2rem;
        }
    }

</style>
<script>
    define(["Vue", "vue!social_links"], function(Vue, socialLiks) {
        return Vue.component("guest-services-component", {
            template: template, // the variable template will be injected,
        });
    });
</script>