<template>
	<section id="news_and_events" class="scrollspy" v-if="dataloaded">
		<div class="section_content">
			<h1>NEWS & EVENTS</h1>
			<p class="whitney">STAY UP TO DATE AND IN THE KNOW</p>
			<div class="event_content">
				<div>
					<div class="event_box" v-for="event in events">
						<h3 class="event_title chronicle">Where Fashion Meets Furniture</h3>
						<h3 class="event_date whitney-light">May 01 - May 31</h3>
						<a class="whitney blue" href="/events/southcentre-where-fashion-meets-furniture">More info</a>
					</div>
					<div class="event_box">
						<h3 class="event_title chronicle">Style Academy- Swimwear!</h3>
						<h3 class="event_date whitney-light">May 24</h3>
						<a class="whitney blue" href="/events/southcentre-style-academy-swimwear">More info</a>
					</div>
					<div class="event_box">
						<h3 class="event_title chronicle">Set for Summer Workshops</h3>
						<h3 class="event_date whitney-light">May 25 - May 27</h3>
						<a class="whitney blue" href="/events/southcentre-edible-flower-garden-class">More info</a>
					</div>
					<div class="event_box">
						<h3 class="event_title chronicle">Style Academy - Men's Edition!</h3>
						<h3 class="event_date whitney-light">Jun 12</h3>
						<a class="whitney blue" href="/events/southcentre-style-academy-men-s-edition">More info</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
    define(["Vue", "vuex", "moment", "moment-timezone", "vue-moment"], function(Vue, Vuex, moment, tz, VueMoment) {
        Vue.use(Meta);
        Vue.use(VueLazyload);
        Vue.use(VuePaginate);
        return Vue.component("events-component", {
            template: template, // the variable template will be injected
            props:['locale'],
            data: function() {
                return {
                    dataloaded: false,
                    promoBanner: null,
                    paginate: ['events']
                }
            },
            created() {
                this.loadData().then(response => {
                    this.dataloaded = true;
                    
                    var temp_repo = this.findRepoByName('Events Banner');
                    if(temp_repo) {
                        this.promoBanner = temp_repo.images[0];
                    }
                });
            },
            computed: {
                ...Vuex.mapGetters([
                    'timezone',
                    'processedEvents',
                    'findRepoByName',
                ]),
                events() {
                    var vm = this;
                    var temp_promo = [];
                    var temp_job = [];
                    _.forEach(this.processedEvents, function(value, key) {
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
                        let results = await Promise.all([this.$store.dispatch("getData", "events"), this.$store.dispatch("getData", "repos")]);
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                },
                shareURL(slug){
                    var share_url = "http://mallmaverick.ca/events/" + slug;
                    return share_url;
                },
            }
        });
    });
</script>