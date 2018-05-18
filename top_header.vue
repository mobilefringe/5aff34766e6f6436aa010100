<template>
    <div class="upper-links is-sticky">
		<ul>
		    <li v-for="item in menu_items" class="menu_item">
		        <router-link :to="item.href">{{$t(item.name)}}</router-link>
		        <ul v-if="item.sub_menu">
		            <li v-for="sub_menu in item.sub_menu" class="dropdown_item">
		                <div class="site_map_cell">
		                    <router-link :to="sub_menu.href">{{$t(sub_menu.name)}}</router-link>
		                </div>
		            </li>
				</ul>
		    </li>
		</ul>
    </div>
</template>

<script>
    define(["Vue", "vuex", 'vue!social_links.vue', "bootstrap-vue", "json!top_menu_items.json"], function (Vue, Vuex, SocialLinks, BootstrapVue, MenuItems) {
        Vue.use(BootstrapVue);
        return Vue.component("top-header", {
            template: template, // the variable template will be injected,
            data: function() {
                return {
                    dataLoaded: false,
                    show_mobile_menu: false,
                    property_logo: "//codecloud.cdn.speedyrails.net/sites/5a9714046e6f644dc3160000/image/png/1520457420000/whitelogo1@2x.png",
                    menu_items: MenuItems
                }
            },
            created () {
              console.log("MenuItems", MenuItems)  
            },
            watch: {
                $route: function() {
                    // hide dropdown when route changes
                    _.forEach(this.menu_items, function(value, key) {
                        value.show_sub_menu = false;
                    });
                    this.show_mobile_menu = false; //close menu when navigating to new page
                },
                show_mobile_menu: function() {
                    if(this.show_mobile_menu === true){
                        document.body.classList.add("no-scroll");
                    } else if (this.show_mobile_menu === false) {
                        document.body.classList.remove("no-scroll");
                    }
                }
            },
            computed: {
                ...Vuex.mapGetters([
                    'property',
                    'timezone',
                    'getTodayHours'
                ]),
                todays_hours() {
                    return this.getTodayHours;
                }
            },
            
        });
    });
</script>