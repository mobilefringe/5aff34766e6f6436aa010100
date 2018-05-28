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
    	<div class="main_content">
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
                      <img  alt=" seating" src="/system/site_images/photos/000/003/905/original/icon_seating.png?1410445594">
                      <h3>SOFT SEATING AREAS</h3>
                      <div class="">
                        <p>Whether you're looking for a place to connect with friends or just to get off your feet for a minute, sophisticated yet welcoming soft seating areas are throughout the Shopping Centre.
                        Plus, there's free wifi wherever you end up.</p>
                      </div>
                    </div>
                  </div>
                  <div class="amenity_box">
                    <div class="amenity_cell">
                      <img alt="play" src="/system/site_images/photos/000/003/903/original/icon_play.png?1410445548">
                      <h3>KIDS PLAY AREA</h3>
                      <div class="">
                        <p>Your little shoppers need a unique and inviting space to let their imaginations run wild while at Southcentre. ROAR Play Park is full of vibrant displays, interactive games and a variety of diversions, all to keep your little ones happy and entertained during your trip to Southcentre.</p>
                      </div>
                    </div>
                  </div>
                  <div class="amenity_box extra_border_bottom">
                    <div class="amenity_cell">
                      <img  alt="washroom icon" src="/system/site_images/photos/000/003/904/original/icon_washroom.png?1410445571">
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
                      <img  alt="food court" src="/system/site_images/photos/000/003/906/original/icon_food.png?1410445623">
                      <h3>FOOD COURT</h3>
                      <div class="">
                        <p>No matter what you're in the mood for, our spacious and well-located Food Court has something that will satisfy. You'll find 15 eateries and plenty of sunshine on level 2, up the escalator at the north entrance. Or if you prefer a sit-down meal, visit Milestones or Chili's.</p>
                      </div>
                    </div>
                  </div>
                  <div class="amenity_box">
                    <div class="amenity_cell">
                      <img  alt="nursing room" src="/system/site_images/photos/000/003/907/original/icon_nursing.png?1410445651">
                      <h3>NURSING ROOM</h3>
                      <div class="">
                        <p>When the little one needs to eat, you can nurse them in the luxury, convenience, and privacy of one of our Nursing Rooms. These beautiful and tranquil rooms are located in the main washroom areas, and feature comfortable seating, microwaves, sinks, change area, TVs, and even an interactive play area for toddlers. Emergency baby supplies are also available at our main Guest Services desk, at the north entrance.</p>
                      </div>
                    </div>
                  </div>
                  <div class="amenity_box extra_border_bottom">
                    <div class="amenity_cell">
                      <img alt="kids strollers" src="/system/site_images/photos/000/003/908/original/icon_strollers.png?1410445694">
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
	    <footer-component></footer-component>
    </div>
</template>
<style>
    .main_content {
        margin-top: 100px;
    }
</style>
<script>
    define(["Vue", "vuex", "moment", "moment-timezone", "vue-moment", "vue!footer"], function(Vue, Vuex, moment, tz, VueMoment, footerComponent) {
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
                }
            }
        });
    });
</script>