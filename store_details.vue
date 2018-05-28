<template>
    <div class="main_content" v-if="currentStore">
    	<section class="directory_map">
    		<div class="section_content">
    			<div class="directory_title">
    				<h1>DIRECTORY</h1>
    			</div>
    			<div class="table-border">
    				<ul class="generic-list directory-detail">
    					<li>
    						<label class="list-cell store-detail-cell">
    							<div class="list-title">
    								<p>{{currentStore.name}}</p>
    								<p class="mobile-subtitle">{{currentStore.phone}}</p>
    							</div>
    							<div class="list-subtitle">
    								<p>Phone Number</p>
    								<p>{{currentStore.phone}}</p>
    							</div>
    						</label>
    					</li>
    				</ul>
    				<div class="store_map" id="store_details_map">
    					<div class="demo1">
    						<mapplic-png-map ref="pngmap_ref" :height="480" :hovertip="true" :storelist="allStores" :floorlist="floorList" :svgWidth="property.map_image_width" :svgHeight="property.map_image_height" @updateMap="updatePNGMap"></mapplic-png-map>                
    						<!--<div class="marker" id='scroll_to_marker' data-coords="{{store.x_coordinate | minus:28}}, {{ store.y_coordinate | minus:99}}">{{currentStore.name}}-->
    						<!--</div>-->
    					</div>
    					<div class="controls hidden">
    						<a href="#" rel="scroll_to_marker" id="anchor_id">
    							<div style="color:#FFFFFF">{{ currentStore.name }}
    							</div>
    						</a>
    					</div>
    				</div>
    			</div>
    			<router-link to="{ path: '/map', props: { store_id: currentStore.id } }" style="margin-top: 20px;display: block;">VIEW ON MAP</router-link> 
    		</div>
    	</section>
    	<section class="directory_store_description" v-if="currentStore.description">
    		<div class="section_content">
    			<div class="wrap-90">
    				<div class="directory-details">
    					<p class="blue-title">Store Description</p>
    					<div class="hours_divider"></div>
    					<div class="store-description">
    						<p>{{currentStore.description}}</p>
    					</div>
    					<div class="hours_divider"></div>
    				</div>
    			</div>
    		</div>
    	</section>
    	<section class="store_promotions" v-if="currentStore.total_published_promos > 0">
    		<div class="section_content">
    			<div class="wrap-90">
    				<p class="blue-title">Promotions</p>
    				<div class="promo_content">
    					<div class="medium-6 columns" v-for="(promo,key) in promotions"  v-if="key %2 === 0">
    						<div class="promo_box">
    							<div class="promo_cell">
    								<h3>{{promo.name}}</h3>
    								<p>{{promo.start_date | moment("MMM DD", timezone)}} - {{promo.end_date | moment("MMM DD", timezone)}}</p>
    								<div class="promo_description">
    									<p>{{promo.description}}</p>
    								</div>
    								<router-link :to="'/promotions/'+promo.slug">More info</router-link>
    							</div>
    						</div>
    					</div>
    					<div class="medium-6 columns">
    						<div class="promo_box" v-for="(promo,key) in promotions"  v-if="key %2 === 0">
    							<div class="promo_cell">
    								<h3>{{promo.name}}</h3>
    								<p>{{promo.start_date | moment("MMM DD", timezone)}} - {{promo.end_date | moment("MMM DD", timezone)}}</p>
    								<div class="promo_description">
    									<p>{{promo.description}}</p>
    								</div>
    								<router-link :to="'/promotions/'+promo.slug">More info</router-link>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    	<section class="store_careers"  v-if="currentStore.total_published_jobs > 0">
    		<div class="section_content">
    			<p class="blue-title">Careers</p>
    			<div class="wrap-90"  v-for="(career,key) in jobs">
    				<div class="medium-6 columns career-info" >
    					<p v-if="career.contact_name"><b>CONTACT NAME:</b> {{career.contact_name}}</p>
    					<p v-if="career.contact_email"><b>EMAIL:</b> {{career.contact_email}}</p>
    				</div>
    				<div class="medium-6 columns career-info">
    					<p v-if="career.contact_phone"><b>PHONE:</b> {{career.contact_phone}}</p>
    					<p v-if="career.name"><b>POSITION:</b> {{career.name}}</p>
    				</div>
    				<div class="medium-12 columns career-description">
    					<p><b>JOB DESCRIPTION:</b></p>
    					<p v-html="career.description"></p>
    				</div>
    				<router-link class="blue-title" to="/jobs">FULL LIST OF CAREERS</router-link>
    			</div>
    		</div>
    	</section>
    </div>
