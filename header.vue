<template>
    <!--<div class="site_menu">-->
    <!--	<div class="menu_bar hidden_phone">-->
    <!--		<div class="site_container">-->
    <!--			<div class="nav_container hidden_phone">-->
    <!--				<div class="site_logo">-->
    <!--					<router-link to="/"><img :src="property_logo" alt="Property Logo"/></router-link>-->
    <!--				</div>-->
    <!--				<div class="row">-->
    <!--					<nav>-->
    <!--						<ul>-->
    <!--						    <li v-for="item in menu_items">-->
    <!--						        <div class="site_map_cell ss"><router-link :to="item.href">{{$t(item.name)}}</router-link></div>-->
    <!--						    </li>-->
    <!--						</ul>-->
    <!--					</nav>-->
    <!--				</div>-->
    <!--			</div>-->
    <!--		</div>-->
    <!--	</div>-->
    <!--</div>-->
    <nav class="top_menu" data-topbar="" role="navigation">
        <div class="mobile_topbar">
          <div class="small-3 columns">
            <div class="mobile_menu_btn">
              <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/853/original/icon_menu.png?1410203768">
            </div>
          </div>
          <div class="small-6 columns">
            <a href="/"><img alt="logo" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/854/original/logo_sc_mobile.png?1410203796"></a>
          </div>
          <div class="small-3 columns">
            <div class="search_icon" style="user-select: none; touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
              <img alt="search mobile" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/855/original/icon_search_mobile.png?1410203827">
            </div>
          </div>
        </div>
        <div class="site_menu" style="display: block;">
          <ul>
            <li>
              <div class="site_map_cell">
                <a href="/"><img style="max-width:170px" alt="logo" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/016/872/original/logo_sc(desktop)_(1).png?1455645887"></a>
              </div>
            </li>
            <li>
              <div class="site_map_cell ss">
                <a href="#hours">HOURS</a>
              </div>
              <div class="site_map_cell mobile">
                <div class="small-10 columns">
                  <a href="#hours">HOURS</a>
                </div>
                <div class="small-2 columns">
                  <img alt="mobile menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                </div>
              </div>
            </li>
            <div class="hours_divider"></div>
        
    
           
           
            <li>
              <div class="site_map_cell ss">
                <a href="#directory">DIRECTORY</a>
              </div>
              <div class="site_map_cell mobile">
                <div class="small-10 columns">
                  <a href="#directory">DIRECTORY</a>
                </div>
                <div class="small-2 columns">
                  <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                </div>
              </div>
            </li>
            <div class="hours_divider"></div>
            
            
        
                 
    
    
    
            
        
    
    
    
        
            <li>
              <div class="site_map_cell ss">
                <a href="#promotions">STORE PROMOTIONS</a>
              </div>
              <div class="site_map_cell mobile">
                <div class="small-10 columns">
                  <a href="#promotions">STORE PROMOTIONS</a>
                </div>
                <div class="small-2 columns">
                  <img alt="menu arrow" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                </div>
              </div>
            </li>
            <div class="hours_divider"></div>
            <li>
              <div class="site_map_cell ss">
                <a href="#style">STYLE ACADEMY</a>
              </div>
              <div class="site_map_cell mobile">
                <div class="small-10 columns">
                  <a href="#style">STYLE ACADEMY</a>
                </div>
                <div class="small-2 columns">
                  <img alt="arrow" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                </div>
              </div>
            </li>
            <div class="hours_divider"></div>
            <li>
              <div class="site_map_cell ss">
                <a href="#giftcard">GIFT CARDS</a>
              </div>
              <div class="site_map_cell mobile">
                <div class="small-10 columns">
                  <a href="#giftcard">GIFT CARDS</a>
                </div>
                <div class="small-2 columns">
                  <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                </div>
              </div>
            </li>
            <div class="hours_divider"></div>
            <li>
              <div class="site_map_cell ss">
                <a href="#kidsfun">KIDS FUN</a>
              </div>
              <div class="site_map_cell mobile">
                <div class="small-10 columns">
                  <a href="#kidsfun">KIDS FUN</a>
                </div>
                <div class="small-2 columns">
                  <img alt="menu arrow" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                </div>
              </div>
            </li>
            <div class="hours_divider"></div>
            <li>
              <div class="site_map_cell ss">
                <a href="#news_and_events">NEWS &amp; EVENTS</a>
              </div>
              <div class="site_map_cell mobile">
                <div class="small-10 columns">
                  <a href="#news_and_events">NEWS &amp; EVENTS</a>
                </div>
                <div class="small-2 columns">
                  <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                </div>
              </div>
            </li>
            <div class="hours_divider"></div>
            <li class="upper-links-mobile">
                <div></div>
                <div class="site_map_cell mobile">
                    <div class="small-10 columns">
                        <a href="/pages/southcentre-guest-services">GUEST SERVICES</a>
                    </div>
                    <div class="small-2 columns">
                        <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                    </div>
                </div>
            </li>
         <div class="hours_divider"></div>
            <li class="upper-links-mobile">
                <div></div>
                <div class="site_map_cell mobile">
                    <div class="small-10 columns">
                        <a href="/pages/southcentre-green-initiatives">GREEN INITIATIVES</a>
                    </div>
                    <div class="small-2 columns">
                        <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                    </div>
                </div>
            </li>
    
        
            <div class="hours_divider"></div>
            <li class="upper-links-mobile">
                <div></div>
                <div class="site_map_cell mobile">
                    <div class="small-10 columns">
                        <a href="/pages/southcentre-contact">CONTACT</a>
                    </div>
                    <div class="small-2 columns">
                        <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                    </div>
                </div>
            </li>
            <div class="hours_divider"></div>
            <li class="upper-links-mobile">
                <div></div>
                <div class="site_map_cell mobile">
                    <div class="small-10 columns">
                        <a href="/pages/southcentre-leasing">LEASING</a>
                    </div>
                    <div class="small-2 columns">
                        <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                    </div>
                </div>
            </li>
            <div class="hours_divider"></div>
            <li class="">
                <div></div>
                <div class="site_map_cell mobile">
                    <div class="small-10 columns">
                        <a href="/jobs">CAREERS</a>
                    </div>
                    <div class="small-2 columns">
                        <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/857/original/mobile_menu_arrow.png?1410203882">
                    </div>
                </div>
            </li>
          
           
            <div class="hours_divider"></div>
            <li class="search_icon" style="user-select: none; touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
              <div class="site_map_cell">
                <img alt="menu" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/858/original/icon_search.png?1410203942">
              </div>
            </li>
          </ul>
        </div>
        <div class="search_bar hidden" style="display: none;">
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