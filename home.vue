<template>
	<div class="page_content" v-if="dataLoaded">
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
		<header-component v-if="showStickyMenu" class="fixed"></header-component>
		<div class="main_content">
		    <hours-component></hours-component>
    		<stores-component></stores-component>
    		<promos-component></promos-component>
    		<styleacademy-component></styleacademy-component>
            <giftcard-component></giftcard-component>
            <kidsclub-component></kidsclub-component>
            <events-component></events-component>
		</div>
        <footer-component></footer-component>
	</div>
</template>

<script>
    define(["Vue", "vuex", "vue!search-component", 'vue!vue-slick', 'js-cookie', 'vue-lazy-load', 'vue!hours', 'vue!stores', 'vue!promotions','vue!style_academy', 'vue!gift_card', 'vue!kids_club', 'vue!events', 'vue!footer'], function(Vue, Vuex, SearchComponent, slick, Cookies, VueLazyload, HoursComponent, storesComponent, promosComponent, styleComponent, giftcardComponent, kidsclubComponent, eventComponent, footerComponent) {
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
                    showStickyMenu: false,
                    popup: null,
                    formData : {},
                    instaFeed: null
                }
            },
             // created() {
            //     window.addEventListener('scroll', this.enableStickyNavbar);  
            // },
            created () {
                this.loadData().then(response => {
                    this.dataLoaded = true;
                    this.popup = this.$store.state.popups[0];
                    
                });
                window.addEventListener('scroll', this.enableStickyNavbar); 
            },
            mounted () {
                // From testing, without a brief timeout, it won't work.
                if (this.$route.hash) {
                    setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
                }
            },
            watch : {
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
                },
                enableStickyNavbar(e) {
                    if (window.pageYOffset >= (window.innerHeight-200)) {
                        this.showStickyMenu = true;
                    } else {
                        this.showStickyMenu = false;
                    }
                }
            },
            destroyed: function() {
                window.removeEventListener('scroll', this.enableStickyNavbar);
            },
        })
    })
</script>