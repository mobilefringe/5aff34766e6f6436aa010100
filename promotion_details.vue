<template>
    <div class="main_content" v-if="currentPromo">
    	<section class="directory_map">
    		<div class="section_content">
    			<div class="directory_title">   
    				<h1>PROMOTION DETAILS</h1>
    			</div>
    			<div class="promo-border">
    				<div  class="promo_detail_image">
    					<img src="{{event.promo_image_path}}">      
    				</div>
    				<div class="promo_detail_div">
    					<router-link :to="'/stores/'+currentPromo.store.slug}}">
    						<h3>{{currentPromo.store.name}}</h3>
    					</router-link>
    					<p>{{currentPromo.name}}</p>
    					<p><strong>{{promo.start_date | moment("MMM DD", timezone)}} - {{promo.end_date | moment("MMM DD", timezone)}}</strong></p>
    					<p>{{currentPromo.description}}</p>
    				</div>
    				<div class="clearfix"></div>
    			</div>
    		</div>
    	</section>
    	{% if promo.description %}
    	<section class="directory_store_description">
    		<div class="section_content">
    			<div class="wrap-90">
    				<div class="directory-details">
    					<p class="blue-title">Promotion Description</p>
    					<div class="hours_divider"></div>
    					<div class="store-description">
    						<p>{{promo.description}}</p>
    					</div>
    					<div class="hours_divider"></div>
    				</div>
    			</div>
    		</div>
    	</section>
    	{% endif %}
    </div>
</template>

<script>
    define(['Vue', 'vuex', 'moment', 'vue-lazy-load'], function(Vue, Vuex, moment, VueLazyload) {
        Vue.use(VueLazyload);
        return Vue.component("promo-details-component", {
            template: template, // the variable template will be injected,
            props:['id', 'locale'],
            data: function() {
                return {
                    currentPromo: null,
                    storePromos : null,
                    storeHours : null,
                    promoBanner : null
                }
            },
            beforeRouteUpdate(to, from, next) {
                this.currentPromo = this.findPromoBySlug(to.params.id);
                    if (this.currentPromo === null || this.currentPromo === undefined){
                        this.$router.replace('/');
                    }
                next();
            },
            created(){
                this.loadData().then(response => {
                    this.updateCurrentPromo(this.id);
                    var temp_repo = this.findRepoByName('Promos Banner');
                    if(temp_repo) {
                        this.promoBanner = temp_repo.images[0];
                    }
                    console.log(this.promoBanner);
                    this.promos = this.promotions;
                });
            },
            watch: {
                currentPromo : function (){
                    if(this.currentPromo != null) {
                        console.log(this.currentPromo.store);
                        if (this.currentPromo.store != null && this.currentPromo.store != undefined && _.includes(this.currentPromo.store.image_url, 'missing')) {
                            this.currentPromo.store.image_url = "//codecloud.cdn.speedyrails.net/sites/5a6a54eb6e6f647da51e0100/image/png/1518554684072/bonniedoonlogo.png";
                        }
                        else if (this.currentPromo.store == null || this.currentPromo.store == undefined) {
                            this.currentPromo.store = {};
                            this.currentPromo.store.image_url =  "//codecloud.cdn.speedyrails.net/sites/5a6a54eb6e6f647da51e0100/image/png/1518554684072/bonniedoonlogo.png";
                        }
                        var vm = this;
                        var temp_promo = [];
                        var current_id =_.toNumber(this.currentPromo.id);
                        _.forEach(this.currentPromo.store.promotions, function(value, key) {
                            if(_.toNumber(value) != current_id){
                                var current_promo = vm.findPromoById(value);
                                current_promo.description_short = _.truncate(current_promo.description, {'length': 70});
                                temp_promo.push(current_promo);
                            }
                        });
                        this.storePromos = temp_promo;
                    }
                    if(this.currentPromo.store) {
                        var storeHours = [];
                        var vm = this;
                        _.forEach(this.currentPromo.store.store_hours, function (value, key) {
                            var hour = vm.findHourById(value);
                            if(hour.day_of_week === 0){
                                hour.order = 7;
                            }
                            else {
                                hour.order = hour.day_of_week;
                            }
                            storeHours.push();
                        });
                        this.storeHours = _.sortBy(storeHours, [function(o) { return o.order; }]);
                    }
                }
            },
            computed: {
                ...Vuex.mapGetters([
                    'property',
                    'processedPromos',
                    'findPromoBySlug',
                    'findPromoById',
                    'timezone',
                    'findRepoByName',
                    'findHourById'
                ]),
                allPromos() {
                    return this.processedPromos;
                },
            },
            methods: {
                updateCurrentPromo (id) {
                    this.currentPromo = this.findPromoBySlug(id);
                    if (this.currentPromo === null || this.currentPromo === undefined){
                        this.$router.replace('/');
                    }
                },
                loadData: async function() {
                    try {
                        // avoid making LOAD_META_DATA call for now as it will cause the entire Promise.all to fail since no meta data is set up.
                        let results = await Promise.all([this.$store.dispatch("getData", "promotions"), this.$store.dispatch("getData", "repos")]);
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                },
                shareURL(slug){
                    var share_url = "http://mallmaverick.ca/promotions/" + slug;
                    return share_url;
                },
            }
        });
    });
</script>