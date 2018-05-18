<template>
    <div class="site_menu">
    	<div class="menu_bar hidden_phone">
    		<div class="site_container">
    			<div class="nav_container hidden_phone">
    				<div class="site_logo">
    					<router-link to="/"><img :src="property_logo" alt="Property Logo"/></router-link>
    				</div>
    				<div class="row top_nav hidden_phone">
    					<nav id="primary_nav">
    						<ul>
    						    <li v-for="item in menu_items" class="menu_item">
    						        <router-link :to="item.href">{{$t(item.name)}}</router-link>
    						        <ul v-if="item.sub_menu">
    						            <li v-for="sub_menu in item.sub_menu" class="dropdown_item">
    						                <router-link :to="sub_menu.href">{{$t(sub_menu.name)}}</router-link>
    						            </li>
    								</ul>
    						    </li>
    						</ul>
    					</nav>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
    define(["Vue", "vuex", 'vue!social_links.vue', "bootstrap-vue", "json!menu_items.json"], function (Vue, Vuex, SocialLinks, BootstrapVue, MenuItems) {
        Vue.use(BootstrapVue);
        return Vue.component("header-component", {
            template: template, // the variable template will be injected,
            data: function() {
                return {
                    dataLoaded: false,
                    show_mobile_menu: false,
                    property_logo: "//codecloud.cdn.speedyrails.net/sites/5aff34766e6f6436aa010100/image/png/1526676569100/logo_sc.png",
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