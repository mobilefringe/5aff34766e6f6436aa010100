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
        return Vue.component("events-component", {
            template: template, // the variable template will be injected
            props:['locale'],
            data: function() {
                return {
                    dataloaded: false
                }
            },
            created() {
                this.loadData().then(response => {
                    this.dataloaded = true;
                });
            },
            computed: {
                ...Vuex.mapGetters([
                    'timezone',
                    'processedEvents',
                ]),
                events() {
                    var vm = this;
                    var temp_promo = [];
                    var temp_job = [];
                    _.forEach(this.processedEvents, function(value, key) {
                        today = moment().tz(vm.timezone);
                        webDate = moment(value.show_on_web_date).tz(vm.timezone);
                        if (today >= webDate) {
                            temp_promo.push(value);
                        }
                    });
                    return _.sortBy(temp_promo, [function(o) { return o.start_date; }]);
                },
            },
            methods: {
                loadData: async function() {
                    try {
                        // avoid making LOAD_META_DATA call for now as it will cause the entire Promise.all to fail since no meta data is set up.
                        let results = await Promise.all([this.$store.dispatch("getData", "events")]);
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