<template>
<div id="event_dets_container">
        <div class="main_content" v-if="currentEvent">
        	<section class="directory_map">
        		<div class="section_content">
        			<div class="directory_title">   
        				<h1>PROMOTION DETAILS</h1>
        			</div>
        			<div class="promo-border">
        				<div  class="promo_detail_image">
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
        	<section class="directory_store_description" v-if="currentEvent.description">
        		<div class="section_content">
        			<div class="wrap-90">
        				<div class="directory-details">
        					<p class="blue-title">Promotion Description</p>
        					<div class="hours_divider"></div>
        					<div class="store-description">
        						<p>{{currentEvent.description}}</p>
        					</div>
        					<div class="hours_divider"></div>
        				</div>
        			</div>
        		</div>
        	</section>
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
                this.currentEvent = this.findEventBySlug(to.params.id);
                    if (this.currentEvent === null || this.currentEvent === undefined){
                        this.$router.replace('/');
                    }
                next();
            },
            created(){
                this.loadData().then(response => {
                    this.updatecurrentEvent(this.id);
                    var temp_repo = this.findRepoByName('Events Banner');
                    if(temp_repo) {
                        this.eventBanner = temp_repo.images[0];
                    }
                    console.log(this.eventBanner);
                    this.events = this.event;
                });
            },
            computed: {
                ...Vuex.mapGetters([
                    'property',
                    'processedEents',
                    'findEventBySlug',
                    'findEventById',
                    'timezone',
                    'findRepoByName',
                    'findHourById'
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
                },
                loadData: async function() {
                    try {
                        // avoid making LOAD_META_DATA call for now as it will cause the entire Promise.all to fail since no meta data is set up.
                        let results = await Promise.all([this.$store.dispatch("getData", "events"), this.$store.dispatch("getData", "repos")]);
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                },
                shareURL(slug){
                    var share_url = "http://mallmaverick.ca/event/" + slug;
                    return share_url;
                },
            }
        });
    });
</script>