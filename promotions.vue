<template>
	<section id="promotions" class="scrollspy" v-if="dataloaded">
        <div class="section_content">
            <h1>STORE PROMOTIONS</h1>
            <p class="whitney">EVENTS & DEALS: BE IN THE KNOW</p>
            <div class="promo_content">
                <div class="medium-6 columns" >
                    <div class="promo_box first_cell" v-for="(promo,key) in promotions" v-if="key %2 === 0">
                        <div class="promo_cell">
                            <h3>{{promo.name}}</h3>
                      
                            <p>{{promo.start_date | moment("MMM DD", timezone)}} - {{promo.end_date | moment("MMM DD", timezone)}}</p>
                          
                            <div class="promo_description"> 
                                {{promo.description}}
                            </div>
                            <a class="whitney blue" :to="'/promotions/'+promo.slug">More info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
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
                    
                    return _.sortBy(temp_promo, [function(o) { return o.start_date; }]).reverse();
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