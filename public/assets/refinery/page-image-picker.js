var image_added;!function(t){var e,a,i,r,d,o;t(document).ready(function(){var a=t("#page_image_picker");o=a.data("input-type"),d="wym"==o,t("#custom_images_tab a").click(function(){if(!a.data("size-applied")&&d){var e=t(".page_part:first .wym_box"),i=t(".page_part:first iframe");a.css({height:e.height(),width:e.width()}).data("size-applied",!0).corner("tr 5px").corner("bottom 5px").find(".wym_box").css({backgroundColor:"white",height:i.height()+t(".page_part:first .wym_area_top").height()-parseInt(t(".wym_area_top .label_inline_with_link a").css("lineHeight")),width:i.width()-20,"border-color":i.css("border-top-color"),"border-style":i.css("border-top-style"),"border-width":i.css("border-top-width"),padding:"0px 10px 0px 10px"})}}),t("#page_images li textarea:hidden").each(function(e){var a=t(this).attr("name"),i=t(this);i.attr("data-old-id",i.attr("id")),i.attr("name","ignore_me_"+e),i.attr("id","ignore_me_"+e);var r=t("<input>").addClass("caption").attr("type","hidden").attr("name",a).attr("id",i.attr("data-old-id")).val(i.val());i.parents("li").first().append(r)}),e(),t(".page-images-caption-modal").hide(),r=t("#page_images .js-page-images-template").detach()}),e=function(){d&&WYMeditor.onload_functions.push(function(){t(".wym_box").css({width:null})}),t("#page_images").sortable({tolerance:"pointer",placeholder:"placeholder",cursor:"drag",items:"li",stop:i}),t("#page_images").on("mouseenter mouseleave","li",function(e){var r=t(this),d=r.find(".image_actions");if("mouseenter"==e.type){if(0==d.length){d=t("<div class='image_actions'></div>");var o=t("<img src='/assets/refinery/icons/delete.png' width='16' height='16' />");if(o.appendTo(d),o.click(function(){t(this).parents("li").first().remove(),i()}),r.find("textarea.page_caption").length>0){var n=t("<img src='/assets/refinery/icons/user_comment.png' width='16' height='16' class='caption' />");n.appendTo(d),n.click(a)}else d.addClass("no_captions");d.appendTo(r)}d.show()}else"mouseleave"==e.type&&d.hide()}),i()},image_added=function(a){var i=r.clone(),d=t(a).attr("id").replace("image_","");i.find("input:hidden:first").val(d),t("<img />").attr({title:t(a).attr("title"),alt:t(a).attr("alt"),src:t(a).attr("data-grid")}).appendTo(i),i.attr("id","image_"+d).removeClass("empty"),i.appendTo(t("#page_images")),e()},a=function(){var e=t(this).closest("li"),a=e.find(".page-images-caption-modal > textarea"),i=a.parent(),r={textarea:{width:400,height:"auto"},wym:{width:928,height:530}};i.find(".js-page-images-done").on("click",function(){i.dialog("close")});var n=function(){d&&a.data("wymeditor").update(),t("li.current_caption_list_item").removeClass("current_caption_list_item"),t("#"+a.attr("data-old-id")).val(a.val()),i.dialog("destroy")};e.addClass("current_caption_list_item"),i.dialog({title:"Add Caption",modal:!0,resizable:!1,autoOpen:!0,width:r[o].width,height:r[o].height,close:n}),d?a.addClass("wymeditor active_rotator_wymeditor widest").wymeditor(wymeditor_boot_options):a.show()},i=function(){t("#page_images li textarea:hidden").each(function(e,a){var i=t(a).attr("name").split("_");i[2]=""+e,t(a).attr("name",i.join("_")),t(a).attr("id",t(a).attr("id").replace(/_\d/,"_"+e)),t(a).attr("data-old-id",t(a).attr("data-old-id").replace(/_\d_/,"_"+e+"_").replace(/_\d/,"_"+e))}),t("#page_images li").each(function(e,a){t("input:hidden",a).each(function(){var a=t(this),i=a.attr("name").split("]");i[1]="["+e,a.attr("name",i.join("]")),a.attr("id",a.attr("id").replace(/_\d_/,"_"+e+"_").replace(/_\d/,"_"+e))})})}}(jQuery);