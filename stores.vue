<template>
	<div v-if="dataloaded">
		<section id="directory" class="scrollspy">
            <div class="section_content">
              <div class="wrap-90-alt">
                <h1 class="store_directory_title">FIND JUST WHAT YOU'RE LOOKING FOR</h1>
              </div>
              <div class="store_directory_mobile">
                <a href="/stores"><img alt="directory" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/859/original/img_storedirectory.jpg?1410203980"/></a>
              </div>
              <div class="store_list_wrap">
                <!--<p>VIEW STORES BY <a href="#">CATEGORY</a> / <a href="#">ALPHABETICAL</a></p>-->
                <div class="segmented-control alt">
                  <div class="option">
                    <p class="whitney p_label">VIEW STORES BY&nbsp;</p>
                  </div>
                  <div class="option">
                    <input id="cat-select" name="radio-btn" type="radio" value="category" checked/>
                    <label for="cat-select" class="whitney">CATEGORY</label>
                  </div>
                  <div class="option">
                    <p class="whitney p_label">&nbsp;/&nbsp;</p>
                  </div>
                  <div class="option">
                    <input id="alpha-select" name="radio-btn" type="radio" value="alphabetical" />
                    <label for="alpha-select" class="whitney">ALPHABETICAL</label>
                  </div>
                  <div class="option">
                    <p class="whitney p_label">&nbsp;/&nbsp;</p>
                  </div>
                  <div class="option">
                    <a class="whitney p_label" href="/mapv2" style=" font-size: 1.334em; letter-spacing: 1px; color: #53565a;" >CENTRE MAP</a>
                  </div>
                </div>
                <div class="category_icon_list">
                  <ul class="center">
                    
                    <li v-for="category in processedCategories"><a :class="'cat-'+category.id">{{category.name}}</a></li>
                    
                  </ul>
                </div>
                
                <div class="table-border">
                  <div class="list-cell">
                    <h1>ALPHABETICAL</h1>
                  </div>
                  <ul class="generic-list">
                    
                    
                    <li class="storesA store-list-item-odd store-list-item alphabetical" v-for="stores in precessedStores">
                        <input id="storesA-14472" name="accordionA-store14472" data-storeid="storesA-14472" data-storename="A&W" data-storex="1402.0" data-storey="776.0" data-id2="14472" type="checkbox" />
                        <label for="storesA-14472" class="list-cell">
                            <div class="list-title">
                                <p>A&W</p>
                            </div>
                            <div class="list-subtitle">
                                <p class="chronicle-deck-bold">Phone Number</p>
                                <p>403-278-3329</p>
                            </div>
                            <div class="list-expand-collapse-icon"></div>
                        </label>
                        <div class="list-expandable-content-container">
                            <div class="list-expandable-content">
                             <div class="map-container">
                                <div id="map_storesA-14472" class="demo1">
                                    <img alt="map" src="https://www.mallmaverick.com/system/properties/maps/000/000/010/original/Southcentre_MAP_FEB2018.jpg?1521054104" class="imgMap" />                
                                    <div class="marker" id='scroll_to_marker_storesA-14472' data-coords="1374.0, 677.0">A&W
                                             
                                      
                                      <p class="marker-level">2nd Floor</p>
                                      
                                     
                                    </div>    
                                </div>   
                                <div class="controls hidden">
                                    <a href="#" rel="scroll_to_marker_storesA-14472" id="anchor_storesA-14472">
                                    <div style="color:#FFFFFF">
                                        A&W
                                  
                                      
                                      
                                      <p class="marker-level">2nd Floor</p>
                                      
                                     
                                    </div>
                                 
                                        
                                    </a>     
                                </div>
                              </div>
                        
                              <div class="store-detail-link small-12 columns blue">
                                <a href="/mapv2?store_id=store_14472">VIEW ON MAP</a> &nbsp;|  &nbsp; 
                                <a href="/stores/southcentre-a-w">MORE DETAILS</a>
                              </div>
                            </div>
                        </div>
                    </li>
                    
                    
                    <li class="storesA  store-list-item alphabetical">
                        <input id="storesA-14435" name="accordionA-store14435" data-storeid="storesA-14435" data-storename="Academy Denture Clinic" data-storex="2046.0" data-storey="2271.0" data-id2="14435" type="checkbox" />
                        <label for="storesA-14435" class="list-cell">
                            <div class="list-title">
                                <p>Academy Denture Clinic</p>
                            </div>
                            <div class="list-subtitle">
                                <p class="chronicle-deck-bold">Phone Number</p>
                                <p>403-269-8308</p>
                            </div>
                            <div class="list-expand-collapse-icon"></div>
                        </label>
                        <div class="list-expandable-content-container">
                            <div class="list-expandable-content">
                             <div class="map-container">
                                <div id="map_storesA-14435" class="demo1">
                                    <img alt="map" src="https://www.mallmaverick.com/system/properties/maps/000/000/010/original/Southcentre_MAP_FEB2018.jpg?1521054104" class="imgMap" />                
                                    <div class="marker" id='scroll_to_marker_storesA-14435' data-coords="2018.0, 2172.0">Academy Denture Clinic
                                             
                                      
                                      <p class="marker-level">1st Floor</p>
                                      
                                     
                                    </div>    
                                </div>   
                                <div class="controls hidden">
                                    <a href="#" rel="scroll_to_marker_storesA-14435" id="anchor_storesA-14435">
                                    <div style="color:#FFFFFF">
                                        Academy Denture Clinic
                                  
                                      
                                      
                                      <p class="marker-level">1st Floor</p>
                                      
                                     
                                    </div>
                                 
                                        
                                    </a>     
                                </div>
                              </div>
                        
                              <div class="store-detail-link small-12 columns blue">
                                <a href="/mapv2?store_id=store_14435">VIEW ON MAP</a> &nbsp;|  &nbsp; 
                                <a href="/stores/southcentre-academy-denture">MORE DETAILS</a>
                              </div>
                            </div>
                        </div>
                    </li>
                    
                    
                    <li class="storesA store-list-item-odd store-list-item alphabetical">
                        <input id="storesA-14488" name="accordionA-store14488" data-storeid="storesA-14488" data-storename="Aldo" data-storex="1994.0" data-storey="1641.0" data-id2="14488" type="checkbox" />
                        <label for="storesA-14488" class="list-cell">
                            <div class="list-title">
                                <p>Aldo</p>
                            </div>
                            <div class="list-subtitle">
                                <p class="chronicle-deck-bold">Phone Number</p>
                                <p>403-225-2226</p>
                            </div>
                            <div class="list-expand-collapse-icon"></div>
                        </label>
                        <div class="list-expandable-content-container">
                            <div class="list-expandable-content">
                             <div class="map-container">
                                <div id="map_storesA-14488" class="demo1">
                                    <img alt="map" src="https://www.mallmaverick.com/system/properties/maps/000/000/010/original/Southcentre_MAP_FEB2018.jpg?1521054104" class="imgMap" />                
                                    <div class="marker" id='scroll_to_marker_storesA-14488' data-coords="1966.0, 1542.0">Aldo
                                             
                                      
                                      <p class="marker-level">1st Floor</p>
                                      
                                     
                                    </div>    
                                </div>   
                                <div class="controls hidden">
                                    <a href="#" rel="scroll_to_marker_storesA-14488" id="anchor_storesA-14488">
                                    <div style="color:#FFFFFF">
                                        Aldo
                                  
                                      
                                      
                                      <p class="marker-level">1st Floor</p>
                                      
                                     
                                    </div>
                                 
                                        
                                    </a>     
                                </div>
                              </div>
                        
                              <div class="store-detail-link small-12 columns blue">
                                <a href="/mapv2?store_id=store_14488">VIEW ON MAP</a> &nbsp;|  &nbsp; 
                                <a href="/stores/southcentre-aldo">MORE DETAILS</a>
                              </div>
                            </div>
                        </div>
                    </li>
                    
                    
                    
                  </ul>
                </div>
                <br/>
                <a class="sc-link" href="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/020/899/original/SOM_199_Mini_Directory_2016_8.5x11.pdf?1471368664" target="_blank">DOWNLOAD DIRECTORY PDF</a>
              </div>
            </div>
          </section>
	</div>
