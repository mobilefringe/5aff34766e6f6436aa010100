<template>
    <div class="main_content" v-if="dataloaded">
    	<section class="careers">
    		<div class="section_content">
    			<div class="table-border">
    				<div class="list-cell">
    					<h1>CAREERS</h1>
    				</div>
    				<ul class="generic-list">
    					<li class="store-list-item-odd">
    						<input id="career21274" name="accordion21274" type="checkbox" />
    						<label for="career21274" class="list-cell">
    							<div class="list-title">
    								<p>Bootlegger Jeans</p>
    								<p class="mobile-subtitle">Assistant Manager</p>
    							</div>
    							<div class="list-subtitle">
    								<p>Assistant Manager</p>
    							</div>
    							<div class="list-expand-collapse-icon"></div>
    						</label>
    						<div class="list-expandable-content-container">
    							<div class="list-expandable-content">
    								<p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">Have a passion for fashion?</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">Love working with people?</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">Are you outgoing and want to build your career in a fun and friendly atmosphere?</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">Then&nbsp;we&#39;ve got&nbsp;opportunities for you!</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">&nbsp;</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">At&nbsp;Bootlegger we value teamwork, entrepreneurship, growth passion and trust. We promote a spirited culture of performance, fun and creativity. People are our most valuable resource and we invest in their well being through a generous associate discount, competitive compensation and benefits package. </span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">&nbsp;</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">Come work with us the place for jeans!</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">&nbsp;</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">We are hiring an Assistant Manager!</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">&nbsp;</span></p>
    								<p><span style="color:black; font-family:tahoma,sans-serif; font-size:10pt">If you are interested in&nbsp;joining our team&nbsp;please come in and apply or email your resume to <a href="mailto:rsharp@bootlegger.ca">rsharp@bootlegger.ca</a></span></p>
    								</p>
    							</div>
    						</div>
    					</li>
    					<li class="">
    						<input id="career21382" name="accordion21382" type="checkbox" />
    						<label for="career21382" class="list-cell">
    							<div class="list-title">
    								<p>Hudson's Bay</p>
    								<p class="mobile-subtitle">Cosmetics</p>
    							</div>
    							<div class="list-subtitle">
    								<p>Cosmetics</p>
    							</div>
    							<div class="list-expand-collapse-icon"></div>
    						</label>
    						<div class="list-expandable-content-container">
    							<div class="list-expandable-content">
    								<p>
    								<p><
    								strong>Fragrances:</strong> Full Time<br />
    									<strong>L&#39;Occitane:</strong> Full Time<br />
    									<strong>Lise Watier: </strong>Part Time<br />
    									<strong>Clinique: </strong>Full Time<br />
    									<strong>Men&#39;s Bar: </strong>Part Time<br />
    									<strong>Kiehls: </strong>Part Time
    								</p>
    								<p>Apply online at:&nbsp;<a href="http://www3.hbc.com/careers/">http://www3.hbc.com/careers/</a></p>
    								<p>&nbsp;</p>
    								</p>
    							</div>
    						</div>
    					</li>
    				</ul>
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
                    
                    var temp_repo = this.findRepoByName('Jobs Banner');
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
                    'processedJobs',
                    'findRepoByName',
                ]),
                promotions() {
                    var vm = this;
                    var temp_promo = [];
                    var temp_job = [];
                    _.forEach(this.processedJobs, function(value, key) {
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
                                value.store.image_url = "http://via.placeholder.com/400x400/757575";
                            }
                            else if (value.store == null || value.store == undefined) {
                                value.store = {};
                                value.store.image_url =  "http://via.placeholder.com/400x400/757575";
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
                        let results = await Promise.all([this.$store.dispatch("getData", "jobs"), this.$store.dispatch("getData", "repos")]);
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                },
                shareURL(slug){
                    var share_url = "http://mallmaverick.ca/jobs/" + slug;
                    return share_url;
                },
            }
        });
    });
</script>