<template>
	<div class="row page_content" v-if="dataLoaded">
		<div class="banner_div">
			<div class="bannner">
				<slick ref="slick" :options="slickOptions">
					<div class="" v-for="banner in banners" v-if="banners">
						<div class="home-banner" v-lazy:background-image="banner.image_url"></div>
					</div>
				</slick>
			</div>
		</div>
		<header-component></header-component>
		<div class="main_content">
		    <hours-component></hours-component>
    		<stores-component></stores-component>
    		<promos-component></promos-component>
    		
    		<section id="style" class="scrollspy">
            <div class="section_content">
                <div class="wrap-90">
                    <h1>LET'S GET PERSONAL.<br/>OUR STYLISTS CAN HELP.<br/></h1>
                    <p class="whitney">LEARN ALL THE STYLE SECRETS YOU WANT TO KNOW!</p>
                    <div class="style_line_break"></div>
                    <div class="style_content">
                        <div class="style_hero_img">
                            <img alt="Style Academy Logo" src="//www.mallmaverick.com/system/site_images/photos/000/027/075/original/Vector_Smart_Object1.png?1489587437">
                        </div>
                        <div class="style_line_break"></div>
                        <div class="style_wrapper">
                            <p class="whitney">YOU HAVE QUESTIONS. WHAT SHOULD I WEAR TO WORK THIS SPRING? HOW DO I PACK FOR MY VACATION? WHAT ARE THE BASICS I NEED IN MY CLOSET? HOW DO I BUY JEANS? WE'VE GOT ANSWERS.</p>
                        
                            <p class="style_text whitney">At Style Academy, you'll learn all the tips and tricks to help you dress your best - all the time.
                            <br>Our Stylist BR Pirri will teach you everything you need to know and more!</p>
                        </div>
                        <div class="style_banner">
                            <p class="whitney-medium">VISIT US IN-MALL FOR FREE MONTHLY SESSIONS</p>
                        </div>
                        <div class="style_divider"></div>
                        
                        <div class="row">
                            <div class="medium-5 columns">
                                <img class="style_img pull-left" alt="Style Academy" src="//www.mallmaverick.com/system/site_images/photos/000/027/109/original/style_academy1.jpg?1489671212">
                            </div>
                            <div class="medium-7 columns">
                                <h3 class="align-left">HOW IT WORKS</h3>
                                <p class="style_text align-left whitney">We host our 90-minute Style Academy sessions right here at the centre. Mix & mingle over light snacks and beverages, before BR begins her talk. Each session is themed around a single concept or trend - but bring your questions for BR on anything at all! Class participation is highly encouraged! Bring your girlfriends, enjoy a night of fashion and fun - and leave armed with style tips you'll love.
                                <br><br>For more information, please email <a href="mailto:info@southcentremall.com">info@southcentremall.com</a></p>
                            </div>
                        </div>
                        <div class="style_line_break"></div>
                        <div class="row">
                            <div class="medium-5 columns push-7">
                                <img class="style_img pull-right" alt="Style BR Pirri" src="//www.mallmaverick.com/system/site_images/photos/000/027/081/original/pic2.png?1489590422">
                            </div>
                            <div class="medium-7 columns pull-5">
                                <h3 class="align-right">MEET OUR STYLIST</h3>
                                <p class="style_text align-right whitney">When it comes to style and taste, BR is a wealth of knowledge! When she's not hosting Style Academy, she's busy with personal clients, styling fashion shoots, and teaching the next generation of stylish Calgarians at The Fashion Institute by Olds College. Join her at Style Academy and learn from the best.  </p>
                            </div>
                        </div>
                        <div class="style_divider"></div>
                        <div class="style_info">
                            <h1>MORE INFORMATION</h1>
                            <p class="subtitle whitney">ONE-ON-ONE SESSIONS - HOW IT WORKS</p>
                            <div class="style_wrapper">
                                <p class="style_text whitney">Book a one-on-one session with BR and she'll give you personalized advice on whatever style subject you need help in! Contact BR to book your session at <a class="whitney-medium" href="mailto:br@brpirri.com">br@brpirri.com</a></p>
                                <p class="style_text whitney">BR will offer shoppers a preferred rate of $125 per 90-minute session ($100 off her regular rate) and each shopper will receive a $25 Southcentre Gift Card at their session.</p>
                            </div>
                        </div>
                    </div>
                </div> <!-- Wrap 90 Close -->
            </div>
        </section>
		</div>
		
	</div>
