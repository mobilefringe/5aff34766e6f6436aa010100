<template>
    <div>
        <div class="main_content" v-if="id == 'southcentre-contact'">
          <section class="hours">
            <div class="section_content">
              <div class="wrap-90">
                <h1>CONTACT</h1>
                <h2 class="about_subheading">Southcentre is proudly managed by Oxford Properties.</h2>
                <div class="hours_divider"></div>
                <h3 class="contact_subheading">Guest Services</h3>
                <p class="contact_content contact_phone">(403) 271-7670</p>
                <div class="margin_20" style="margin-bottom:30px;"></div>
                <h3 class="contact_subheading">Administration Office</h3>
                <p class="contact_content contact_phone">(403) 225-9100</p>
                <div class="hours_divider"></div>
                <h2 class="contact_subheading">Email</h2>
                <p class="contact_content"><a class="blue contact-email" href="mailto:info@southcentremall.com">info@southcentremall.com</a></p>
              </div>
            </div>
          </section>
          <section class="pay_it">
            <div class="section_content">
              <div class="wrap-90">
                <h1>LOCATION</h1>
                <p class="contact_content margin_0"><span class="blue">MAILING ADDRESS<a target="_blank" href="https://goo.gl/maps/nJ3xB"> / DIRECTIONS</a></span></p>
                <p class=" contact_content margin_0 address_para">Southcentre Mall Unit 142, 100 Anderson Road SE Calgary, Alberta, Canada T2J 3V1</p>
                <div class="map">
                  <iframe title="directions map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2513.352194545045!2d-114.0661583!3d50.9541923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176cb655cd963%3A0x841373b8b29e6a9!2s100+Anderson+Rd+SE%2C+Southcentre+Mall%2C+Calgary%2C+AB+T2J+3V1!5e0!3m2!1sen!2sca!4v1410361521688" class="map_frame" width="100%" frameborder="0" style="border:0"></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
    	<div class="main_content" v-else-if="id == 'southcentre-leasing'">
    		<section>
    			<div class="section_content leasing_page">
    				<div class="wrap-90">
    					<h1>LEASING</h1>
    					<h2 class="about_subheading">The best brands shine here.</h2>
    					<div class="hours_divider"></div>
    					<p class="whitney-light leasing_content">An elegant, seamless shopping experience. An affluent and loyal shopper base.</p>
    					<div class="margin_20"></div>
    					<p class="whitney-light margin_0 leasing_content">A spectacular centre that's easier to get to  and much easier to enjoy.</p>
    					<div class="margin_20"></div>
    					<p class="whitney-light margin_0">This is superior Calgary retail. Will you be here?</p>
    					<div class="hours_divider"></div>
    				</div>
    			</div>
    		</section>
    		<section class="pay_it">
    			<div class="section_content">
    				<div class="wrap-90">
    					<h1>ENQUIRIES</h1>
    					<div class="hours_divider"></div>
    					<h3 class="contact_subheading ">Permanent Leasing</h3>
    					<div class="margin_20"></div>
    					<p class="margin_0 whitney"><strong>Contact</strong>
    					<div class="margin_20"></div>
    					<p class="margin_0 whitney"><strong>Ashley Roberts</strong>, Director, Retail Leasing</p>
    					<p class="margin_0 whitney">Phone: 403-206-6445</p>
    					<p class="margin_0 whitney">aroberts@oxfordproperties.com</p>
    					<a href="http://www.oxfordproperties.com/corp/Web/Default.aspx" target="_blank" class="blue">Oxford Properties</a>
    					<div class="margin_20"></div>
    					<div class="hours_divider"></div>
    					<h3 class="contact_subheading">Specialty Leasing</h3>
    					<p class="margin_0 whitney">(in-line, carts, kiosks, sponsorship)</p>
    					<a target="_blank" href="//www.mallmaverick.com/system/site_images/photos/000/035/744/original/SOM_332_LeasingApplicationForm2018_V1.pdf?1513969155" class="blue">Download Application Form</a>
    					<div class="margin_20"></div>
    					<p class="margin_0 whitney"><strong>Contact</strong>
    					<div class="margin_20"></div>
    					<p class="margin_0 whitney"><strong>Brianne Larson</strong>, Manager, Specialty Leasing</p>
    					<p class="margin_0 whitney">Phone: 403-225-5332</p>
    					<p class="margin_0 whitney">Blarson@oxfordproperties.com</p>
    					<a href="http://www.oxfordproperties.com/corp/Web/Default.aspx" target="_blank" class="blue">Oxford Properties</a>
    					<div class="margin_20"></div>
    					<div class="hours_divider"></div>
    				</div>
    			</div>
    		</section>
    	</div>
    	<div class="main_content" v-else-if="id == 'southcentre-guest-services'">
        	<section>
        		<div class="section_content leasing_page">
        			<div class="wrap-90">
        				<h1>GUEST SERVICES</h1>
        				<div class="margin_20"></div>
        				<p style="max-width:850px" class="contact_content">
        					Southcentre is filled with thoughtful details that make life easier for you and your family. Your experience starts with easy access to the property and plenty of parking and just gets better from there. Here are just a few of the amenities we offer:
        				</p>
        				<!--<div class="margin_20"></div>-->
        				<div class="guest_lists">
        					<div class="medium-6 columns">
        						<div class="guest-service-info">
        							<p class="list_heading">Offered at Guest Services</p>
        							<ul>
        								<li><a href="/#giftcard"><span class="blue">Gift Card</span></a> sales</li>
        								<li>Coat and parcel check</li>
        								<li>Wheelchair loans</li>
        								<li>Visitor Information Centre</li>
        								<li>Gift Wrapping (location will change during holiday season)</li>
        							</ul>
        						</div>
        					</div>
        					<div class="medium-6 columns">
        						<div class="guest-service-info">
        							<p class="list_heading">Offered throughout the Shopping Centre</p>
        							<ul>
        								<li>SmarteCarte strollers available for rent</li>
        								<li>Themed play area, ideal for younger children (aged 1 to 11)</li>
        								<li>Two themed nursing rooms available, one at each main washroom</li>
        								<li>Community room, available for booking</li>
        								<li>Free wifi</li>
        								<li>Text Concierge (just text Guest Services if you need help or a question answered).</li>
        								<li>Complementary mobile device charge bar in the Food Court.</li>
        								<li>Water coolers with cold, filtered water and filling stations.</li>
        								<li><a href="/#style"><span class="blue">Southcentre's Style Academy</span></a></li>
        							</ul>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
        	</section>
        	<section>
        		<div class="section_content">
        			<div class="wrap-90">
        				<h1>AMENITIES</h1>
        				<div class="amenities">
        					<div class="medium-6 columns">
        						<div class="amenity_box extra_border_top">
        							<div class="amenity_cell">
        								<img  alt=" seating" src="//mallmaverick.com/system/site_images/photos/000/003/905/original/icon_seating.png?1410445594">
        								<h3>SOFT SEATING AREAS</h3>
        								<div class="">
        									<p>Whether you're looking for a place to connect with friends or just to get off your feet for a minute, sophisticated yet welcoming soft seating areas are throughout the Shopping Centre.
        										Plus, there's free wifi wherever you end up.
        									</p>
        								</div>
        							</div>
        						</div>
        						<div class="amenity_box">
        							<div class="amenity_cell">
        								<img alt="play" src="//mallmaverick.com/system/site_images/photos/000/003/903/original/icon_play.png?1410445548">
        								<h3>KIDS PLAY AREA</h3>
        								<div class="">
        									<p>Your little shoppers need a unique and inviting space to let their imaginations run wild while at Southcentre. ROAR Play Park is full of vibrant displays, interactive games and a variety of diversions, all to keep your little ones happy and entertained during your trip to Southcentre.</p>
        								</div>
        							</div>
        						</div>
        						<div class="amenity_box extra_border_bottom">
        							<div class="amenity_cell">
        								<img  alt="washroom icon" src="//mallmaverick.com/system/site_images/photos/000/003/904/original/icon_washroom.png?1410445571">
        								<h3>HOTEL STYLE WASHROOMS</h3>
        								<div class="">
        									<p>Designed to be comparable with those found in upscale restaurants, our washrooms feature high quality, contemporary touchless fixtures, extra large baby change stations, generous common area, and separate make-up stations. Both men's and women's washrooms also include "toddler-sized" toilets.</p>
        								</div>
        							</div>
        						</div>
        					</div>
        					<div class="medium-6 columns">
        						<div class="amenity_box extra_border_top">
        							<div class="amenity_cell">
        								<img  alt="food court" src="//mallmaverick.com/system/site_images/photos/000/003/906/original/icon_food.png?1410445623">
        								<h3>FOOD COURT</h3>
        								<div class="">
        									<p>No matter what you're in the mood for, our spacious and well-located Food Court has something that will satisfy. You'll find 15 eateries and plenty of sunshine on level 2, up the escalator at the north entrance. Or if you prefer a sit-down meal, visit Milestones or Chili's.</p>
        								</div>
        							</div>
        						</div>
        						<div class="amenity_box">
        							<div class="amenity_cell">
        								<img  alt="nursing room" src="//mallmaverick.com/system/site_images/photos/000/003/907/original/icon_nursing.png?1410445651">
        								<h3>NURSING ROOM</h3>
        								<div class="">
        									<p>When the little one needs to eat, you can nurse them in the luxury, convenience, and privacy of one of our Nursing Rooms. These beautiful and tranquil rooms are located in the main washroom areas, and feature comfortable seating, microwaves, sinks, change area, TVs, and even an interactive play area for toddlers. Emergency baby supplies are also available at our main Guest Services desk, at the north entrance.</p>
        								</div>
        							</div>
        						</div>
        						<div class="amenity_box extra_border_bottom">
        							<div class="amenity_cell">
        								<img alt="kids strollers" src="//mallmaverick.com/system/site_images/photos/000/003/908/original/icon_strollers.png?1410445694">
        								<h3>KIDS STROLLERS</h3>
        								<div class="">
        									<p>SmarteCarte strollers are available for rent. Single and double strollers are available at both Southcentre’s main NORTH AND SOUTH ENTRANCE’S. Each stroller includes built-in tablets featuring kid’s programming and games. (This feature can be de-activated.) Strollers are offered on a first come, first served basis only. Double $7, Single $5, $1 back when stroller is returned. Canadian cash, VISA, MasterCard and American Express cards accepted. </p>
        								</div>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
        	</section>
        </div>
        <div class="section_content" v-else-if="id == 'southcentre-green-initiatives'" id="green_initiative_container">
            <div class="wrap-90">
                <h1>OUR COMMITMENT<br>OUR PLANET</h1>
                <div class="green_content">
                    <p class="whitney green_header_text">Southcentre takes its commitment to sustainability seriously. We strive to employ eco-friendly practices across the property at our events and activities, in our Executive Tower, and in the day to day operations of the shopping centre.</p>
                    <div class="green_line_break"></div>
                    <div class="green_hero_img"></div>
                    <div class="green_line_break"></div>
                    <p class="whitney green_header_text">Oxford Properties Group is also dedicated to finding best practices for environmental design and operation, and its Sustainable Intelligence program is constantly evolving and growing. To learn more about this program, visit <a href="http://sustainable.oxfordproperties.com" target="_blank">sustainable.oxfordproperties.com</a>.
                    <div class="green_line_break"></div>
                    <div class="green_divider"></div>
                </div>
                <div class="green_background">
                    <div class="green_line_break"></div>
                    <div class="green_content align-left">
                        <h3 class="">Awards & Accolades</h3>
                        <ul class="whitney no_bullets">
                            <li>2013 – WINNER: Oxford Sustainable Intelligence Property of the Year</li>
                            <li>2014 – WINNER: Oxford Greenest Office Challenge</li>
                            <li>2015 – WINNER: Oxford Sustainability Performance Award</li>
                            <li>2017 – CERTIFIED: BOMA Best, Certified Bronze</li>
                        </ul>
                        <div class="green_break"></div>
                        <div class="row">
                            <div class="large-6 columns">
                                <h3>What we do now:</h3>
                                <ul class="whitney">
                                    <li>Mixed use waste stations/bins: beverage recycling, mixed recycling, and landfill collection is available at all waste stations/bins in the centre</li>
                                    <li>Back-of-house organics program: all food service providers and restaurants participate in our organic waste program, diverting organics from the landfill into composting facilities instead</li>
                                    <li>Water bottle refill stations: three water bottle refill stations are available in the centre. One in the Food Court, one by the lower level washrooms, and one in our children’s play area, ROAR Play Park</li>
                                    <li>Yearly participation in Earth Hour</li>
                                </ul>
                            </div>
                            <div class="large-6 columns"></div>
                        </div>
                        <div class="row">
                            <div class="large-6 columns">
                                <ul class="whitney">
                                    <li>Use Ech2o chemical free autoscrubbers cleaning supplies</li>
                                    <li>Our Annual PINK Stampede Breakfast is also GREEN, with the support of Green Calgary</li>
                                    <li>Dedicated Green Team: a team made up of Southcentre Administration, Security, and Maintenance staff meets on a monthly basis to evaluate our green activities, implement new programs, and plan future initiatives</li>
                                </ul>
                            </div>
                            <div class="large-6 columns">
                                <ul class="whitney">
                                    <li>Installed ExactET irrigation system in 2006, reducing our water consumption for exterior landscaping. We saw a reduction of 9,639,800 litres in 2016 alone!</li>
                                    <li>Continue to upgrade and enhance our building automation systems. In the past 3 years we have reduced our electricity (kWh) by 8% </li>
                                    <li>Back-of-house recycling centre: for all retailers and tenants</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="green_content align-left">
                        <div class="green_line_break"></div>
                        <div class="green_divider"></div>
                        <div class="green_line_break"></div>
                        <h3>Our green goals:</h3>
                        <ul class="whitney">
                            <li>Electric vehicle charging</li>
                            <li>Solar power</li>
                            <li>Community initiatives and involvement</li>
                            <li>Enhance current organics program to include all areas of the mall. All food service providers and restaurants participate in our organic waste program, diverting organics from the landfill into composting facilities instead.</li>
                        </ul>
                        <div class="green_break"></div>
                        <h3>We're listening</h3>
                        <p class="whitney green_text">Do you have a great ‘green’ idea? Want some more information on our programs?<br/>Have some feedback to give us? Please email <a class="whitney-italic" href="mailto:green@southcentremall.com">green@southcentremall.com</a>.</p>
                    </div>
                </div>
            </div>
        </div>
       <div class="main_content" v-else-if="id == 'southcentre-about-us'">
        	<section class="hours">
        		<div class="section_content">
        			<div class="wrap-90">
        				<h1>ABOUT US</h1>
        				<h2 class="about_subheading">Southcentre is proudly managed by Oxford Properties.</h2>
        				<div class="gray_divider"></div>
        				<div class="about_content" style="max-width:650px">
        					Southcentre Mall is one of Calgary’s favourite shopping destinations, connecting shoppers with the brands and experiences they crave. The centre features 160 stores and services, including Calgary exclusives like Crate & Barrel, Restoration Hardware and western Canada’s first Sporting Life – and continuously adds new retailers to the mix. As part of the Oxford Properties Group family, Southcentre promises an unparalleled guest experience throughout the centre, and sustainable practices to operate the centre as efficiently as possible and conserve natural resources. Southcentre also offers our guests many services, including gift-wrapping, a monthly Style Academy and lots of children’s activities.
        				</div>
        				<div class="gray_divider"></div>
        				<div class="margin_20"></div>
        			</div>
        		</div>
        	</section>
        	<section>
        		<div class="section_content">
        			<div class="wrap-90">
        				<h1>PAY IT FORWARD <br> & GIVE IT BACK</h1>
        				<h2 class="about_subheading" style="max-width:500px;">
        					Southcentre is proud to be involved in these worthy community initiatives:
        				</h2>
        				<div class="about_content">
        					<p>
        						Host site of <span class="blue">Calgary's CIBC Run for the Cure</span><br>supporting the fight against breast cancer.
        					</p>
        					<p>
        						Partnerships with multiple organizations and charities throughout the year.
        						<br>
        						Offering a sensory friendly Halloween party.
        					</p>
        					<p>
        						Offering Special Visits with Santa for children with sensory sensitivities.
        					</p>
        				</div>
        			</div>
        		</div>
        	</section>
        	<section class="pay_it">
        		<div class="section_content">
        			<div class="wrap-90">
        				<h1>OUR COMMITMENT</h1>
        				<h2 class="about_subheading">
        					Southcentre invests in our community to worthwhile causes that fall into our three focus areas: LIVE WELL, PLAY TOGETHER and STAY SAFE.
        				</h2>
        			</div>
        		</div>
        	</section>
        </div>
        <div class="main_content" v-else-if="id == 'southcentre-media'">
            <section class="pay_it">
                <div class="section_content" style="display:block;">
                    <div class="wrap-90">
                        <h1>MEDIA</h1>
                        <h4 class=" whitney-light margin_40">ALL THE INS AND OUTS OF THE SOUTHCENTRE STORY</h4>
                        <div class="margin_20"></div>
         
                         <img alt="media" width="60%" src="//mallmaverick.com/system/site_images/photos/000/003/909/original/img_SOM.jpg?1410448074">
                        <div class="margin_20"></div>
                        <br>
                        <div class="margin_20"></div>
                        <h4>FACT SHEET</h4>
                        <p class="margin_0 whitney-light">Southcentre Fact Sheet <a href="//mallmaverick.com/system/site_images/photos/000/003/992/original/Southcentre_FactSheet.pdf?1413485805" class="blue" target="_blank">download</a></p>
                        <div class="hours_divider"></div>
                        
                        <h4>INDUSTRY NEWS</h4>
                        
                        <p class="margin_0">Special Visits with Santa <a href="http://www.ctvnews.ca/canada/canadian-malls-offer-quieter-calmer-visits-with-santa-for-kids-with-autism-1.1558284" target="_blank" class="blue">Watch</a></p>
                        <p class="margin_0">Fall Fashion -Shaw TV  <a href="https://www.youtube.com/watch?v=GeiSV5WAOFA&feature=c4-overview-vl&list=PL6FEA9179A6F7B1B1" target="_blank" class="blue">Watch</a></p>
                    </div>
                </div>
            </section>
        </div>
        <!--<div v-if="id == 'southcentre-concierge-feedback'" id="concierge-container">-->
        <!--    <div class="concierge-logo"><img alt="concierge" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/007/588/original/SOM_Tag.png?1426864225"></div>-->
        <!--    <form method="post" id="subForm">-->
        <!--        <div class="form-group-lg">-->
        <!--            <label for="fieldName">Name</label><br />-->
        <!--            <input id="fieldName" class="form-control" name="cm-name" type="text" />-->
        <!--        </div>-->
        <!--        <div class="form-group-lg">-->
        <!--            <label for="fieldEmail">Email</label><br />-->
        <!--            <input id="fieldEmail" class="form-control" name="cm-iyidlh-iyidlh" type="email" required />-->
        <!--        </div>-->
        <!--        <div class="form-group-lg">-->
        <!--            <label for="fieldPhone">Phone number</label><br />-->
        <!--            <input id="fieldPhone" class="form-control" name="cm-f-jtitlj" type="text" />-->
        <!--        </div>-->
        <!--        <div class="form-group-lg">-->
        <!--            <label for="fieldFeedback">Feedback</label><br />-->
        <!--            <textarea id="fieldFeedback" class="form-control" name="cm-f-jtitlt" type="text"></textarea>-->
        <!--        </div>-->
        <!--        <div class="form-group">-->
        <!--            <input id="fieldCheck" name="cm-ol-juitdh" type="checkbox" /> <label id="contact-label" for="fieldCheck">Would you like to be contacted by Mall Management regarding your feedback?</label>-->
        <!--        </div>-->
        <!--        <div class="form-group">-->
        <!--            <button class="btn btn-default btn-lg" type="submit">Submit</button>-->
        <!--        </div>-->
        <!--        <div class="form-group" id="thankyou_msg">-->
        <!--        </div>-->
        <!--    </form>-->
        <!--</div>-->
	    <footer-component></footer-component>
    </div>
