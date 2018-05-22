<template>
    <nav class="top_menu" data-topbar="" role="navigation">
        <div class="site_menu" style="display: block;">
          <ul>
            <li>
              <div class="site_map_cell">
                <a href="/"><img style="max-width:170px" :src="property_logo" alt="South Centre Mall"></a>
              </div>
            </li>
            <li  v-for="item in menu_items">
                <div class="site_map_cell ss text-uppercase"><router-link :to="item.href">{{$t(item.name)}}</router-link></div>
            </li>
          
           
            <div class="hours_divider"></div>
            <li class="search_icon" style="user-select: none; touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
              <div class="site_map_cell">
                <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/858/original/icon_search.png?1410203942" @click="show_search = !show_search;">
              </div>
            </li>
          </ul>
        </div>
        <div class="search_bar" v-if="show_search">
            <div class="search_bar_wrap">
                <form id="search_form" action="/search" method="GET">
                    <div class="row">
                        <input class="SearchTerms_phone" name="query" id="SearchTerms" type="search" placeholder="SEARCH" title="search">
                    </div>
                </form>
            </div>
        </div>
      </nav>
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
                    menu_items: MenuItems,
                    show_search: false
                }
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