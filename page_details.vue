<template>
    <div v-if="currentPage">
        
    </div>
    <!--Pages Banner-->
</template>

<script>
    define(["Vue", "vuex", "moment", "moment-timezone", "vue-moment"], function(Vue, Vuex, moment, tz, VueMoment) {
        return Vue.component("page-details-component", {
            template: template, // the variable template will be injected,
            data: function() {
                return {
                    success_subscribe: false,
                    currentPage: null,
                    pageBanner : null
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
                        var temp_repo = this.findRepoByName('Pages Banner');
                        if(temp_repo) {
                            this.pageBanner = temp_repo.images[0];
                        }
                        this.pageBanner = this.pageBanner;
                    });
                }
            }
        });
    });
</script>