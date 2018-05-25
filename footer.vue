<template>
	<footer>
		
</template>
<style>
	td, td label {
	font-family: WhitneyHTF-Book !important;
	font-size: 1.1383333467168em !important;
	}
	tr {
	background:none !important;
	vertical-align: top;
	}
	table{
	background:none !important;
	border: 0px !important;
	}
	.agreementLabel{
	vertical-align: top;
	}
	.newsletter_agreement {
	margin-left: 10px;
	}
	.error{color:#F00}
	@media (max-width:768px){
	.agreementLabel{
	vertical-align: none !important;
	} 
	}
</style>
<script>
    define(["Vue", "vue!social_links"], function(Vue, socialLinks) {
        return Vue.component("footer-component", {
            template: template, // the variable template will be injected,
        });
    });
</script>