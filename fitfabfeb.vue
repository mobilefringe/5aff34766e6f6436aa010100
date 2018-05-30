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
	section{
    border-bottom: 0px;
    }
    .section_content{
        padding-bottom:0px !important;
    }
    .footer{
        margin-top: 0px !important;
    }
    .dotted_div{
        margin: 0 auto;
        background-image: url(//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/835/original/line_dotted_gray.png?1410202262);
        background-repeat: no-repeat;
        background-position: center;
        width: 900px;
        height: 3px;
        padding: 2.188em;
    }
    .fitImg{
        
        display: block;
        margin: 0 auto;
        padding-bottom: 20px;
    }
    
    .fitfabfeb_content p{
        margin: auto;
        padding-bottom:15px;
        font-family: Whitney-light;
        font-size: 1.1em;
    }
    .register_btn{
        margin: auto;
        display: block;
        width: 215px;
        padding-bottom:30px;
        padding-top:30px;
    }
    
    .width_medium{
        width:500px;
    }
    .width_large{
        width:650px;
    }
    .width_small{
        width:400px;
    }
    
    .fitfabfeb_content h2{
        font-family: ChronicleDisplay-Roman;
        padding-bottom:15px;
    }
    .fitfabfeb_content h3{
        font-size:1.4em;
    }
    .first_class{
        margin-left: -50px !important;
    }
    .first_class span{
        padding-left:30px !important;
    }
    .second_class{
        margin-left: -25px !important;
    }
    .second_class span{
        padding-left:15px !important;
    }
    .third_class{
        margin-left: -80px !important;
    }
    .third_class span{
        padding-left: 15px !important;
    }
    
    .line_divider {
        margin: 0 auto;
        background-image: url(//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/835/original/line_dotted_gray.png?1410202262);
        background-repeat: no-repeat;
        background-position: center;
        max-width: 487px;
        height: 3px;
        padding: 1.188em;
    }
    
    @media screen and (max-width: 480px) {
        .fitImg {
            width: 95%;
        }
        .width_medium, .width_large, .width_small{
            width:100%
        }
        .section_content{
            padding:5px;
        }
        }

</style>
<script>
    define(["Vue", "vue!social_links"], function(Vue, socialLiks) {
        return Vue.component("fitfabfeb-component", {
            template: template, // the variable template will be injected,
        });
    });
</script>