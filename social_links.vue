<template>
    <ul class="social_icons_list">
		<li>
			<a class='facebook' href="https://www.facebook.com/southcentremall" target="_blank">Facebook</a>
		</li>
		<li>
			<a class='twitter' href='https://twitter.com/southcentremall' target="_blank">Twitter</a>
		</li>
		<li>
			<a class='instagram' href="http://instagram.com/southcentremall/" target="_blank">Instagram</a>
		</li>
		<li>
			<a class='pinterest' href='https://www.pinterest.com/southcentremall/' target="_blank">pinterest</a>
		</li>
		<li>
			<a class='youtube' href='https://www.youtube.com/user/SouthcentreMall' target="_blank">youtube</a>
		</li>
	</ul>
    
</template>
<style>
    .lb-data .lb-number, .lb-nav {
        display:none!important;
    }
</style>
<script>
    define(["Vue", "vuex", "lightbox"], function(Vue, Vuex, Lightbox) {
        Vue.use(Lightbox);
        return Vue.component("social-links", {
            template: template, // the variable template will be injected,
        });
    });
</script>