</template>
<style>
	#store_details_map .mapplic-popup-link, .mapplic-tooltip-close {
	    display:none!important;
	}
	#store_details_map .mapplic-tooltip-content {
	    margin-right: auto;
	}
	#store_details_map .mapplic-tooltip-title {
        text-align: center;
        margin: auto!important;
	}
	#store_details_map .mapplic-pin.black-pin {
    	background-image: url('//codecloud.cdn.speedyrails.net/sites/5aff34766e6f6436aa010100/image/png/1527527145938/som_map_pin.png');
    	background-size: 20px 30px;
    	width: 20px;
    	height: 30px;
    	margin-top: -15px;
    	margin-left: -10px;
    }
</style>
<script>
    define(['Vue', 'vuex', 'moment',"vue!mapplic-png-map"], function(Vue, Vuex, moment, MapplicComponent) {
        return Vue.component("store-details-component", {
            template: template, // the variable template will be injected,
            data: function() {
                return {
                    currentStore: null,
                    promotions : [],
                    jobs:[],
                    dataLoaded: false,
                    pageBanner : null ,
                    storeHours :[]
                }
            },
            props:['id', 'locale'],
            beforeRouteUpdate(to, from, next) {
                this.updateCurrentStore(to.params.id);
                next();
            },
            created (){
                this.loadData().then(response => {
                    this.dataLoaded = true;
                    this.updateCurrentStore(this.id);
                    
                });
                 console.log("locale created", this.locale);
            },
            computed: {
                ...Vuex.mapGetters([
                    'property',
                    'timezone',
                    'processedStores',
                    'findStoreBySlug',
                    'findPromoById',
                    'findJobById',
                    'findRepoByName',
                    'findHourById'
                ]),
                getPNGurl () {
                    return "https://www.mallmaverick.com" + this.property.map_url;
                },
                allStores() {
                    var vm = this;
                    this.processedStores.map(function(store){
                        store.zoom = 1;
                        if(store.id === vm.currentStore.id) {
                            store.showPin = true;
                        }
                    })
                    return this.processedStores;
                },
                floorList () {
                    var floor_list = [];
                    
                    var floor_1 = {};
                    floor_1.id = "first-floor";
                    floor_1.title = "Level One";
                    floor_1.map = this.getPNGurl;
                    floor_1.z_index = 1;
                    floor_1.show = true;
                    floor_list.push(floor_1);
                    return floor_list;
                }
            },
            methods: {
                loadData: async function() {
                    try {
                        // avoid making LOAD_META_DATA call for now as it will cause the entire Promise.all to fail since no meta data is set up.
                        let results = await Promise.all([this.$store.dispatch("getData","promotions"), this.$store.dispatch("getData", "jobs"),this.$store.dispatch("getData", "repos")]);
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                },
                updateCurrentStore (id) {
                    this.currentStore = this.findStoreBySlug(id);
                    if (this.currentStore === null || this.currentStore === undefined){
                        this.$router.replace('/');
                    }
                    if ( _.includes(this.currentStore.store_front_url_abs, 'missing')) {
                        this.currentStore.store_front_url_abs = "//codecloud.cdn.speedyrails.net/sites/5a6a54eb6e6f647da51e0100/image/png/1518554684072/bonniedoonlogo.png";
                    }
                    var vm = this;
                    var temp_promo = [];
                    var temp_job = [];
                    _.forEach(this.currentStore.promotions, function(value, key) {
                        var current_promo = vm.findPromoById(value);
                        current_promo.description_short = _.truncate(current_promo.description, {
                            'length': 70
                        });
                        temp_promo.push(current_promo);
                    });
                    _.forEach(this.currentStore.jobs, function(value, key) {
                        var current_job = vm.findJobById(value);
                        current_job.description_short = _.truncate(current_job.description, {
                            'length': 70
                        });
                        temp_job.push(current_job);

                    })
                    this.promotions = temp_promo;
                    this.jobs = temp_job;
                    
                    var storeHours = [];
                    var vm = this;
                    _.forEach(this.currentStore.store_hours, function (value, key) {
                        var hour = vm.findHourById(value);
                        if(hour.day_of_week === 0){
                            hour.order = 7;
                        }
                        else {
                            hour.order = hour.day_of_week;
                        }
                        storeHours.push(hour);
                    });
                    this.storeHours = _.sortBy(storeHours, [function(o) { return o.order; }]);
                },
                updatePNGMap(map) {
                    this.map = map;
                    this.dropPin(this.currentStore);
                },
                dropPin(store) {
                    this.$refs.pngmap_ref.showLocation(store.id);
                    console.log("showing location of", store);
                    console.log(this.$refs.pngmap_ref);
                },
            }
        });
    });
</script>