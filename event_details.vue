<template>
<div id="event_dets_container">
        <div class="main_content" v-if="currentEvent">
        	<section class="directory_map">
        		<div class="section_content">
        			<div class="directory_title">   
        				<h1>EVENT DETAILS</h1>
        			</div>
        			<div class="promo-border">
        				<div  class="promo_detail_image" v-if="!_.includes(currentEvent.image_url,'missing')">
        					<img :src="currentEvent.image_url">      
        				</div>
        				<div class="promo_detail_div">
        					<router-link :to="'/stores/'+currentEvent.store.slug">
        						<h3>{{currentEvent.store.name}}</h3>
        					</router-link>
        					<p>{{currentEvent.name}}</p>
        					<p><strong>{{currentEvent.start_date | moment("MMM DD", timezone)}} - {{currentEvent.end_date | moment("MMM DD", timezone)}}</strong></p>
        					<p v-html="currentEvent.rich_description"></p>
        				</div>
        				<div class="clearfix"></div>
        			</div>
        		</div>
        	</section>
        	<!--<section class="directory_store_description" v-if="currentEvent.description">-->
        	<!--	<div class="section_content">-->
        	<!--		<div class="wrap-90">-->
        	<!--			<div class="directory-details">-->
        	<!--				<p class="blue-title">Promotion Description</p>-->
        	<!--				<div class="hours_divider"></div>-->
        	<!--				<div class="store-description">-->
        	<!--					<p>{{currentEvent.description}}</p>-->
        	<!--				</div>-->
        	<!--				<div class="hours_divider"></div>-->
        	<!--			</div>-->
        	<!--		</div>-->
        	<!--	</div>-->
        	<!--</section>-->
        </div>
        <guest-services-component></guest-services-component>
    </div>
</template>
<style>
    #event_dets_container {
        margin-top: 100px;
    }
</style>
<script>
    define(['Vue', 'vuex', 'moment', 'vue!guest_services'], function(Vue, Vuex, moment, GuestServicesComponent) {
        return Vue.component("event-details-component", {
            template: template, // the variable template will be injected,
            data: function() {
                return {
                    currentEvent: null
                }
            },
            props:['id', 'locale'],
            beforeRouteUpdate(to, from, next) {
                this.updatecurrentEvent(to.params.id);
                next();
            },
            created(){
                this.loadData().then(response => {
                    this.updatecurrentEvent(this.id);
                });
            },
            computed: {
                ...Vuex.mapGetters([
                    'property',
                    'processedEents',
                    'findEventBySlug',
                    'findEventById',
                    'timezone',
                ]),
                allEvents() {
                    return this.processedEvents;
                },
            },
            methods: {
                updatecurrentEvent (id) {
                    this.currentEvent = this.findEventBySlug(id);
                    if (this.currentEvent === null || this.currentEvent === undefined){
                        this.$router.replace('/');
                    }
                    if(this.currentEvent != null) {
                        if (this.currentEvent.store != null && this.currentEvent.store != undefined && _.includes(this.currentEvent.store.image_url, 'missing')) {
                            this.currentEvent.store.image_url = "//codecloud.cdn.speedyrails.net/sites/5a6a54eb6e6f647da51e0100/image/png/1518554684072/bonniedoonlogo.png";
                        }
                        else if (this.currentEvent.store == null || this.currentEvent.store == undefined) {
                            this.currentEvent.store = {};
                            this.currentEvent.store.image_url =  "//codecloud.cdn.speedyrails.net/sites/5a6a54eb6e6f647da51e0100/image/png/1518554684072/bonniedoonlogo.png";
                        }
                        var vm = this;
                        var temp_event = [];
                        var current_id =_.toNumber(this.currentEvent.id);
                        _.forEach(this.currentEvent.store.event, function(value, key) {
                            if(_.toNumber(value) != current_id){
                                var current_event = vm.findEventById(value);
                                current_event.description_short = _.truncate(current_event.description, {'length': 70});
                                temp_event.push(current_event);
                            }
                        });
                        this.storeEvents = temp_event;
                    }
                    if(this.currentEvent.store) {
                        var storeHours = [];
                        var vm = this;
                        _.forEach(this.currentEvent.store.store_hours, function (value, key) {
                            var hour = vm.findHourById(value);
                            if(hour.day_of_week === 0){
                                hour.order = 7;
                            }
                            else {
                                hour.order = hour.day_of_week;
                            }
                            storeHours.push();
                        });
                        this.storeHours = _.sortBy(storeHours, [function(o) { return o.order; }]);;
                    }
                },
                loadData: async function() {
                    try {
                        // avoid making LOAD_META_DATA call for now as it will cause the entire Promise.all to fail since no meta data is set up.
                        let results = await Promise.all([this.$store.dispatch("getData", "events"), this.$store.dispatch("getData", "repos")]);
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                }
            }
        });
    });
</script>