</template>

<script>
    define(["Vue", "vuex", "vue!search-component", 'vue!vue-slick', 'js-cookie', 'vue-lazy-load', 'vue!hours', 'vue!stores', 'vue!promotions', 'vue!gift_card.vue'], function(Vue, Vuex, SearchComponent, slick, Cookies, VueLazyload, HoursComponent, storesComponent, promosComponent, giftcardComponent) {
        Vue.use(VueLazyload);
        return Vue.component("home-component", {
            template: template, // the variable template will be injected
            props:['locale'],
            data: function() {
                return {
                    suggestionAttribute: 'name',
                    search: '',
                    slickOptions: {
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 6000,
                        cssEase: 'linear',
                        dots: true,
                        fade: true,
                        infinite: true,
                        slidesToShow: 1,
                        speed: 1600
                    },
                    dataLoaded: false,
                    show_popup: false,
                    popup: null,
                    formData : {},
                    instaFeed: null
                }
            },
            created () {
                this.loadData().then(response => {
                    this.dataLoaded = true;
                    this.popup = this.$store.state.popups[0];
                    
                });
            },
            watch : {
                dataLoaded () {
                    var viewed = Cookies.get('popup_viewed');
                    if(this.popup !== null && this.popup !== undefined && viewed !== "true") {
                        Cookies.set('popup_viewed', "true");
                        viewed = Cookies.get('popup_viewed');
                        this.show_popup = true;
                        this.popup.image_url = "//mallmaverick.cdn.speedyrails.net" + this.popup.photo_url;
                        document.getElementById('popup_backdrop').style.display = "block";
                    }
                    else {
                        document.getElementById('popup_backdrop').style.display = "none";
                    }
                },
                formData () {
                    this.formData.name = this.formData.firstname + " " + this.formData.lastname; 
                },
                locale: function(val, oldVal) {
                    console.log("locale", this.locale);
                },
            },
            computed: {
                ...Vuex.mapGetters([
                    'property',
                    'timezone',
                    'processedStores'
                ]),
                banners () {
                    return _.orderBy(this.$store.state.banners, ['position'], ['asc']);
                },
                feature_items () {
                    // return this.$store.state.feature_items;
                    var features = this.$store.state.feature_items;
                    _.forEach(features, function(value, key) {
                      
                        if( _.includes([1], key) ) {
                            value.masonry_class = "grid-item--height2";
                        }
                        else if ( _.includes([5], key) ){
                            value.masonry_class = "grid-item--width2";
                        }
                        else {
                            value.masonry_class = " ";
                        }
                        if(value.name === null || value.name === undefined || value.name.length == 0) {
                            value.no_hover_class = false;
                        }
                        else {
                            value.no_hover_class = true;
                        }
                    });
                    return features;
                },
                mobile_feature_items () {
                    var features = this.$store.state.feature_items;
                    _.forEach(features, function(value, key) {
                      
                        if( _.includes([1], key) ) {
                            value.masonry_class = "grid-item--height2";
                        }
                        else if ( _.includes([5], key) ){
                            value.masonry_class = "grid-item--width2";
                        }
                        else {
                            value.masonry_class = " ";
                        }
                        value.mobile_order = key + 1;
                    });
                    features = _.sortBy(features, [function(o) { return o.mobile_order; }]);
                    console.log(features);
                    return features;
                }
            },
            methods: {
                loadData: async function() {
                    try {
                        // avoid making LOAD_META_DATA call for now as it will cause the entire Promise.all to fail since no meta data is set up.
                        let results = await Promise.all([this.$store.dispatch("getData", "banners"), this.$store.dispatch("getData", "feature_items"), this.$store.dispatch("getData", "promotions"), this.$store.dispatch("getData", "popups")]);
                        return results;
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                },
                closePopup() {
                    this.show_popup = false;
                    document.getElementById('popup_backdrop').style.display = "none";
                }
            }
        })
    })
</script>