<template>
	<div id="concierge-container">
            <div class="concierge-logo"><img alt="concierge" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/007/588/original/SOM_Tag.png?1426864225"></div>
            <form method="post" id="subForm">
                <div class="form-group-lg">
                    <label for="fieldName">Name</label><br />
                    <input id="fieldName" class="form-control" name="cm-name" type="text" />
                </div>
                <div class="form-group-lg">
                    <label for="fieldEmail">Email</label><br />
                    <input id="fieldEmail" class="form-control" name="cm-iyidlh-iyidlh" type="email" required />
                </div>
                <div class="form-group-lg">
                    <label for="fieldPhone">Phone number</label><br />
                    <input id="fieldPhone" class="form-control" name="cm-f-jtitlj" type="text" />
                </div>
                <div class="form-group-lg">
                    <label for="fieldFeedback">Feedback</label><br />
                    <textarea id="fieldFeedback" class="form-control" name="cm-f-jtitlt" type="text"></textarea>
                </div>
                <div class="form-group">
                    <input id="fieldCheck" name="cm-ol-juitdh" type="checkbox" /> <label id="contact-label" for="fieldCheck">Would you like to be contacted by Mall Management regarding your feedback?</label>
                </div>
                <div class="form-group">
                    <button class="btn btn-default btn-lg" type="submit">Submit</button>
                </div>
                <div class="form-group" id="thankyou_msg">
                </div>
            </form>
        </div>
</template>
<style>
    @import '//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/008/178/original/sweet-alert.css'
</style>
<script>
    define(["Vue"], function(Vue) {
        return Vue.component("concierge-feedback", {
            template: template, // the variable template will be injected,
        });
    });
</script>