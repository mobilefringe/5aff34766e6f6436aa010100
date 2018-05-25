<template>
    <div v-if="id == 'southcentre-contact'">
        <div class="main_content">
          <section class="hours">
            <div class="section_content">
              <div class="wrap-90">
                <h1>CONTACT</h1>
                <h2 class="about_subheading">Southcentre is proudly managed by Oxford Properties.</h2>
                <div class="hours_divider"></div>
                <h3 class="contact_subheading">Guest Services</h3>
                <p class="contact_content contact_phone">(403) 271-7670</p>
                <div class="margin_20" style="margin-bottom:30px;"></div>
                <h3 class="contact_subheading">Administration Office</h3>
                <p class="contact_content contact_phone">(403) 225-9100</p>
                <div class="hours_divider"></div>
                <h2 class="contact_subheading">Email</h2>
                <p class="contact_content"><a class="blue contact-email" href="mailto:info@southcentremall.com">info@southcentremall.com</a></p>
              </div>
            </div>
          </section>
          <section class="pay_it">
            <div class="section_content">
              <div class="wrap-90">
                <h1>LOCATION</h1>
                <p class="contact_content margin_0"><span class="blue">MAILING ADDRESS<a target="_blank" href="https://goo.gl/maps/nJ3xB"> / DIRECTIONS</a></span></p>
                <p class=" contact_content margin_0 address_para">Southcentre Mall Unit 142, 100 Anderson Road SE Calgary, Alberta, Canada T2J 3V1</p>
                <div class="map">
                  <iframe title="directions map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2513.352194545045!2d-114.0661583!3d50.9541923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176cb655cd963%3A0x841373b8b29e6a9!2s100+Anderson+Rd+SE%2C+Southcentre+Mall%2C+Calgary%2C+AB+T2J+3V1!5e0!3m2!1sen!2sca!4v1410361521688" class="map_frame" width="100%" frameborder="0" style="border:0"></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer-component></footer-component>
    </div>
    <!--Pages Banner-->
</template>
<style>
    .top_menu {
        margin-top: 50px;
    }
    .top_menu {
        margin-top: 50px;
    }
</style>
<script>
    define(["Vue", "vuex", "moment", "moment-timezone", "vue-moment", "vue!footer"], function(Vue, Vuex, moment, tz, VueMoment, footerComponent) {
        return Vue.component("page-details-component", {
            template: template, // the variable template will be injected,
            data: function() {
                return {
                    currentPage: null
                }
            },
            props:['id', 'locale'],
            beforeRouteUpdate(to, from, next) {
                this.updatePageData(to.params.id);
                next();
            },
            created(){
               this.updatePageData(this.id);
            },
            computed: {
                ...Vuex.mapGetters([
                    'property',
                    'timezone',
                    'findRepoByName'
                ])
            },
            methods: {
                loadData: async function(id) {
                    try {
                        // avoid making LOAD_META_DATA call for now as it will cause the entire Promise.all to fail since no meta data is set up.
                        console.log("this.id", this.id);
                        let results = await Promise.all([this.$store.dispatch('LOAD_PAGE_DATA', {url: this.property.mm_host + "/pages/" + id + ".json"}),this.$store.dispatch("getData", "repos")]);
                        return results;
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                },
                updatePageData (id) {
                    this.loadData(id).then(response => {
                        if(response == null || response == undefined) {
                            this.$router.replace('/');
                        }
                        this.currentPage = response[0].data;
                    });
                }
            }
        });
    });
</script>