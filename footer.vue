<template>
	<footer>
		<section class="footer">
			<div class="section_content">
				<div class="footer_background">
					<div class="footer_wrap">
						<div class="footer_content">
							<h1 class="black">You can reach Guest Services at:<br/><span class="chronicle-display-italic black">(403) 271-7670</span></h1>
							<social-links></social-links>
							<hr>
							<section id="newsletter">
								<div class="section_content" style="padding-top:0px;">
									<div class="newsletter_background">
										<div class="form_container">
											<div class="newsletter_wrap">
												<div class="newsletter_content">
													<h1 class="newsletter_title">EMAIL NEWSLETTER SIGN UP</h1>
													<form id="sub_form" method="post" action="https://campaign.eflyermaker.com">
														<input type="hidden" name="action" value="Campaigns_subscribe" />
														<input type="hidden" name="p" value="53616c7465645f5f5baab24a14e961d02d3711cb9e48743b" />
														<div class="row form_row">
															<div class="small-12 columns">
																<input type="email" class="newsletter_input" id="email" name="email" placeholder="Enter your email address *" value="" size="40" required data-msg="Please enter your email" data-rule-email="true" data-msg-email="Please enter a valid email address">
															</div>
														</div>
														<div class="row form_row">
															<div class="small-6 columns">
																<input type="Text" class="newsletter_input" id="firstname" name="firstname" placeholder="First Name *" value="" required data-msg="Please enter your first name">
															</div>
															<div class="small-6 columns">
																<input type="Text" class="newsletter_input" id="lastname" name="lastname" placeholder="Last Name *" value="" required data-msg="Please enter your last name">
															</div>
														</div>
														<div class="row form_row">
															<div class="small-6 columns">
																<input type="Text" class="newsletter_input" id="postalcode" name="postalcode" placeholder="Postal Code *" value="" required data-msg="Please enter your postal code">
															</div>
															<div class="small-6 columns">
																<input type="hidden" name="simple" value="1">
																<input type="hidden" name="subscriber_source" value="eFlyerMaker Subscription Form">
																<button type="submit" class="newsletter_btn">Subscribe</button>
															</div>
														</div>
														<div class="row">
                                                        	<div class="small-12 column newsletter_check">
                                                        		<input style="margin-bottom:5px;" type="checkbox" name="publication_agreement" id="publication_agreement" value="1" required data-msg="Please agree to receive newsletters from us">
                                                        		<label style="display:inline;" for="publication_agreement">I agree to receive newsletters from Southcentre Mall.</label>
                                                        	</div>
                                                        </div>
                                                        <div>
                                                        	<div class="small-12 columns">
                                                        		<label id="error_publication_agreement" for="publication_agreement" generated="true" class="text-danger error"></label>
                                                        	</div>
                                                        </div>
                                                        <div class="row">
                                                        	<div class="small-12 columns">
                                                        		<input style="margin-bottom:5px;" type="checkbox" name="consent_policy" id="consent_policy" value="1" required data-msg="Please confirm your consent to receive electronic communications from us">
                                                        		<label style="display: inline;" class="agreementLabel" for="consent_policy">I agree to receive communications from Southcentre Mall. You can unsubscribe at anytime. For more details about personal privacy, please read our <a href="http://www.oxfordproperties.com/corp/en/oxford-properties/privacy-policy" target="_blank">Privacy Policy</a> or contact us: 100 Anderson Road SE Calgary, Alberta, Canada T2J 3V1</label>
                                                        	</div>
                                                        </div>
                                                        <div class="row">
                                                        	<div class="small-12 columns">
                                                        		<label id="error_policy" for="consent_policy" generated="true" class="text-danger error"></label>
                                                        	</div>
                                                        </div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<h2 class="chronicle black">CORNER<em>&nbsp;&nbsp;of&nbsp;&nbsp;</em>ANDERSON<em>&nbsp;&nbsp;&&nbsp;&nbsp;</em>MACLEOD</h2>
							<hr>
							<div class="footer_nav">
								<ul class="footer_links">
									<li><a href="/pages/southcentre-about-us">About Us</a></li>
									<li><a href="/pages/southcentre-contact">Contact</a></li>
									<li><a href="/jobs">Careers</a></li>
									<li><a href="/pages/southcentre-leasing">Leasing</a></li>
									<li><a href="/retail_users/sign_in">Retailer Login</a></li>
									<li><a href="http://www.oxfordproperties.com/corp/en/oxford-properties/privacy-policy" target="_blank">Privacy Statement</a></li>
									<li><a href="http://www.oxfordproperties.com/corp/en/oxford-properties/accessibility/" target="_blank">Accessibility Policy</a></li>
								</ul>
								<img alt="logo oxford" src="https://www.mallmaverickstaging.com/system/site_images/photos/000/014/227/original/logo_oxford_black.png?1479314720"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</footer>
</template>
<style>
	footer td,footer td label {
    	font-family: WhitneyHTF-Book !important;
    	font-size: 1.1383333467168em !important;
	}
	footer tr {
    	background:none !important;
    	vertical-align: top;
	}
	footer table{
    	background:none !important;
    	border: 0px !important;
	}
	footer .agreementLabel{
	    vertical-align: top;
	}
	footer .newsletter_agreement {
	    margin-left: 10px;
	}
	footer .error{color:#F00}
	@media (max-width:768px){
    	footer .agreementLabel{
    	    vertical-align: none !important;
    	} 
	}
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
    define(["Vue", "vue!social_links"], function(Vue, socialLinks) {
        return Vue.component("footer-component", {
            template: template, // the variable template will be injected,
        });
    });
</script>