</template>
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/008/179/original/sweet-alert.min.jfs?1428439365"></script>
<link rel="stylesheet" type="text/css" href="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/008/178/original/sweet-alert.css?1428439365">
<script>
    $('meta[name=viewport]').attr('content','width=device-width, user-scalable=no');
</script>
<style>
    .main_content {
        margin-top: 100px;
    }
    .concierge-logo{
      position: absolute;
      top: 45px;
      left: 405px;
    }
    #concierge-container{
      background: url("https://www.mallmaverick.com/system/site_images/photos/000/030/093/original/SOM_239_GuestServicesScreens_2560x1440_FA3_(2).jpg?1497296476") no-repeat center center; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-color: #E5E2DA;
      position: relative;
      width: 2560px;
      height: 1440px;
    }    
    #subForm{
      position: absolute;
      top: 300px;
      left: 200px;

    }
    #subForm{
      font-size: 18pt;
    }
    #subForm label{
        font-size: 18pt !important;
        color:#000;
    }
    #subForm input{
      font-size: 18pt;
      height: 65px;
      border-radius: 6px;
        border: 1px solid gray;
    }
    #subForm textarea{
        font-size: 18pt;
        height: 200px;
        border-radius: 6px;
        border: 1px solid gray;
    }
    #subForm .form-group-lg{
      margin: 25px 0px;
    }
    #subForm .btn{
      font-size: 20pt;
      margin: 20px 0 0 0;
    }
    #fieldCheck{
      height: 30px !important;
      width: 30px;
    }
    #contact-label{
      font-size: 15pt;
      font-weight: normal;
    }
    .online_chat {
        display: none;
    }
    
