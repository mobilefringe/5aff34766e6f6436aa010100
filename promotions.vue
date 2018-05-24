<template>
	<div v-if="dataloaded">
		<section id="promotions" class="scrollspy">
            <div class="section_content">
              <h1>STORE PROMOTIONS</h1>
              <p class="whitney">EVENTS & DEALS: BE IN THE KNOW</p>
              <div class="promo_content">
                <div class="medium-6 columns ">
                  
                  
                  
                  
                  
                  
                  <div class="promo_box first_cell">
                    <div class="promo_cell">
                      <h3>Ao-Ta Beauty Salon: Complimentary Haircut with Highlights or Colour Service*</h3>
                      
                      <p>May 01 - Jun 30</p>
                      
                      <div class="promo_description">
                        <p><p>* Starting at $65</p>

<p>Prices may vary, see in store for details</p>
</p>
                      </div>
                      <a class="whitney blue" href="/promotions/southcentre-southcentre-mall-ao-ta-complimentary-haircut-with-highlights-or-colour-service">More info</a>
                    </div>
                  </div>
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  <div class="promo_box first_cell">
                    <div class="promo_cell">
                      <h3>Chatters: Up To 35% OFF Hair Tools</h3>
                      
                      <p>May 01 - May 31</p>
                      
                      <div class="promo_description">
                        <p><p><span style="color:rgb(34, 34, 34); font-family:arial,sans-serif; font-size:9.5pt">Score some style happy savings on the perfect tools for any look! Save up to 35% off some of your favourite hair tools to help you create your signature style!</span></p>
</p>
                      </div>
                      <a class="whitney blue" href="/promotions/southcentre-southcentre-mall-chatters-up-to-35-off-hair-tools">More info</a>
                    </div>
                  </div>
                  </div>
            </div>
          </section>
	</div>
</template>

<script>
    define(["Vue", "vuex", "moment", "moment-timezone", "vue-moment", "vue-meta", "vue-lazy-load", "vue-paginate"], function(Vue, Vuex, moment, tz, VueMoment, Meta, VueLazyload, VuePaginate) {
        Vue.use(Meta);
        Vue.use(VueLazyload);
        Vue.use(VuePaginate);
        return Vue.component("promos-component", {
            template: template, // the variable template will be injected
            props:['locale'],
            data: function() {
                return {
                    selectedDate: null,
                    filteredPromos:[],
                    dataloaded: false,
                    promoBanner: null,
                    paginate: ['promos'],
                    promos : null
                }
            },
            created() {
                this.loadData().then(response => {
                    this.dataloaded = true;
                    
                    var temp_repo = this.findRepoByName('Promos Banner');
                    if(temp_repo) {
                        this.promoBanner = temp_repo.images[0];
                    }
                    console.log(this.promoBanner);
                    this.promos = this.promotions;
                });
            },
            computed: {
                ...Vuex.mapGetters([
                    'timezone',
                    'processedPromos',
                    'findRepoByName',
                ]),
                promotions() {
                    var vm = this;
                    var temp_promo = [];
                    var temp_job = [];
                    _.forEach(this.processedPromos, function(value, key) {
                        today = moment().tz(vm.timezone);
                        webDate = moment(value.show_on_web_date).tz(vm.timezone);
                        if (today >= webDate) {
                            value.description_short = _.truncate(value.description, {
                                'length': 150
                            });
                            value.description_short_2 = _.truncate(value.description_2, {
                                'length': 150
                            });
                            if (value.store != null && value.store != undefined && _.includes(value.store.image_url, 'missing')) {
                                value.store.image_url = "//codecloud.cdn.speedyrails.net/sites/5a6a54eb6e6f647da51e0100/image/png/1518554684072/bonniedoonlogo.png";
                            }
                            else if (value.store == null || value.store == undefined) {
                                value.store = {};
                                value.store.image_url =  "//codecloud.cdn.speedyrails.net/sites/5a6a54eb6e6f647da51e0100/image/png/1518554684072/bonniedoonlogo.png";
                            }
                            if (_.includes(value.image_url, 'missing')) {
                                value.image_url = "http://via.placeholder.com/400x400/757575";
                            }
                            // value.image_url = "//codecloud.cdn.speedyrails.net/sites/5a6a54eb6e6f647da51e0100/image/png/1516652189884/ES_logo_red2.png";
                            
                            temp_promo.push(value);
                        }
                    });
                    _.sortBy(temp_promo, [function(o) { return o.start_date; }]);
                    return temp_promo;
                },
            },
            methods: {
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