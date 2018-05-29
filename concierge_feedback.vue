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
    @import "//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/008/178/original/sweet-alert.css"
    .concierge-logo{
      position: absolute;
      top: 45px;
      left: 405px;
    }
    #concierge-container{
      background: url("https://www.mallmaverick.com/system/site_images/photos/000/030/093/original/SOM_239_GuestServicesScreens_2560x1440_FA3_(2).jpg?1497296476") no-repeat center center; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-color: #E5E2DA;
      position: relative;
      width: 2560px;
      height: 1440px;
    }    
    #subForm{
      position: absolute;
      top: 300px;
      left: 200px;

    }
    #subForm{
      font-size: 18pt;
    }
    #subForm label{
        font-size: 18pt !important;
        color:#000;
    }
    #subForm input{
      font-size: 18pt;
      height: 65px;
      border-radius: 6px;
        border: 1px solid gray;
    }
    #subForm textarea{
        font-size: 18pt;
        height: 200px;
        border-radius: 6px;
        border: 1px solid gray;
    }
    #subForm .form-group-lg{
      margin: 25px 0px;
    }
    #subForm .btn{
      font-size: 20pt;
      margin: 20px 0 0 0;
    }
    #fieldCheck{
      height: 30px !important;
      width: 30px;
    }
    #contact-label{
      font-size: 15pt;
      font-weight: normal;
    }
    .online_chat {
        display: none;
    }
    #concierge-container .upper-links.is-sticky{
        display: none;
    }
</style>
<script>
    define(["Vue", 'jquery', 'sweet-alert'], function(Vue, $, sweetAlert) {
        return Vue.component("concierge-feedback", {
            template: template, // the variable template will be injected,
            methods: {
                 // submitForm() {
                //     e.preventDefault();
                //     var checkbox = "NO";
                //     if ($("#fieldCheck").is(':checked')) {
                //       checkbox = "YES";
                //     };
                //     var data = {
                //         name: $("#fieldName").val(),
                //         email: $("#fieldEmail").val(),
                //         phone: $("#fieldPhone").val(),
                //         feedback: $("#fieldFeedback").val(),
                //         agree_to_contact: checkbox
                //     };
                //     $.ajax({
                //         type: "POST",
                //         url: "//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/008/177/original/email.php?1428439361",
                //         data: data,
                //         success: function(){
                //           alert("Thank you for your feedback!");
                //           document.getElementById("subForm").reset();
                //         }
                //     });
                // }
            }
        });
    });
</script>