</style>
<script>
    define(["Vue", "vuex", "moment", "moment-timezone", "vue-moment", "vue!footer", 'jquery'], function(Vue, Vuex, moment, tz, VueMoment, footerComponent, $) {
        return Vue.component("page-details-component", {
            template: template, // the variable template will be injected,
            data: function() {
                return {
                    currentPage: null
                }
            },
            props:['id', 'locale'],
            beforeRouteUpdate(to, from, next) {
                this.updatePageData(to.params.id);
                next();
            },
            created(){
               this.updatePageData(this.id);
            },
            computed: {
                ...Vuex.mapGetters([
                    'property',
                    'timezone',
                    'findRepoByName'
                ])
            },
            methods: {
                loadData: async function(id) {
                    try {
                        // avoid making LOAD_META_DATA call for now as it will cause the entire Promise.all to fail since no meta data is set up.
                        console.log("this.id", this.id);
                        let results = await Promise.all([this.$store.dispatch('LOAD_PAGE_DATA', {url: this.property.mm_host + "/pages/" + id + ".json"}),this.$store.dispatch("getData", "repos")]);
                        return results;
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                },
                updatePageData (id) {
                    this.loadData(id).then(response => {
                        if(response == null || response == undefined) {
                            this.$router.replace('/');
                        }
                        this.currentPage = response[0].data;
                    });
                },
            submitForm() {
                    e.preventDefault();
                    var checkbox = "NO";
                    if ($("#fieldCheck").is(':checked')) {
                      checkbox = "YES";
                    };
                    var data = {
                        name: $("#fieldName").val(),
                        email: $("#fieldEmail").val(),
                        phone: $("#fieldPhone").val(),
                        feedback: $("#fieldFeedback").val(),
                        agree_to_contact: checkbox
                    };
                    $.ajax({
                        type: "POST",
                        url: "//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/008/177/original/email.php?1428439361",
                        data: data,
                        success: function(){
                          alert("Thank you for your feedback!");
                          document.getElementById("subForm").reset();
                        }
                    });
                }
            }
        });
    });
</script>