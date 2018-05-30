<template>
<div>
	<div class="main_content">
          <section>
            <div class="section_content fitfabfeb_content">
                <img class="fitImg" src="/system/site_images/photos/000/016/358/original/top-1.png?1453399064" />
                <img class="fitImg" src="/system/site_images/photos/000/016/360/original/text.png?1453399872" />
                
                <p class="width_medium">Southcentre will be hosting uniquely curated 1 hour fitness classes from 4 of Fiteset's awesome studio partners.</p>
                <p class="width_large" style="font-family: ChronicleDisplay-Roman;"><i>To attend our FREE fitness classes, please <b><a href="https://www.eventbrite.ca/e/fit-fab-feb-southcentre-tickets-20593781555" style="color:black" target="_blank">REGISTER</a></b> for the classes of your choice.</i></p>
                <p class="width_small">once you've saved your spot, you'll just need to bring a water bottle, running shoes and be ready to sweat!</p>
                
                <a href="https://www.eventbrite.ca/e/fit-fab-feb-southcentre-tickets-20593781555" target="_blank" class="register_btn"><img class="fitImg" src="/system/site_images/photos/000/016/359/original/register.png?1453398807" /></a>
           
                <h2>CLASS TIMES</h2>
                <p style="font-family: ChronicleDisplay-Roman;">Saturday <span class="lowercase chronicle-display-italic">10am - 11am</span>/ Sunday <span class="lowercase chronicle-display-italic">11am-12am</span></p>
           
                <h2>SCHEDULE</h2>
                <p class="first_class" style="font-family: ChronicleDisplay-Roman;">Feb 6-7 <span class="lowercase chronicle-display-italic">Spin Class with Core Spin Club</span></p>
                <p style="font-family: ChronicleDisplay-Roman;">Feb 13-14 <span style="padding-left:15px;" class="lowercase chronicle-display-italic">Kickboxing and HIIT with Fit Republic</span></p>
                <p class="second_class" style="font-family: ChronicleDisplay-Roman;">Feb 20-21 <span class="lowercase chronicle-display-italic">'Pre-Game' with Reaction Fitness</span></p>
                <p class="third_class" style="font-family: ChronicleDisplay-Roman;">Feb 27-28 <span class="lowercase chronicle-display-italic">Barre with Dailey Method</span></p>

                <p class="width_large">Attend four classes (one per weekend) and get a $25 Southcentre gift card!
                <br/>Ask for your punch card when you attend your first class.</p>
                
                <h2>FAQ</h2>
                <h3>How can I attend a class?</h3>
                <p>Please <b><a href="https://www.eventbrite.ca/e/fit-fab-feb-southcentre-tickets-20593781555" target="_blank">register</a></b> for the classes of your choice.</p>
                <div class="line_divider"></div>
                
                <h3>What should I wear?</h3>
                <p class="width_medium" >Regular workout gear such as sneakers, a comfy shirt and pants with some stretch will be perfect!</p>
                <div class="line_divider"></div>
                
                <h3>What should I bring?</h3>
                <p class="width_medium">Most classes only require a water bottle and a willingness to sweat! Some classes (such as yoga) may require additional items, so be sure to check when you register for each class.</p>
                <div class="line_divider"></div>

                <h3>I didn't register-can I still attend?</h3>                
                <p class="width_medium">If we have space in the class, we would love to have you join us! However, if the class is full we may not be able to accommodate you.</p>
                <div class="line_divider"></div>

                <h3>I still have questions-who can I ask?</h3>
                <p class="small_medium">Please email <b><a href="mailto:info@southcentremall.com">info@southcentremall.com</a></b> and<br/>we will be happy to help you!</p>
            </div>
          </section>
        </div>
                        <img style="width:100%" src="//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/016/357/original/bottom-1.png?1453413035" />
                        </div>
</template>
<style>
	section{
    border-bottom: 0px;
    }
    .section_content{
        padding-bottom:0px !important;
    }
    .footer{
        margin-top: 0px !important;
    }
    .dotted_div{
        margin: 0 auto;
        background-image: url(//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/835/original/line_dotted_gray.png?1410202262);
        background-repeat: no-repeat;
        background-position: center;
        width: 900px;
        height: 3px;
        padding: 2.188em;
    }
    .fitImg{
        
        display: block;
        margin: 0 auto;
        padding-bottom: 20px;
    }
    
    .fitfabfeb_content p{
        margin: auto;
        padding-bottom:15px;
        font-family: Whitney-light;
        font-size: 1.1em;
    }
    .register_btn{
        margin: auto;
        display: block;
        width: 215px;
        padding-bottom:30px;
        padding-top:30px;
    }
    
    .width_medium{
        width:500px;
    }
    .width_large{
        width:650px;
    }
    .width_small{
        width:400px;
    }
    
    .fitfabfeb_content h2{
        font-family: ChronicleDisplay-Roman;
        padding-bottom:15px;
    }
    .fitfabfeb_content h3{
        font-size:1.4em;
    }
    .first_class{
        margin-left: -50px !important;
    }
    .first_class span{
        padding-left:30px !important;
    }
    .second_class{
        margin-left: -25px !important;
    }
    .second_class span{
        padding-left:15px !important;
    }
    .third_class{
        margin-left: -80px !important;
    }
    .third_class span{
        padding-left: 15px !important;
    }
    
    .line_divider {
        margin: 0 auto;
        background-image: url(//mallmaverick.cdn.speedyrails.net/system/site_images/photos/000/003/835/original/line_dotted_gray.png?1410202262);
        background-repeat: no-repeat;
        background-position: center;
        max-width: 487px;
        height: 3px;
        padding: 1.188em;
    }
    
    @media screen and (max-width: 480px) {
        .fitImg {
            width: 95%;
        }
        .width_medium, .width_large, .width_small{
            width:100%
        }
        .section_content{
            padding:5px;
        }
        }

</style>
<script>
    define(["Vue", "vue!social_links"], function(Vue, socialLiks) {
        return Vue.component("fitfabfeb-component", {
            template: template, // the variable template will be injected,
        });
    });
</script>