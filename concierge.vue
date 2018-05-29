<template>
	<div id="concierge-container">
  <a href="https://www279.americanexpress.com/GPTHBIWeb/validateIPAction.do?clientkey=amex%20bank%20of%20canada"><img alt="balance" src="https://www.mallmaverick.com/system/site_images/photos/000/029/740/original/gift_card.png?1496432958"></a>
  <a href="http://www.southcentremall.com/#directory"><img alt="directory" src="https://www.mallmaverick.com/system/site_images/photos/000/029/739/original/directory.png?1496432958"></a>
  <a href="http://www.southcentremall.com/"><img alt="home" src="https://www.mallmaverick.com/system/site_images/photos/000/029/741/original/website.png?1496432958"></a>
  <a href="http://www.southcentremall.com/pages/southcentre-concierge-feedback"><img alt="concierge" src="https://www.mallmaverick.com/system/site_images/photos/000/029/743/original/feedback.png?1496432958"></a>
  <a><img alt="tag" src="/system/site_images/photos/000/007/588/original/SOM_Tag.png?1426864225"></a>
</div>
</template>
<style>
    @import "//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/008/178/original/sweet-alert.css";
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
    .upper-links.is-sticky, .top_menu.fixed, footer{
        display: none;
    }
</style>
<script>
    define(["Vue"], function(Vue) {
        return Vue.component("concierge-component", {
            template: template, // the variable template will be injected,
            methods: {
                  submitForm(e) {
                    e.preventDefault();
                    var checkbox = "NO";
                    if ($("#fieldCheck").is(':checked')) {
                      checkbox = "YES";
                    };
                    var data = {
                        name: $("#fieldName").val(),
                        email: $("#fieldEmail").val(),
                        phone: $("#fieldPhone").val(),
                        feedback: $("#fieldFeedback").val(),
                        agree_to_contact: checkbox
                    };
                    // console.log("comes to this");
                    $.ajax({
                        type: "POST",
                        url: "//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/008/177/original/email.php?1428439361",
                        data: data,
                        success: function(){
                          alert("Thank you for your feedback!");
                          document.getElementById("subForm").reset();
                        }
                    });
                }
            }
        });
    });
</script>