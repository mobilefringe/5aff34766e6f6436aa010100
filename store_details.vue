<template>
	<div class="main_content">
        <section class="directory_map">
          <div class="section_content">
            <div class="directory_title">
              <h1>DIRECTORY</h1>
            </div>
            <div class="table-border" v-if="currentStore">
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
            	    <div class="marker" id='scroll_to_marker' data-coords="{{store.x_coordinate | minus:28}}, {{ store.y_coordinate | minus:99}}">{{store.name}}
                        {% if store.z_coordinate %}
                          {% if store.z_coordinate == 1 %}
                          <p class="marker-level">1st Floor</p>
                          {% elsif store.z_coordinate == 2 %}
                          <p class="marker-level">2nd Floor</p>
                          {% elsif store.z_coordinate == 3 %}
                          <p class="marker-level">3rd Floor</p>
                          {% else %}
                          <p class="marker-level">{{store.z_coordinate}}th Floor</p>
                          {% endif %}
                        {% endif %} 
            	    </div>	
        	    </div>   
                <div class="controls hidden">
                    <a href="#" rel="scroll_to_marker" id="anchor_id"><div style="color:#FFFFFF">{{ currentStore.name }}
                      
                    </div></a>     
                </div>
                <!--<img id="zoom_image" src="{{store.property.map_image_path}}"/>
    	        <div class="landmarks" data-show-at-zoom="0" data-allow-drag="true">
			        <div class="item mark" data-show-at-zoom="0" data-position="{{store.x_coordinate}},{{store.y_coordinate}}">
				        <div>
					        <div class="text">
						        <strong>{{store.name}} </strong>
					        </div>
					        <img src="//mallmaverick.cdn.speedyrails.net/system/sites/map_markers/000/000/010/original/som_map_pin.png?1412099583" width="56px" height="99px" alt="{{store.name}} "/>
				        </div>
			        </div>
		        </div>-->
              </div>
            </div>
          <a href="/mapv2?store_id=store_{{store.id}}" style="margin-top: 20px;display: block;">VIEW ON MAP</a> 
          </div>
        </section>
        {% if store.description %}
        <section class="directory_store_description">
          <div class="section_content">
            <div class="wrap-90">
              <div class="directory-details">
                <p class="blue-title">Store Description</p>
                <div class="hours_divider"></div>
                  <div class="store-description">
                    <p>{{store.description}}</p>
                  </div>
                <div class="hours_divider"></div>
              </div>
            </div>
          </div>
        </section>
        {% endif %}
        {% assign promosize = store.current_promotions | size %}
        {% if promosize > 0 %}
        <section class="store_promotions">
          <div class="section_content">
            <div class="wrap-90">
              <p class="blue-title">Promotions</p>
              <div class="promo_content">
              <div class="medium-6 columns">
                {% assign i = 1 %}
                {% for promo in store.current_promotions %}
                {% assign mod = i | modulo: 2 %}
                {% if mod == 1 %}
                <div class="promo_box">
                  <div class="promo_cell">
                    <h3>{{promo.name}}</h3>
                    <p>{{promo.start_date | get_date }} - {{ promo.end_date | get_date }}</p>
                    <div class="promo_description">
                      <p>{{promo.description}}</p>
                    </div>
                    <a href="/promotions/{{promo.slug}}">More info</a>
                  </div>
                </div>
                {% endif %}
                {% assign i =  i | plus:1 %}
                {% endfor %}
              </div>
              {% if store.current_promotions.length > 1 %}
              <div class="medium-6 columns">
                {% assign i = 1 %}
                {% for promo in store.current_promotions %}
                {% assign mod = i | modulo: 2 %}
                {% if mod == 0 %}
                <div class="promo_box">
                  <div class="promo_cell">
                    <h3>{{promo.name}}</h3>
                    <p>{{promo.start_date | get_date }} - {{ promo.end_date | get_date }}</p>
                    <div class="promo_description">
                      <p>{{promo.description}}</p>
                    </div>
                    <a href="/promotions/{{promo.slug}}">More info</a>
                  </div>
                </div>
                {% endif %}
                {% assign i =  i | plus:1 %}
                {% endfor %}
              </div>
              {% endif %}
              </div>
            </div>
          </div>
        </section>
        {% endif %}
        {% assign jobsize = store.current_jobs | size %}
        {% if jobsize > 0 %}
        {% assign career = store.current_jobs | first %}
        <section class="store_careers">
          <div class="section_content">
            <p class="blue-title">Careers</p>
            <div class="wrap-90">
            <div class="medium-6 columns career-info">
              {% if career.contact_name %}
              <p><b>CONTACT NAME:</b> {{career.contact_name}}</p>
              {% endif %}
              {% if career.contact_email %}
              <p><b>EMAIL:</b> {{career.contact_email}}</p>
              {% endif %}
            </div>
            <div class="medium-6 columns career-info">
              {% if career.contact_phone %}
              <p><b>PHONE:</b> {{career.contact_phone}}</p>
              {% endif %}
              {% if career.name %}
              <p><b>POSITION:</b> {{career.name}}</p>
              {% endif %}
            </div>
            <div class="medium-12 columns career-description">
              <p><b>JOB DESCRIPTION:</b></p>
              <p>{{career.description}}</p>
            </div>
            <a class="blue-title" href="/jobs">FULL LIST OF CAREERS</a>
            </div>
          </div>
        </section>
        {% endif %}
      </div>
</template>
<style>
	#png_map{
	    width:1310px;
		height: 983px;
		min-width:1310px;
		min-height: 983px;
	}
</style>
<script>
    define(['Vue', 'vuex', 'moment', "jquery", "smooth-zoom", "vue!png-map", 'vue-lazy-load'], function(Vue, Vuex, moment, $, smoothZoom, PNGMapComponent, VueLazyload) {
        Vue.use(VueLazyload);
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
                // updateSVGMap(map) {
                //     this.map = map;
                // },
                addLandmark(store) {
                    this.pngMapRef.addMarker(store);
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