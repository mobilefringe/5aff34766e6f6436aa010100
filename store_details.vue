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
    								<p class="mobile-subtitle">{{store.phone}}</p>
    							</div>
    							<div class="list-subtitle">
    								<p>Phone Number</p>
    								<p>{{currentStore.phone}}</p>
    							</div>
    						</label>
    					</li>
    				</ul>
    				<div class="store_map">
    					<div class="demo1">
    						<img src="{{store.property.map_image_path}}" class="imgMap" id="map_image" />                
    						<div class="marker" id='scroll_to_marker' data-coords="{{store.x_coordinate | minus:28}}, {{ store.y_coordinate | minus:99}}">{{currentStore.name}}
    						</div>
    					</div>
    					<div class="controls hidden">
    						<a href="#" rel="scroll_to_marker" id="anchor_id">
    							<div style="color:#FFFFFF">{{ currentStore.name }}
    							</div>
    						</a>
    					</div>
    				</div>
    			</div>
    			<a href="/mapv2?store_id=store_{{currentStore.id}}" style="margin-top: 20px;display: block;">VIEW ON MAP</a> 
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
    			<div class="wrap-90">
    				<div class="medium-6 columns career-info" v-for="(career,key) in jobs" >
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
                this.currentStore = this.findStoreBySlug(to.params.id);
                if (this.currentStore === null || this.currentStore === undefined){
                    this.$router.replace('/');
                }
                next();
            },
            created (){
                this.loadData().then(response => {
                    this.dataLoaded = true;
                    this.updateCurrentStore(this.id);
                    
                });
                 console.log("locale created", this.locale);
            },
            watch: {
                currentStore: function() {
                    
                    // setTimeout(function() {
                    //     vm.addLandmark(vm.currentStore);
                    // }, 500);
                },
                locale: function(val, oldVal) {
                    console.log("locale", this.locale);
                },
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
                pngMapRef() {
                    return this.$refs.pngmapref;
                },
                allStores() {
                    this.processedStores.map(function(store){
                        store.zoom = 1;
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
                },
                updatePNGMap(map) {
                    this.map = map;
                    console.log("in updatepng");
                    this.addLandmark(this.currentStore);
                },
            }
        });
    });
</script>