</template>

<script>
    define(["Vue", "vuex", "vue-select", "jquery", "smooth-zoom", "vue!png-map", "vue!search-component", "vue-lazy-load"], function(Vue, Vuex, VueSelect, $, smoothZoom, PNGMapComponent, SearchComponent,VueLazyload) {
        Vue.use(VueLazyload);
        return Vue.component("stores-component", {
            template: template, // the variable template will be injected
            data: function() {
                return {
                    listMode: "alphabetical",
                    selectedCat: null,
                    selectedAlpha: "All",
                    alphabet: ["All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                    filteredStores: null,
                    dataloaded: false,
                    mobile_store: false,
                    windowWidth: 0,
                    storeBanner : null,
                    search_result : null,
                }
            },
            // created() {
            //     // window.Raphael = Raphael; // our mapSvg plugin is stupid and outdated. need this hack to tie Raphael to window object (global variable)
            //     this.$store.dispatch("getData", "categories").then(response => {
            //         this.dataloaded = true;
            //         this.filteredStores = this.allStores;
            //     }, error => {
            //         console.error("Could not retrieve data from server. Please check internet connection and try again.");
            //     });
            // },
            created (){
                this.loadData().then(response => {
                    this.dataloaded = true;
                    this.filteredStores = this.allStores;
                    
                    // this.storeBanner = this.findRepoByName('Stores Banner').images[0];
                    var temp_repo = this.findRepoByName('Stores Banner');
                    if(temp_repo) {
                        this.storeBanner = temp_repo.images[0];
                    }
                    console.log(temp_repo, this.storeBanner); 
                });
            },
            watch: {
                windowWidth: function() {
                    if (this.windowWidth <= 768) {
                        this.mobile_store = true;
                    } else {
                        this.mobile_store = false;
                    }
                },
            },
            mounted() {
                // this.filteredStores = this.allStores;
                this.$nextTick(function() {
                    window.addEventListener('resize', this.getWindowWidth);
                    //Init
                    this.getWindowWidth();
                });
            },
            methods: {
                loadData: async function() {
                    try {
                        // avoid making LOAD_META_DATA call for now as it will cause the entire Promise.all to fail since no meta data is set up.
                        let results = await Promise.all([this.$store.dispatch("getData", "categories"), this.$store.dispatch("getData", "repos")]);
                    } catch (e) {
                        console.log("Error loading data: " + e.message);
                    }
                },
                changeMode(mode) {
                    this.listMode = mode;
                },
                updateSVGMap(map) {
                    this.map = map;
                },
                addLandmark(store) {
                    this.svgMapRef.addMarker(store);
                },
                getWindowWidth(event) {
                    this.windowWidth = window.innerWidth;
                },
                onOptionSelect(option) {
                    this.search_result = "";
                    this.$router.push("/stores/"+option.slug);
                },
            },
            computed: {
                ...Vuex.mapGetters([
                    'property',
                    'timezone',
                    'processedStores',
                    'processedCategories',
                    'storesByAlphaIndex',
                    'storesByCategoryName',
                    'findCategoryById',
                    'findCategoryByName',
                    'findRepoByName'

                ]),
                allStores() {
                    console.log(this.processedStores);
                    // http://via.placeholder.com/400x400/757575
                    var stores = this.processedStores;
                   stores.map(store => {
                       if (_.includes(store.store_front_url_abs, 'missing')) {
                            store.store_front_url_abs = "//codecloud.cdn.speedyrails.net/sites/5a6a54eb6e6f647da51e0100/image/png/1518554684072/bonniedoonlogo.png";
                        }
                    });
                    return this.processedStores;
                },
                allCatergories() {
                    return this.processedCategories;
                },
                dropDownCats() {
                    var cats = _.map(this.processedCategories, 'name');
                    cats.unshift('All');
                    return cats;
                },
                getPNGurl() {
                    return "https://www.mallmaverick.com" + this.property.map_url;
                },
                svgMapRef() {
                    return _.filter(this.$children, function(o) {
                        return (o.$el.className == "svg-map")
                    })[0];
                },
                filterStores() {
                    letter = this.selectedAlpha;
                    if (letter == "All") {
                        this.filteredStores = this.allStores;
                    } else {
                        var filtered = _.filter(this.allStores, function(o, i) {
                            return _.lowerCase(o.name)[0] == _.lowerCase(letter);
                        });
                        this.filteredStores = filtered;
                    }
                },
                filterByCategory() {
                    category_id = this.selectedCat;
                    if (category_id == "All" || category_id == null || category_id == undefined) {
                        category_id = "All";
                    } else {
                        category_id = this.findCategoryByName(category_id).id;
                    }

                    if (category_id == "All") {
                        this.filteredStores = this.allStores;
                    } else {

                        var find = this.findCategoryById;
                        var filtered = _.filter(this.allStores, function(o) {
                            return _.indexOf(o.categories, _.toNumber(category_id)) > -1;
                        });
                    
                        this.filteredStores = filtered;
                    }
                    var el = document.getElementById("selectByCat");
                    if(el) {
                        el.classList.remove("open");
                        console.log(el.classList);
                    }
                    
                },
                
            },
            beforeDestroy: function() {
                window.removeEventListener('resize', this.getWindowWidth);
            },
        });
    });
</script>