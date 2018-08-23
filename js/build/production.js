addComment={moveForm:function(d,f,i,c){var m=this,a,h=m.I(d),b=m.I(i),l=m.I("cancel-comment-reply-link"),j=m.I("comment_parent"),k=m.I("comment_post_ID");if(!h||!b||!l||!j){return}m.respondId=i;c=c||false;if(!m.I("wp-temp-form-div")){a=document.createElement("div");a.id="wp-temp-form-div";a.style.display="none";b.parentNode.insertBefore(a,b)}h.parentNode.insertBefore(b,h.nextSibling);if(k&&c){k.value=c}j.value=f;l.style.display="";l.onclick=function(){var n=addComment,e=n.I("wp-temp-form-div"),o=n.I(n.respondId);if(!e||!o){return}n.I("comment_parent").value="0";e.parentNode.insertBefore(o,e);e.parentNode.removeChild(e);this.style.display="none";this.onclick=null;return false};try{m.I("comment").focus()}catch(g){}return false},I:function(a){return document.getElementById(a)}};
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)
},c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);
/*global jQuery */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    }

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() == 'object' || $this.attr('height') ) ? $this.attr('height') : $this.height(),
            width = $this.attr('width') ? $this.attr('width') : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  }
})( jQuery );
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_all_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*!
 * jQuery mmenu v7.0.6
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function t(){e[n].glbl||(l={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},s={},a={},r={},e.each([s,a,r],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,i=e.length;n<i;n++)t[e[n]]=t.mm(e[n])}}),s.mm=function(e){return"mm-"+e},s.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"),s.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child title"),r.mm=function(e){return e+".mm"},r.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=s,e[n]._d=a,e[n]._e=r,e[n].glbl=l)}var n="mmenu",i="7.0.6";if(!(e[n]&&e[n].version>i)){e[n]=function(e,t,n){return this.$menu=e,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=t,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initWrappers(),this._initAddons(),this._initExtensions(),this._initHooks(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=i,e[n].uniqueId=0,e[n].wrappers={},e[n].addons={},e[n].defaults={hooks:{},extensions:[],wrappers:[],navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={getInstance:function(){return this},initPanels:function(e){this._initPanels(e)},openPanel:function(t,i){if(this.trigger("openPanel:before",t),t&&t.length&&(t.is("."+s.panel)||(t=t.closest("."+s.panel)),t.is("."+s.panel))){var r=this;if("boolean"!=typeof i&&(i=!0),t.parent("."+s.listitem+"_vertical").length)t.parents("."+s.listitem+"_vertical").addClass(s.listitem+"_opened").children("."+s.panel).removeClass(s.hidden),this.openPanel(t.parents("."+s.panel).not(function(){return e(this).parent("."+s.listitem+"_vertical").length}).first()),this.trigger("openPanel:start",t),this.trigger("openPanel:finish",t);else{if(t.hasClass(s.panel+"_opened"))return;var l=this.$pnls.children("."+s.panel),o=this.$pnls.children("."+s.panel+"_opened");if(!e[n].support.csstransitions)return o.addClass(s.hidden).removeClass(s.panel+"_opened"),t.removeClass(s.hidden).addClass(s.panel+"_opened"),this.trigger("openPanel:start",t),void this.trigger("openPanel:finish",t);l.not(t).removeClass(s.panel+"_opened-parent");for(var d=t.data(a.parent);d;)d=d.closest("."+s.panel),d.parent("."+s.listitem+"_vertical").length||d.addClass(s.panel+"_opened-parent"),d=d.data(a.parent);l.removeClass(s.panel+"_highest").not(o).not(t).addClass(s.hidden),t.removeClass(s.hidden);var c=function(){o.removeClass(s.panel+"_opened"),t.addClass(s.panel+"_opened"),t.hasClass(s.panel+"_opened-parent")?(o.addClass(s.panel+"_highest"),t.removeClass(s.panel+"_opened-parent")):(o.addClass(s.panel+"_opened-parent"),t.addClass(s.panel+"_highest")),r.trigger("openPanel:start",t)},h=function(){o.removeClass(s.panel+"_highest").addClass(s.hidden),t.removeClass(s.panel+"_highest"),r.trigger("openPanel:finish",t)};i&&!t.hasClass(s.panel+"_noanimation")?setTimeout(function(){r.__transitionend(t,function(){h()},r.conf.transitionDuration),c()},r.conf.openingInterval):(c(),h())}this.trigger("openPanel:after",t)}},closePanel:function(e){this.trigger("closePanel:before",e);var t=e.parent();t.hasClass(s.listitem+"_vertical")&&(t.removeClass(s.listitem+"_opened"),e.addClass(s.hidden),this.trigger("closePanel",e)),this.trigger("closePanel:after",e)},closeAllPanels:function(e){this.trigger("closeAllPanels:before"),this.$pnls.find("."+s.listview).children().removeClass(s.listitem+"_selected").filter("."+s.listitem+"_vertical").removeClass(s.listitem+"_opened");var t=this.$pnls.children("."+s.panel),n=e&&e.length?e:t.first();this.$pnls.children("."+s.panel).not(n).removeClass(s.panel+"_opened").removeClass(s.panel+"_opened-parent").removeClass(s.panel+"_highest").addClass(s.hidden),this.openPanel(n,!1),this.trigger("closeAllPanels:after")},togglePanel:function(e){var t=e.parent();t.hasClass(s.listitem+"_vertical")&&this[t.hasClass(s.listitem+"_opened")?"closePanel":"openPanel"](e)},setSelected:function(e){this.trigger("setSelected:before",e),this.$menu.find("."+s.listitem+"_selected").removeClass(s.listitem+"_selected"),e.addClass(s.listitem+"_selected"),this.trigger("setSelected:after",e)},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var i=0,s=this.cbck[n].length;i<s;i++)this.cbck[n][i].apply(e,t)},matchMedia:function(e,t,n){var i={yes:t,no:n};this.mtch[e]=this.mtch[e]||[],this.mtch[e].push(i)},_initHooks:function(){for(var e in this.opts.hooks)this.bind(e,this.opts.hooks[e])},_initWrappers:function(){this.trigger("initWrappers:before");for(var t=0;t<this.opts.wrappers.length;t++){var i=e[n].wrappers[this.opts.wrappers[t]];"function"==typeof i&&i.call(this)}this.trigger("initWrappers:after")},_initAddons:function(){this.trigger("initAddons:before");var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var e=this;this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions});for(var t in this.opts.extensions)this.opts.extensions[t]=this.opts.extensions[t].length?s.menu+"_"+this.opts.extensions[t].join(" "+s.menu+"_"):"",this.opts.extensions[t]&&!function(t){e.matchMedia(t,function(){this.$menu.addClass(this.opts.extensions[t])},function(){this.$menu.removeClass(this.opts.extensions[t])})}(t);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",s.mm(e(this).attr("id")))})),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+s.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.addClass(s.menu).parent().addClass(s.wrapper),this.trigger("initMenu:after")},_initPanels:function(t){this.trigger("initPanels:before",t),t=t||this.$pnls.children(this.conf.panelNodetype);var n=e(),i=this,a=function(t){t.filter(i.conf.panelNodetype).each(function(t){var r=i._initPanel(e(this));if(r){i._initNavbar(r),i._initListview(r),n=n.add(r);var l=r.children("."+s.listview).children("li").children(i.conf.panelNodetype).add(r.children("."+i.conf.classNames.panel));l.length&&a(l)}})};a(t),this.trigger("initPanels:after",n)},_initPanel:function(e){this.trigger("initPanel:before",e);if(e.hasClass(s.panel))return e;if(this.__refactorClass(e,this.conf.classNames.panel,s.panel),this.__refactorClass(e,this.conf.classNames.nopanel,s.nopanel),this.__refactorClass(e,this.conf.classNames.inset,s.listview+"_inset"),e.filter("."+s.listview+"_inset").addClass(s.nopanel),e.hasClass(s.nopanel))return!1;var t=e.hasClass(this.conf.classNames.vertical)||!this.opts.slidingSubmenus;e.removeClass(this.conf.classNames.vertical);var n=e.attr("id")||this.__getUniqueId();e.is("ul, ol")&&(e.removeAttr("id"),e.wrap("<div />"),e=e.parent()),e.attr("id",n),e.addClass(s.panel+" "+s.hidden);var i=e.parent("li");return t?i.addClass(s.listitem+"_vertical"):e.appendTo(this.$pnls),i.length&&(i.data(a.child,e),e.data(a.parent,i)),this.trigger("initPanel:after",e),e},_initNavbar:function(t){if(this.trigger("initNavbar:before",t),!t.children("."+s.navbar).length){var n=t.data(a.parent),i=e('<div class="'+s.navbar+'" />'),r=this.__getPanelTitle(t,this.opts.navbar.title),l="";if(n&&n.length){if(n.hasClass(s.listitem+"_vertical"))return;if(n.parent().is("."+s.listview))var o=n.children("a, span").not("."+s.btn+"_next");else var o=n.closest("."+s.panel).find('a[href="#'+t.attr("id")+'"]');o=o.first(),n=o.closest("."+s.panel);var d=n.attr("id");switch(r=this.__getPanelTitle(t,e("<span>"+o.text()+"</span>").text()),this.opts.navbar.titleLink){case"anchor":l=o.attr("href");break;case"parent":l="#"+d}i.append('<a class="'+s.btn+" "+s.btn+"_prev "+s.navbar+'__btn" href="#'+d+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&t.addClass(s.panel+"_has-navbar"),i.append('<a class="'+s.navbar+'__title"'+(l.length?' href="'+l+'"':"")+">"+r+"</a>").prependTo(t),this.trigger("initNavbar:after",t)}},_initListview:function(t){this.trigger("initListview:before",t);var n=this.__childAddBack(t,"ul, ol");this.__refactorClass(n,this.conf.classNames.nolistview,s.nolistview);var i=n.not("."+s.nolistview).addClass(s.listview).children().addClass(s.listitem);this.__refactorClass(i,this.conf.classNames.selected,s.listitem+"_selected"),this.__refactorClass(i,this.conf.classNames.divider,s.listitem+"_divider"),this.__refactorClass(i,this.conf.classNames.spacer,s.listitem+"_spacer");var r=t.data(a.parent);if(r&&r.is("."+s.listitem)&&!r.children("."+s.btn+"_next").length){var l=r.children("a, span").first(),o=e('<a class="'+s.btn+'_next" href="#'+t.attr("id")+'" />').insertBefore(l);l.is("span")&&o.addClass(s.btn+"_fullwidth")}this.trigger("initListview:after",t)},_initOpened:function(){this.trigger("initOpened:before");var e=this.$pnls.find("."+s.listitem+"_selected").removeClass(s.listitem+"_selected").last().addClass(s.listitem+"_selected"),t=e.length?e.closest("."+s.panel):this.$pnls.children("."+s.panel).first();this.openPanel(t,!1),this.trigger("initOpened:after")},_initAnchors:function(){this.trigger("initAnchors:before");var t=this;l.$body.on(r.click+"-oncanvas","a[href]",function(i){var a=e(this),r=a.attr("href"),l=t.$menu.find(a).length,o=a.is("."+s.listitem+" > a"),d=a.is('[rel="external"]')||a.is('[target="_blank"]');if(l&&r.length>1&&"#"==r.slice(0,1))try{var c=t.$menu.find(r);if(c.is("."+s.panel))return t[a.parent().hasClass(s.listitem+"_vertical")?"togglePanel":"openPanel"](c),void i.preventDefault()}catch(h){}var f={close:null,setSelected:null,preventDefault:"#"==r.slice(0,1)};for(var p in e[n].addons){var u=e[n].addons[p].clickAnchor.call(t,a,l,o,d);if(u){if("boolean"==typeof u)return void i.preventDefault();"object"==typeof u&&(f=e.extend({},f,u))}}l&&o&&!d&&(t.__valueOrFn(a,t.opts.onClick.setSelected,f.setSelected)&&t.setSelected(e(i.target).parent()),t.__valueOrFn(a,t.opts.onClick.preventDefault,f.preventDefault)&&i.preventDefault(),t.__valueOrFn(a,t.opts.onClick.close,f.close)&&t.opts.offCanvas&&"function"==typeof t.close&&t.close())}),this.trigger("initAnchors:after")},_initMatchMedia:function(){var e=this;for(var t in this.mtch)!function(){var n=t,i=window.matchMedia(n);e._fireMatchMedia(n,i),i.addListener(function(t){e._fireMatchMedia(n,t)})}()},_fireMatchMedia:function(e,t){for(var n=t.matches?"yes":"no",i=0;i<this.mtch[e].length;i++)this.mtch[e][i][n].call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return this.conf.clone&&e&&e.length&&(e=s.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var i=this;n[i]=function(){var e=t[i].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){if("function"==typeof t){var i=t.call(e[0]);if("undefined"!=typeof i)return i}return"function"!=typeof t&&"undefined"!=typeof t||"undefined"==typeof n?t:n},__getPanelTitle:function(t,i){var s;return"function"==typeof this.opts.navbar.title&&(s=this.opts.navbar.title.call(t[0])),"undefined"==typeof s&&(s=t.data(a.title)),"undefined"!=typeof s?s:"string"==typeof i?e[n].i18n(i):e[n].i18n(e[n].defaults.navbar.title)},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(n)},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__childAddBack:function(e,t){return e.children(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+s.listitem+"_divider").not("."+s.hidden)},__filterListItemAnchors:function(e){return this.__filterListItems(e).children("a").not("."+s.btn+"_next")},__openPanelWoAnimation:function(e){e.hasClass(s.panel+"_noanimation")||(e.addClass(s.panel+"_noanimation"),this.__transitionend(e,function(){e.removeClass(s.panel+"_noanimation")},this.conf.openingInterval),this.openPanel(e))},__transitionend:function(e,t,n){var i=!1,s=function(n){"undefined"!=typeof n&&n.target!=e[0]||(i||(e.off(r.transitionend),e.off(r.webkitTransitionEnd),t.call(e[0])),i=!0)};e.on(r.transitionend,s),e.on(r.webkitTransitionEnd,s),setTimeout(s,1.1*n)},__getUniqueId:function(){return s.mm(e[n].uniqueId++)}},e.fn[n]=function(i,s){t(),i=e.extend(!0,{},e[n].defaults,i),s=e.extend(!0,{},e[n].configuration,s);var a=e();return this.each(function(){var t=e(this);if(!t.data(n)){var r=new e[n](t,i,s);r.$menu.data(n,r.__api()),a=a.add(r.$menu)}}),a},e[n].i18n=function(){var t={};return function(n){switch(typeof n){case"object":return e.extend(t,n),t;case"string":return t[n]||n;case"undefined":default:return t}}}(),e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransitions||Modernizr.csstransitions}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransforms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var s,a,r,l}}(jQuery);
/*
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 */
!function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var i=this.opts[n],s=this.conf[n];r=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"object"!=typeof i&&(i={}),i=this.opts[n]=e.extend(!0,{},e[t].defaults[n],i),"string"!=typeof s.pageSelector&&(s.pageSelector="> "+s.pageNodetype),this.vars.opened=!1;var a=[o.menu+"_offcanvas"];e[t].support.csstransforms||a.push(o["no-csstransforms"]),e[t].support.csstransforms3d||a.push(o["no-csstransforms3d"]),this.bind("initMenu:after",function(){var e=this;this.setPage(r.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu.addClass(a.join(" ")).parent("."+o.wrapper).removeClass(o.wrapper),this.$menu[s.menuInsertMethod](s.menuInsertSelector);var t=window.location.hash;if(t){var i=this._getOriginalMenuId();i&&i==t.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)})}},add:function(){o=e[t]._c,i=e[t]._d,s=e[t]._e,o.add("slideout page no-csstransforms3d"),i.add("style")},clickAnchor:function(e,t){var i=this;if(this.opts[n]){var s=this._getOriginalMenuId();if(s&&e.is('[href="#'+s+'"]')){if(t)return this.open(),!0;var a=e.closest("."+o.menu);if(a.length){var p=a.data("mmenu");if(p&&p.close)return p.close(),i.__transitionend(a,function(){i.open()},i.conf.transitionDuration),!0}return this.open(),!0}if(r.$page)return s=r.$page.first().attr("id"),s&&e.is('[href="#'+s+'"]')?(this.close(),!0):void 0}}},e[t].defaults[n]={blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuInsertMethod:"prependTo",menuInsertSelector:"body"},e[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},e[t].prototype._openSetup=function(){var t=this,a=this.opts[n];this.closeAllOthers(),r.$page.each(function(){e(this).data(i.style,e(this).attr("style")||"")}),r.$wndw.trigger(s.resize+"-"+n,[!0]);var p=[o.wrapper+"_opened"];a.blockUI&&p.push(o.wrapper+"_blocking"),"modal"==a.blockUI&&p.push(o.wrapper+"_modal"),a.moveBackground&&p.push(o.wrapper+"_background"),r.$html.addClass(p.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(o.menu+"_opened")},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(r.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),r.$html.addClass(o.wrapper+"_opening")},e[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(r.$page.first(),function(){t.$menu.removeClass(o.menu+"_opened");var n=[o.wrapper+"_opened",o.wrapper+"_blocking",o.wrapper+"_modal",o.wrapper+"_background"];r.$html.removeClass(n.join(" ")),r.$page.each(function(){e(this).attr("style",e(this).data(i.style))}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),r.$html.removeClass(o.wrapper+"_opening"),this.trigger("close:after")}},e[t].prototype.closeAllOthers=function(){r.$body.find("."+o.menu+"_offcanvas").not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){this.trigger("setPage:before",t);var i=this,s=this.conf[n];t&&t.length||(t=r.$body.find(s.pageSelector),s.noPageSelector.length&&(t=t.not(s.noPageSelector.join(", "))),t.length>1&&s.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),t.addClass(o.page+" "+o.slideout),r.$page=t,this.trigger("setPage:after",t)},e[t].prototype["_initWindow_"+n]=function(){r.$wndw.off(s.keydown+"-"+n).on(s.keydown+"-"+n,function(e){if(r.$html.hasClass(o.wrapper+"_opened")&&9==e.keyCode)return e.preventDefault(),!1});var e=0;r.$wndw.off(s.resize+"-"+n).on(s.resize+"-"+n,function(t,n){if(1==r.$page.length&&(n||r.$html.hasClass(o.wrapper+"_opened"))){var i=r.$wndw.height();(n||i!=e)&&(e=i,r.$page.css("minHeight",i))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(r.$blck||(r.$blck=e('<div class="'+o.page+"__blocker "+o.slideout+'" />')),r.$blck.appendTo(r.$body).off(s.touchstart+"-"+n+" "+s.touchmove+"-"+n).on(s.touchstart+"-"+n+" "+s.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),r.$blck.trigger(s.mousedown+"-"+n)}).off(s.mousedown+"-"+n).on(s.mousedown+"-"+n,function(e){e.preventDefault(),r.$html.hasClass(o.wrapper+"_modal")||(t.closeAllOthers(),t.close())}))};var o,i,s,r}(jQuery);
/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 */
!function(t){var i="mmenu",n="screenReader";t[i].addons[n]={setup:function(){var a=this,o=this.opts[n],h=this.conf[n];s=t[i].glbl,"boolean"==typeof o&&(o={aria:o,text:o}),"object"!=typeof o&&(o={}),o=this.opts[n]=t.extend(!0,{},t[i].defaults[n],o),o.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+e.listview).children().each(function(){a.__sr_aria(t(this),"hidden",t(this).is("."+e.hidden))})}),this.bind("openPanel:start",function(t){var i=this.$menu.find("."+e.panel).not(t).not(t.parents("."+e.panel)),n=t.add(t.find("."+e.listitem+"_vertical ."+e.listitem+"_opened").children("."+e.panel));this.__sr_aria(i,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(t){this.__sr_aria(t,"hidden",!0)}),this.bind("initPanels:after",function(i){var n=i.find("."+e.btn).each(function(){a.__sr_aria(t(this),"owns",t(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(t){var i=t.children("."+e.navbar);this.__sr_aria(i,"hidden",!t.hasClass(e.panel+"_has-navbar"))}),o.text&&(this.bind("initlistview:after",function(t){var i=t.find("."+e.listview).find("."+e.btn+"_fullwidth").parent().children("span");this.__sr_aria(i,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(t){var i=t.children("."+e.navbar),n=!!i.children("."+e.btn+"_prev").length;this.__sr_aria(i.children("."+e.title),"hidden",n)}))),o.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var r=n.children("."+e.navbar),a=r.children("."+e.title).text(),s=t[i].i18n(h.text.closeSubmenu);a&&(s+=" ("+a+")"),r.children("."+e.btn+"_prev").html(this.__sr_text(s))}),this.bind("initListview:after",function(n){var s=n.data(r.parent);if(s&&s.length){var o=s.children("."+e.btn+"_next"),d=o.nextAll("span, a").first().text(),l=t[i].i18n(h.text[o.parent().is("."+e.listitem+"_vertical")?"toggleSubmenu":"openSubmenu"]);d&&(l+=" ("+d+")"),o.html(a.__sr_text(l))}}))},add:function(){e=t[i]._c,r=t[i]._d,a=t[i]._e,e.add("sronly")},clickAnchor:function(t,i){}},t[i].defaults[n]={aria:!0,text:!0},t[i].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},t[i].prototype.__sr_aria=function(t,i,n){t.prop("aria-"+i,n)[n?"attr":"removeAttr"]("aria-"+i,n)},t[i].prototype.__sr_role=function(t,i){t.prop("role",i)[i?"attr":"removeAttr"]("role",i)},t[i].prototype.__sr_text=function(t){return'<span class="'+e.sronly+'">'+t+"</span>"};var e,r,a,s}(jQuery);
/*
 * jQuery mmenu scrollBugFix add-on
 * mmenu.frebsite.nl
 */
!function(o){var t="mmenu",n="scrollBugFix";o[t].addons[n]={setup:function(){var r=this.opts[n];this.conf[n];i=o[t].glbl,o[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof r&&(r={fix:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=o.extend(!0,{},o[t].defaults[n],r),r.fix&&(this.bind("open:start",function(){this.$pnls.children("."+e.panel+"_opened").scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+n]()})))},add:function(){e=o[t]._c,r=o[t]._d,s=o[t]._e},clickAnchor:function(o,t){}},o[t].defaults[n]={fix:!0},o[t].prototype["_initWindow_"+n]=function(){var t=this;i.$docu.off(s.touchmove+"-"+n).on(s.touchmove+"-"+n,function(o){i.$html.hasClass(e.wrapper+"_opened")&&o.preventDefault()});var r=!1;i.$body.off(s.touchstart+"-"+n).on(s.touchstart+"-"+n,"."+e.panels+"> ."+e.panel,function(o){i.$html.hasClass(e.wrapper+"_opened")&&(r||(r=!0,0===o.currentTarget.scrollTop?o.currentTarget.scrollTop=1:o.currentTarget.scrollHeight===o.currentTarget.scrollTop+o.currentTarget.offsetHeight&&(o.currentTarget.scrollTop-=1),r=!1))}).off(s.touchmove+"-"+n).on(s.touchmove+"-"+n,"."+e.panels+"> ."+e.panel,function(t){i.$html.hasClass(e.wrapper+"_opened")&&o(this)[0].scrollHeight>o(this).innerHeight()&&t.stopPropagation()}),i.$wndw.off(s.orientationchange+"-"+n).on(s.orientationchange+"-"+n,function(){t.$pnls.children("."+e.panel+"_opened").scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})};var e,r,s,i}(jQuery);
/*
 * jQuery mmenu autoHeight add-on
 * mmenu.frebsite.nl
 */
!function(t){var e="mmenu",i="autoHeight";t[e].addons[i]={setup:function(){var h=this.opts[i];this.conf[i];if(a=t[e].glbl,"boolean"==typeof h&&h&&(h={height:"auto"}),"string"==typeof h&&(h={height:h}),"object"!=typeof h&&(h={}),h=this.opts[i]=t.extend(!0,{},t[e].defaults[i],h),"auto"==h.height||"highest"==h.height){this.bind("initMenu:after",function(){this.$menu.addClass(n.menu+"_autoheight")});var s=function(e){if(!this.opts.offCanvas||this.vars.opened){var i=Math.max(parseInt(this.$pnls.css("top"),10),0)||0,s=Math.max(parseInt(this.$pnls.css("bottom"),10),0)||0,a=0;this.$menu.addClass(n.menu+"_autoheight-measuring"),"auto"==h.height?(e=e||this.$pnls.children("."+n.panel+"_opened"),e.parent("."+n.listitem+"_vertical").length&&(e=e.parents("."+n.panel).not(function(){return t(this).parent("."+n.listitem+"_vertical").length})),e.length||(e=this.$pnls.children("."+n.panel)),a=e.first().outerHeight()):"highest"==h.height&&this.$pnls.children("."+n.panel).each(function(){var e=t(this);e.parent("."+n.listitem+"_vertical").length&&(e=e.parents("."+n.panel).not(function(){return t(this).parent("."+n.listitem+"_vertical").length})),a=Math.max(a,e.first().outerHeight())}),this.$menu.height(a+i+s).removeClass(n.menu+"_autoheight-measuring")}};this.opts.offCanvas&&this.bind("open:start",s),"highest"==h.height&&this.bind("initPanels:after",s),"auto"==h.height&&(this.bind("updateListview",s),this.bind("openPanel:start",s),this.bind("closePanel",s))}},add:function(){n=t[e]._c,h=t[e]._d,s=t[e]._e,s.add("resize")},clickAnchor:function(t,e){}},t[e].defaults[i]={height:"default"};var n,h,s,a}(jQuery);
/*
 * jQuery mmenu backButton add-on
 * mmenu.frebsite.nl
 */
!function(n){var t="mmenu",o="backButton";n[t].addons[o]={setup:function(){function e(){l=[c],this.$pnls.children("."+i.panel+"_opened-parent").add(s.$pnls.children("."+i.panel+"_opened")).each(function(){l.push("#"+n(this).attr("id"))})}if(this.opts.offCanvas){var s=this,h=this.opts[o];this.conf[o];a=n[t].glbl,"boolean"==typeof h&&(h={close:h}),"object"!=typeof h&&(h={}),h=n.extend(!0,{},n[t].defaults[o],h);var c="#"+this.$menu.attr("id");if(h.close){var l=[];this.bind("open:finish",function(){history.pushState(null,document.title,c)}),this.bind("open:finish",e),this.bind("openPanel:finish",e),this.bind("close:finish",function(){l=[],history.back(),history.pushState(null,document.title,location.pathname+location.search)}),n(window).on("popstate",function(t){if(s.vars.opened&&l.length){l=l.slice(0,-1);var o=l[l.length-1];o==c?s.close():(s.openPanel(n(o)),history.pushState(null,document.title,c))}})}h.open&&n(window).on("popstate",function(n){s.vars.opened||location.hash!=c||s.open()})}},add:function(){return window.history&&window.history.pushState?(i=n[t]._c,e=n[t]._d,void(s=n[t]._e)):void(n[t].addons[o].setup=function(){})},clickAnchor:function(n,t){}},n[t].defaults[o]={close:!1,open:!1};var i,e,s,a}(jQuery);
/*
 * jQuery mmenu columns add-on
 * mmenu.frebsite.nl
 */
!function(e){var n="mmenu",i="columns";e[n].addons[i]={setup:function(){function l(e){var n=e.data(s.parent);if(n&&(n=n.closest("."+a.panel),n.length)){var i=n.attr("class");if(i&&(i=i.split(a.panel+"_columns-")[1]))for(i=parseInt(i.split(" ")[0],10)+1;i>0;){var l=this.$pnls.children("."+a.panel+"_columns-"+i);if(!l.length){i=-1;break}i++,l.removeClass(r).addClass(a.hidden)}}}var o=this.opts[i];this.conf[i];if(t=e[n].glbl,"boolean"==typeof o&&(o={add:o}),"number"==typeof o&&(o={add:!0,visible:o}),"object"!=typeof o&&(o={}),"number"==typeof o.visible&&(o.visible={min:o.visible,max:o.visible}),o=this.opts[i]=e.extend(!0,{},e[n].defaults[i],o),o.add){o.visible.min=Math.max(1,Math.min(6,o.visible.min)),o.visible.max=Math.max(o.visible.min,Math.min(6,o.visible.max));for(var d="",p="",m=0;m<=o.visible.max;m++)d+=" "+a.menu+"_columns-"+m,p+=" "+a.panel+"_columns-"+m;d.length&&(d=d.slice(1),p=p.slice(1));var r=p+" "+a.panel+"_opened "+a.panel+"_opened-parent "+a.panel+"_highest",c=function(n){var i=this.$pnls.children("."+a.panel+"_opened-parent").length;n.hasClass(a.panel+"_opened-parent")||i++,i=Math.min(o.visible.max,Math.max(o.visible.min,i)),this.$menu.removeClass(d).addClass(a.menu+"_columns-"+i),this.$pnls.children("."+a.panel).removeClass(p).filter("."+a.panel+"_opened-parent").add(n).slice(-o.visible.max).each(function(n){e(this).addClass(a.panel+"_columns-"+n)})};this.bind("openPanel:before",l),this.bind("openPanel:start",c)}},add:function(){a=e[n]._c,s=e[n]._d,l=e[n]._e},clickAnchor:function(e,n){}},e[n].defaults[i]={add:!1,visible:{min:1,max:3}};var a,s,l,t}(jQuery);
/*
 * jQuery mmenu counters add-on
 * mmenu.frebsite.nl
 */
!function(t){var e="mmenu",n="counters";t[e].addons[n]={setup:function(){var s=this,d=this.opts[n];this.conf[n];if(c=t[e].glbl,"boolean"==typeof d&&(d={add:d,update:d}),"object"!=typeof d&&(d={}),d=this.opts[n]=t.extend(!0,{},t[e].defaults[n],d),this.bind("initListview:after",function(t){var e=this.conf.classNames[n].counter;this.__refactorClass(t.find("."+e),e,i.counter)}),d.add&&this.bind("initListview:after",function(e){var n;switch(d.addTo){case"panels":n=e;break;default:n=e.filter(d.addTo)}n.each(function(){var e=t(this).data(a.parent);e&&(e.children("."+i.counter).length||e.prepend(t('<em class="'+i.counter+'" />')))})}),d.update){var r=function(e){e=e||this.$pnls.children("."+i.panel),e.each(function(){var e=t(this),n=e.data(a.parent);if(n){var c=n.children("em."+i.counter);c.length&&(e=e.children("."+i.listview),e.length&&c.html(s.__filterListItems(e.children()).length))}})};this.bind("initListview:after",r),this.bind("updateListview",r)}},add:function(){i=t[e]._c,a=t[e]._d,s=t[e]._e,i.add("counter")},clickAnchor:function(t,e){}},t[e].defaults[n]={add:!1,addTo:"panels",count:!1},t[e].configuration.classNames[n]={counter:"Counter"};var i,a,s,c}(jQuery);
/*
 * jQuery mmenu dividers add-on
 * mmenu.frebsite.nl
 */
!function(i){var e="mmenu",t="dividers";i[e].addons[t]={setup:function(){var s=this,a=this.opts[t];this.conf[t];if(l=i[e].glbl,"boolean"==typeof a&&(a={add:a,fixed:a}),"object"!=typeof a&&(a={}),a=this.opts[t]=i.extend(!0,{},i[e].defaults[t],a),a.type&&this.bind("initMenu:after",function(){this.$menu.addClass(n.menu+"_"+t+"-"+a.type)}),a.add&&this.bind("initListview:after",function(e){var t;switch(a.addTo){case"panels":t=e;break;default:t=e.filter(a.addTo)}t.length&&(t.children("."+n.listitem+"_divider").remove(),t.find("."+n.listview).each(function(){var e="";s.__filterListItems(i(this).children()).each(function(){var t=i.trim(i(this).children("a, span").text()).slice(0,1).toLowerCase();t!=e&&t.length&&(e=t,i('<li class="'+n.listitem+" "+n.listitem+'_divider">'+t+"</li>").insertBefore(this))})}))}),a.fixed){this.bind("initPanels:after",function(){"undefined"==typeof this.$fixeddivider&&(this.$fixeddivider=i('<ul class="'+n.listview+" "+n.listview+'_fixeddivider"><li class="'+n.listitem+" "+n.listitem+'_divider"></li></ul>').appendTo(this.$pnls).children())});var o=function(e){if(e=e||this.$pnls.children("."+n.panel+"_opened"),!e.is(":hidden")){var t=e.find("."+n.listitem+"_divider").not("."+n.hidden),s=e.scrollTop()||0,d="";t.each(function(){i(this).position().top+s<s+1&&(d=i(this).text())}),this.$fixeddivider.text(d),this.$pnls[d.length?"addClass":"removeClass"](n.panel+"_dividers")}};this.bind("open:start",o),this.bind("openPanel:start",o),this.bind("updateListview",o),this.bind("initPanel:after",function(i){i.off(d.scroll+"-"+t+" "+d.touchmove+"-"+t).on(d.scroll+"-"+t+" "+d.touchmove+"-"+t,function(e){i.hasClass(n.panel+"_opened")&&o.call(s,i)})})}},add:function(){n=i[e]._c,s=i[e]._d,d=i[e]._e,d.add("scroll")},clickAnchor:function(i,e){}},i[e].defaults[t]={add:!1,addTo:"panels",fixed:!1,type:null};var n,s,d,l}(jQuery);
/*
 * jQuery mmenu drag add-on
 * mmenu.frebsite.nl
 */
!function(e){function n(e,n,t){return e<n&&(e=n),e>t&&(e=t),e}function t(t,o,i){var r,p,d,f=this,u={events:"panleft panright",typeLower:"x",typeUpper:"X",open_dir:"right",close_dir:"left",negative:!1},c="width",l=u.open_dir,m=function(e){e<=t.maxStartPos&&(g=1)},h=function(){return e("."+s.slideout)},g=0,_=0,v=0,b=this.opts.extensions.all,w="undefined"==typeof b?"left":b.indexOf(s.menu+"_position-right")>-1?"right":b.indexOf(s.menu+"_position-top")>-1?"top":b.indexOf(s.menu+"_position-bottom")>-1?"bottom":"left",y="undefined"==typeof b?"back":b.indexOf(s.menu+"_position-top")>-1||b.indexOf(s.menu+"_position-bottom")>-1||b.indexOf(s.menu+"_position-front")>-1?"front":"back";switch(w){case"top":case"bottom":u.events="panup pandown",u.typeLower="y",u.typeUpper="Y",c="height"}switch(w){case"right":case"bottom":u.negative=!0,m=function(e){e>=i.$wndw[c]()-t.maxStartPos&&(g=1)}}switch(w){case"right":u.open_dir="left",u.close_dir="right";break;case"top":u.open_dir="down",u.close_dir="up";break;case"bottom":u.open_dir="up",u.close_dir="down"}switch(y){case"front":h=function(){return f.$menu}}var x,O=this.__valueOrFn(this.$menu,t.node,i.$page);"string"==typeof O&&(O=e(O));var $=new Hammer(O[0],this.opts[a].vendors.hammer);$.on("panstart",function(e){m(e.center[u.typeLower]),x=h(),l=u.open_dir}),$.on(u.events+" panend",function(e){g>0&&e.preventDefault()}),$.on(u.events,function(e){if(r=e["delta"+u.typeUpper],u.negative&&(r=-r),r!=_&&(l=r>=_?u.open_dir:u.close_dir),_=r,_>t.threshold&&1==g){if(i.$html.hasClass(s.wrapper+"_opened"))return;g=2,f._openSetup(),f.trigger("open:start"),i.$html.addClass(s.dragging),v=n(i.$wndw[c]()*o[c].perc,o[c].min,o[c].max)}2==g&&(p=n(_,10,v)-("front"==y?v:0),u.negative&&(p=-p),d="translate"+u.typeUpper+"("+p+"px )",x.css({"-webkit-transform":"-webkit-"+d,transform:d}))}),$.on("panend",function(e){2==g&&(i.$html.removeClass(s.dragging),x.css("transform",""),f[l==u.open_dir?"_openFinish":"close"]()),g=0})}function o(e,n,t,o){var i=this,p=e.data(r.parent);if(p){p=p.closest("."+s.panel);var d=new Hammer(e[0],i.opts[a].vendors.hammer),f=null;d.on("panright",function(e){f||(i.openPanel(p),f=setTimeout(function(){clearTimeout(f),f=null},i.conf.openingInterval+i.conf.transitionDuration))})}}var i="mmenu",a="drag";e[i].addons[a]={setup:function(){if(this.opts.offCanvas){var n=this.opts[a],s=this.conf[a];d=e[i].glbl,"boolean"==typeof n&&(n={menu:n,panels:n}),"object"!=typeof n&&(n={}),"boolean"==typeof n.menu&&(n.menu={open:n.menu}),"object"!=typeof n.menu&&(n.menu={}),"boolean"==typeof n.panels&&(n.panels={close:n.panels}),"object"!=typeof n.panels&&(n.panels={}),n=this.opts[a]=e.extend(!0,{},e[i].defaults[a],n),n.menu.open&&this.bind("setPage:after",function(){t.call(this,n.menu,s.menu,d)}),n.panels.close&&this.bind("initPanel:after",function(e){o.call(this,e,n.panels,s.panels,d)})}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?(e[i].addons[a].add=function(){},void(e[i].addons[a].setup=function(){})):(s=e[i]._c,r=e[i]._d,p=e[i]._e,void s.add("dragging"))},clickAnchor:function(e,n){}},e[i].defaults[a]={menu:{open:!1,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},e[i].configuration[a]={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},panels:{}};var s,r,p,d}(jQuery);
/*
 * jQuery mmenu dropdown add-on
 * mmenu.frebsite.nl
 */
!function(t){var o="mmenu",e="dropdown";t[o].addons[e]={setup:function(){if(this.opts.offCanvas){var r=this,f=this.opts[e],p=this.conf[e];if(a=t[o].glbl,"boolean"==typeof f&&f&&(f={drop:f}),"object"!=typeof f&&(f={}),"string"==typeof f.position&&(f.position={of:f.position}),f=this.opts[e]=t.extend(!0,{},t[o].defaults[e],f),f.drop){var l;this.bind("initMenu:after",function(){if(this.$menu.addClass(i.menu+"_"+e),"string"!=typeof f.position.of){var o=this._getOriginalMenuId();o&&o.length&&(f.position.of='[href="#'+o+'"]')}"string"==typeof f.position.of&&(l=t(f.position.of),f.event=f.event.split(" "),1==f.event.length&&(f.event[1]=f.event[0]),"hover"==f.event[0]&&l.on(s.mouseenter+"-"+e,function(){r.open()}),"hover"==f.event[1]&&this.$menu.on(s.mouseleave+"-"+e,function(){r.close()}))}),this.bind("open:start",function(){this.$menu.data(n.style,this.$menu.attr("style")||""),a.$html.addClass(i.wrapper+"_dropdown")}),this.bind("close:finish",function(){this.$menu.attr("style",this.$menu.data(n.style)),a.$html.removeClass(i.wrapper+"_dropdown")});var h=function(t,o){var e=o[0],n=o[1],s="x"==t?"scrollLeft":"scrollTop",r="x"==t?"outerWidth":"outerHeight",h="x"==t?"left":"top",u="x"==t?"right":"bottom",d="x"==t?"width":"height",c="x"==t?"maxWidth":"maxHeight",m=null,v=a.$wndw[s](),x=l.offset()[h]-=v,b=x+l[r](),w=a.$wndw[d](),g=p.offset.button[t]+p.offset.viewport[t];if(f.position[t])switch(f.position[t]){case"left":case"bottom":m="after";break;case"right":case"top":m="before"}null===m&&(m=x+(b-x)/2<w/2?"after":"before");var $,y;return"after"==m?($="x"==t?x:b,y=w-($+g),e[h]=$+p.offset.button[t],e[u]="auto",f.tip&&n.push(i.menu+"_tip-"+("x"==t?"left":"top"))):($="x"==t?b:x,y=$-g,e[u]="calc( 100% - "+($-p.offset.button[t])+"px )",e[h]="auto",f.tip&&n.push(i.menu+"_tip-"+("x"==t?"right":"bottom"))),e[c]=Math.min(p[d].max,y),[e,n]},u=function(t){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(n.style));var o=[{},[]];o=h.call(this,"y",o),o=h.call(this,"x",o),this.$menu.css(o[0]),f.tip&&this.$menu.removeClass(i.tipleft+" "+i.tipright+" "+i.tiptop+" "+i.tipbottom).addClass(o[1].join(" "))}};this.bind("open:start",u),a.$wndw.on(s.resize+"-"+e,function(t){u.call(r)}),this.opts.offCanvas.blockUI||a.$wndw.on(s.scroll+"-"+e,function(t){u.call(r)})}}},add:function(){i=t[o]._c,n=t[o]._d,s=t[o]._e,i.add("dropdown"),s.add("mouseenter mouseleave resize scroll")},clickAnchor:function(t,o){}},t[o].defaults[e]={drop:!1,event:"click",position:{},tip:!0},t[o].configuration[e]={offset:{button:{x:-5,y:5},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var i,n,s,a}(jQuery);
/*
 * jQuery mmenu fixedElements add-on
 * mmenu.frebsite.nl
 */
!function(s){var t="mmenu",i="fixedElements";s[t].addons[i]={setup:function(){if(this.opts.offCanvas){var n=(this.opts[i],this.conf[i]);c=s[t].glbl;var o=function(t){var o=this.conf.classNames[i].fixed,f=t.find("."+o);this.__refactorClass(f,o,e.slideout),f[n.elemInsertMethod](n.elemInsertSelector);var a=this.conf.classNames[i].sticky,r=t.find("."+a);this.__refactorClass(r,a,e.sticky),r=t.find("."+e.sticky),r.length&&(this.bind("open:start",function(){if("hidden"==c.$html.css("overflow")){var t=c.$wndw.scrollTop()+n.sticky.offset;r.each(function(){s(this).css("top",parseInt(s(this).css("top"),10)+t)})}}),this.bind("close:finish",function(){r.css("top","")}))};this.bind("setPage:after",o)}},add:function(){e=s[t]._c,n=s[t]._d,o=s[t]._e,e.add("sticky")},clickAnchor:function(s,t){}},s[t].configuration[i]={sticky:{offset:0},elemInsertMethod:"appendTo",elemInsertSelector:"body"},s[t].configuration.classNames[i]={fixed:"Fixed",sticky:"Sticky"};var e,n,o,c}(jQuery);
/*
 * jQuery mmenu iconbar add-on
 * mmenu.frebsite.nl
 */
!function(a){var t="mmenu",n="iconbar";a[t].addons[n]={setup:function(){function s(a){f.removeClass(e.iconbar+"__tab_selected");var t=f.filter('[href="#'+a.attr("id")+'"]');if(t.length)t.addClass(e.iconbar+"__tab_selected");else{var n=a.data(i.parent);n&&n.length&&s(n.closest("."+e.panel))}}var d=this,c=this.opts[n];this.conf[n];if(r=a[t].glbl,c instanceof Array&&(c={add:!0,top:c}),c.add){var l=null;if(a.each(["top","bottom"],function(t,n){var i=c[n];i instanceof Array||(i=[i]);for(var o=a('<div class="'+e.iconbar+"__"+n+'" />'),r=0,s=i.length;r<s;r++)o.append(i[r]);o.children().length&&(l||(l=a('<div class="'+e.iconbar+'" />')),l.append(o))}),l&&(this.bind("initMenu:after",function(){this.$menu.addClass(e.menu+"_iconbar-"+c.size).prepend(l)}),"tabs"==c.type)){l.addClass(e.iconbar+"_tabs");var f=l.find("a");f.on(o.click+"-"+n,function(t){var n=a(this);if(n.hasClass(e.iconbar+"__tab_selected"))return void t.stopImmediatePropagation();try{var i=a(n.attr("href"));i.hasClass(e.panel)&&(t.preventDefault(),t.stopImmediatePropagation(),d.__openPanelWoAnimation(i))}catch(o){}}),this.bind("openPanel:start",s)}}},add:function(){e=a[t]._c,i=a[t]._d,o=a[t]._e,e.add(n)},clickAnchor:function(a,t){}},a[t].defaults[n]={add:!1,size:40,top:[],bottom:[]},a[t].configuration[n]={};var e,i,o,r}(jQuery);
/*
 * jQuery mmenu iconPanels add-on
 * mmenu.frebsite.nl
 */
!function(e){var i="mmenu",n="iconPanels";e[i].addons[n]={setup:function(){var a=this,l=this.opts[n],d=(this.conf[n],!1);if(s=e[i].glbl,"boolean"==typeof l&&(l={add:l}),"number"!=typeof l&&"string"!=typeof l||(l={add:!0,visible:l}),"object"!=typeof l&&(l={}),"first"==l.visible&&(d=!0,l.visible=1),l=this.opts[n]=e.extend(!0,{},e[i].defaults[n],l),l.visible=Math.min(3,Math.max(1,l.visible)),l.visible++,l.add){for(var r="",o=0;o<=l.visible;o++)r+=" "+t.panel+"_iconpanel-"+o;r.length&&(r=r.slice(1));var c=function(i){if(!i.parent("."+t.listitem+"_vertical").length){var n=a.$pnls.children("."+t.panel).removeClass(r);d&&n.removeClass(t.panel+"_iconpanel-first").first().addClass(t.panel+"_iconpanel-first"),n.filter("."+t.panel+"_opened-parent").removeClass(t.hidden).not(function(){return e(this).parent("."+t.listitem+"_vertical").length}).add(i).slice(-l.visible).each(function(i){e(this).addClass(t.panel+"_iconpanel-"+i)})}};this.bind("initMenu:after",function(){var e=[t.menu+"_iconpanel-"+l.size];l.hideNavbar&&e.push(t.menu+"_hidenavbar"),l.hideDivider&&e.push(t.menu+"_hidedivider"),this.$menu.addClass(e.join(" "))}),this.bind("openPanel:start",c),this.bind("initPanels:after",function(e){c.call(a,a.$pnls.children("."+t.panel+"_opened"))}),this.bind("initListview:after",function(e){!l.blockPanel||e.parent("."+t.listitem+"_vertical").length||e.children("."+t.panel+"__blocker").length||e.prepend('<a href="#'+e.closest("."+t.panel).attr("id")+'" class="'+t.panel+'__blocker" />')})}},add:function(){t=e[i]._c,a=e[i]._d,l=e[i]._e},clickAnchor:function(e,i){}},e[i].defaults[n]={add:!1,blockPanel:!0,hideDivider:!1,hideNavbar:!0,size:40,visible:3};var t,a,l,s}(jQuery);
/*
 * jQuery mmenu keyboardNavigation add-on
 * mmenu.frebsite.nl
 */
!function(n){function e(e,t){e=e||this.$pnls.children("."+i.panel+"_opened");var a=n(),s=this.$menu.children("."+i.mm("navbars_top")+", ."+i.mm("navbars_bottom")).children("."+i.navbar);s.find(r).filter(":focus").length||("default"==t&&(a=e.children("."+i.listview).find("a[href]").not("."+i.hidden),a.length||(a=e.find(r).not("."+i.hidden)),a.length||(a=s.find(r).not("."+i.hidden))),a.length||(a=this.$menu.children("."+i.tabstart)),a.first().focus())}var t="mmenu",a="keyboardNavigation";n[t].addons[a]={setup:function(){if(!n[t].support.touch){var s=this.opts[a];this.conf[a];if(d=n[t].glbl,"boolean"!=typeof s&&"string"!=typeof s||(s={enable:s}),"object"!=typeof s&&(s={}),s=this.opts[a]=n.extend(!0,{},n[t].defaults[a],s),s.enable){var o=n('<button class="'+i.tabstart+'" tabindex="0" type="button" />'),r=n('<button class="'+i.tabend+'" tabindex="0" type="button" />');this.bind("initMenu:after",function(){s.enhance&&this.$menu.addClass(i.menu+"_keyboardfocus"),this["_initWindow_"+a](s.enhance)}),this.bind("initOpened:before",function(){this.$menu.prepend(o).append(r).children("."+i.mm("navbars-top")+", ."+i.mm("navbars-bottom")).children("."+i.navbar).children("a."+i.title).attr("tabindex",-1)}),this.bind("open:finish",function(){e.call(this,null,s.enable)}),this.bind("openPanel:finish",function(n){e.call(this,n,s.enable)}),this.bind("initOpened:after:sr-aria",function(){var n=this.$menu.children("."+i.tabstart+", ."+i.tabend);this.__sr_aria(n,"hidden",!0),this.__sr_role(n,"presentation")})}}},add:function(){i=n[t]._c,s=n[t]._d,o=n[t]._e,i.add("tabstart tabend"),o.add("focusin keydown")},clickAnchor:function(n,e){}},n[t].defaults[a]={enable:!1,enhance:!1},n[t].configuration[a]={},n[t].prototype["_initWindow_"+a]=function(e){d.$wndw.off(o.keydown+"-offCanvas"),d.$wndw.off(o.focusin+"-"+a).on(o.focusin+"-"+a,function(e){if(d.$html.hasClass(i.wrapper+"_opened")){var t=n(e.target);t.is("."+i.tabend)&&t.parent().find("."+i.tabstart).focus()}}),d.$wndw.off(o.keydown+"-"+a).on(o.keydown+"-"+a,function(e){var t=n(e.target),a=t.closest("."+i.menu);if(a.length){a.data("mmenu");if(t.is("input, textarea"));else switch(e.keyCode){case 13:(t.is(".mm-toggle")||t.is(".mm-check"))&&t.trigger(o.click);break;case 32:case 37:case 38:case 39:case 40:e.preventDefault()}}}),e&&d.$wndw.off(o.keydown+"-"+a).on(o.keydown+"-"+a,function(e){var t=n(e.target),a=t.closest("."+i.menu);if(a.length){var o=a.data("mmenu");if(t.is("input"))switch(e.keyCode){case 27:t.val("")}else switch(e.keyCode){case 8:var d=a.find("."+i.panel+"_opened").data(s.parent);d&&d.length&&o.openPanel(d.closest("."+i.panel));break;case 27:a.hasClass(i.menu+"_offcanvas")&&o.close()}}})};var i,s,o,d,r="input, select, textarea, button, label, a[href]"}(jQuery);
/*
 * jQuery mmenu lazySubmenus add-on
 * mmenu.frebsite.nl
 */
!function(n){var e="mmenu",i="lazySubmenus";n[e].addons[i]={setup:function(){var t=this.opts[i];this.conf[i];a=n[e].glbl,"boolean"==typeof t&&(t={load:t}),"object"!=typeof t&&(t={}),t=this.opts[i]=n.extend(!0,{},n[e].defaults[i],t),t.load&&(this.bind("initMenu:after",function(){this.$pnls.find("li").children(this.conf.panelNodetype).not("."+l.inset).not("."+l.nolistview).not("."+l.nopanel).addClass(l.panel+"_lazysubmenu "+l.nolistview+" "+l.nopanel)}),this.bind("initPanels:before",function(n){n=n||this.$pnls.children(this.conf.panelNodetype),this.__findAddBack(n,"."+l.panel+"_lazysubmenu").not("."+l.panel+"_lazysubmenu ."+l.panel+"_lazysubmenu").removeClass(l.panel+"_lazysubmenu "+l.nolistview+" "+l.nopanel)}),this.bind("initOpened:before",function(){var n=this.$pnls.find("."+this.conf.classNames.selected).parents("."+l.panel+"_lazysubmenu");n.length&&(n.removeClass(l.panel+"_lazysubmenu "+l.nolistview+" "+l.nopanel),this.initPanels(n.last()))}),this.bind("openPanel:before",function(n){var e=this.__findAddBack(n,"."+l.panel+"_lazysubmenu").not("."+l.panel+"_lazysubmenu ."+l.panel+"_lazysubmenu");e.length&&this.initPanels(e)}))},add:function(){l=n[e]._c,t=n[e]._d,s=n[e]._e},clickAnchor:function(n,e){}},n[e].defaults[i]={load:!1},n[e].configuration[i]={};var l,t,s,a}(jQuery);
/*
 * jQuery mmenu navbar add-on
 * mmenu.frebsite.nl
 */
!function(n){var t="mmenu",a="navbars";n[t].addons[a]={setup:function(){var o=this,r=this.opts[a],i=this.conf[a];if(s=n[t].glbl,"undefined"!=typeof r){r instanceof Array||(r=[r]);var c={},d={};r.length&&(n.each(r,function(s){var f=r[s];"boolean"==typeof f&&f&&(f={}),"object"!=typeof f&&(f={}),"undefined"==typeof f.content&&(f.content=["prev","title"]),f.content instanceof Array||(f.content=[f.content]),f=n.extend(!0,{},o.opts.navbar,f);var l=n('<div class="'+e.navbar+'" />'),u=f.height;"number"!=typeof u?u=1:(u=Math.min(4,Math.max(1,u)),u>1&&l.addClass(e.navbar+"_size-"+u));var v=f.position;switch(v){case"bottom":break;default:v="top"}c[v]||(c[v]=0),c[v]+=u,d[v]||(d[v]=n('<div class="'+e.navbars+"_"+v+'" />')),d[v].append(l);for(var p=0,b=f.content.length;p<b;p++){var h=n[t].addons[a][f.content[p]]||null;h?h.call(o,l,f,i):(h=f.content[p],h instanceof n||(h=n(f.content[p])),l.append(h))}var m=n[t].addons[a][f.type]||null;m&&m.call(o,l,f,i),l.children("."+e.btn).length&&l.addClass(e.navbar+"_has-btns")}),this.bind("initMenu:after",function(){for(var n in c)this.$menu.addClass(e.menu+"_navbar_"+n+"-"+c[n]),this.$menu["bottom"==n?"append":"prepend"](d[n])}))}},add:function(){e=n[t]._c,o=n[t]._d,r=n[t]._e,e.add(a)},clickAnchor:function(n,t){}},n[t].configuration[a]={breadcrumbs:{separator:"/",removeFirst:!1}},n[t].configuration.classNames[a]={};var e,o,r,s}(jQuery);
/*
 * jQuery mmenu pageScroll add-on
 * mmenu.frebsite.nl
 */
!function(t){function e(t){a&&a.length&&a.is(":visible")&&o.$html.add(o.$body).animate({scrollTop:a.offset().top+t}),a=!1}function i(t){try{return!("#"==t||"#"!=t.slice(0,1)||!o.$page.find(t).length)}catch(e){return!1}}var s="mmenu",n="pageScroll";t[s].addons[n]={setup:function(){var r=this,a=this.opts[n],c=this.conf[n];if(o=t[s].glbl,"boolean"==typeof a&&(a={scroll:a}),a=this.opts[n]=t.extend(!0,{},t[s].defaults[n],a),a.scroll&&this.bind("close:finish",function(){e(c.scrollOffset)}),a.update){var r=this,d=[],h=[];r.bind("initListview:after",function(e){r.__filterListItemAnchors(e.find("."+l.listview).children("li")).each(function(){var e=t(this).attr("href");i(e)&&d.push(e)}),h=d.reverse()});var p=-1;o.$wndw.on(f.scroll+"-"+n,function(e){for(var i=o.$wndw.scrollTop(),s=0;s<h.length;s++)if(t(h[s]).offset().top<i+c.updateOffset){p!==s&&(p=s,r.setSelected(r.__filterListItemAnchors(r.$pnls.children("."+l.panel+"_opened").find("."+l.listview).children("li")).filter('[href="'+h[s]+'"]').parent()));break}})}},add:function(){l=t[s]._c,r=t[s]._d,f=t[s]._e},clickAnchor:function(s,r,f){if(a=!1,r&&f&&this.opts.offCanvas&&this.opts[n].scroll&&o.$page&&o.$page.length){var c=s.attr("href");if(i(c)){if(a=t(c),!this.$menu.hasClass(l.mm("sidebar-expanded"))||!o.$html.is('[class*="'+l.mm("sidebar-expanded")+'"]'))return{close:!0};e(this.conf[n].scrollOffset)}}}},t[s].defaults[n]={scroll:!1,update:!1},t[s].configuration[n]={scrollOffset:0,updateOffset:50};var l,r,f,o,a=!1}(jQuery);
/*
 * jQuery mmenu RTL add-on
 * mmenu.frebsite.nl
 */
!function(t){var e="mmenu",n="rtl";t[e].addons[n]={setup:function(){var u=this.opts[n];this.conf[n];i=t[e].glbl,"object"!=typeof u&&(u={use:u}),u=this.opts[n]=t.extend(!0,{},t[e].defaults[n],u),"boolean"!=typeof u.use&&(u.use="rtl"==(i.$html.attr("dir")||"").toLowerCase()),u.use&&this.bind("initMenu:after",function(){this.$menu.addClass(s.menu+"_rtl")})},add:function(){s=t[e]._c,u=t[e]._d,o=t[e]._e},clickAnchor:function(t,e){}},t[e].defaults[n]={use:"detect"};var s,u,o,i}(jQuery);
/*
 * jQuery mmenu searchfield add-on
 * mmenu.frebsite.nl
 */
!function(e){function n(e,n){if(n)for(var s in n)e.attr(s,n[s])}function s(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var a="mmenu",t="searchfield";e[a].addons[t]={setup:function(){var n=this,s=this.opts[t],i=this.conf[t];r=e[a].glbl,"boolean"==typeof s&&(s={add:s}),"object"!=typeof s&&(s={}),"boolean"==typeof s.panel&&(s.panel={add:s.panel}),"object"!=typeof s.panel&&(s.panel={}),s.add&&("panel"==s.addTo&&(s.panel.add=!0),s.panel.add&&(s.showSubPanels=!1,s.panel.splash&&(s.cancel=!0)),s=this.opts[t]=e.extend(!0,{},e[a].defaults[t],s),i=this.conf[t]=e.extend(!0,{},e[a].configuration[t],i),this.bind("close:start",function(){this.$menu.find("."+l.searchfield).children("input").blur()}),this.bind("initPanels:after",function(a){var t=e();s.panel.add&&(t=this._initSearchPanel(a));var l;switch(s.addTo){case"panels":l=a;break;case"panel":l=t;break;default:l=this.$menu.find(s.addTo)}if(l.each(function(){var a=n._initSearchfield(e(this));s.search&&a.length&&n._initSearching(a)}),s.noResults){var i=s.panel.add?t:a;i.each(function(){n._initNoResultsMsg(e(this))})}}))},add:function(){l=e[a]._c,i=e[a]._d,d=e[a]._e,l.add("searchfield"),i.add("searchfield"),d.add("input focus blur")},clickAnchor:function(e,n){if(e.hasClass(l.searchfield+"__btn")){if(e.hasClass(l.btn+"_clear")){var s=e.closest("."+l.searchfield).find("input");return s.val(""),this.search(s),!0}if(e.hasClass(l.btn+"_next"))return e.closest("."+l.searchfield).submit(),!0}}},e[a].defaults[t]={add:!1,addTo:"panels",noResults:"No results found.",placeholder:"Search",panel:{add:!1,dividers:!0,fx:"none",id:null,splash:null,title:"Search"},search:!0,showTextItems:!1,showSubPanels:!0},e[a].configuration[t]={clear:!1,form:!1,input:!1,submit:!1};var l,i,d,r;e[a].prototype._initSearchPanel=function(n){var s=this.opts[t];this.conf[t];if(this.$pnls.children("."+l.panel+"_search").length)return e();var a=e('<div class="'+l.panel+'_search " />').append("<ul />").appendTo(this.$pnls);switch(s.panel.id&&a.attr("id",s.panel.id),s.panel.title&&a.attr("data-mm-title",s.panel.title),s.panel.fx){case!1:break;case"none":a.addClass(l.panel+"_noanimation");break;default:a.addClass(l.panel+"_fx-"+s.panel.fx)}return s.panel.splash&&a.append('<div class="'+l.panel+'__searchsplash">'+s.panel.splash+"</div>"),this._initPanels(a),a},e[a].prototype._initSearchfield=function(s){var i=this.opts[t],d=this.conf[t];if(s.parent("."+l.listitem+"_vertical").length)return e();if(s.find("."+l.searchfield).length)return e();var r=e("<"+(d.form?"form":"div")+' class="'+l.searchfield+'" />'),h=e('<div class="'+l.searchfield+'__input" />'),c=e('<input placeholder="'+e[a].i18n(i.placeholder)+'" type="text" autocomplete="off" />');return h.append(c).appendTo(r),s.hasClass(l.searchfield)?s.replaceWith(r):(s.prepend(r),s.hasClass(l.panel)&&s.addClass(l.panel+"_has-searchfield")),n(c,d.input),d.clear&&e('<a class="'+l.btn+" "+l.btn+"_clear "+l.searchfield+'__btn" href="#" />').appendTo(h),n(r,d.form),d.form&&d.submit&&!d.clear&&e('<a class="'+l.btn+" "+l.btn+"_next "+l.searchfield+'__btn" href="#" />').appendTo(h),i.cancel&&e('<a href="#" class="'+l.searchfield+'__cancel">'+e[a].i18n("cancel")+"</a>").appendTo(r),r},e[a].prototype._initSearching=function(n){var a=this,r=this.opts[t],h=(this.conf[t],{});n.closest("."+l.panel+"_search").length?(h.$pnls=this.$pnls.find("."+l.panel),h.$nrsp=n.closest("."+l.panel)):n.closest("."+l.panel).length?(h.$pnls=n.closest("."+l.panel),h.$nrsp=h.$pnls):(h.$pnls=this.$pnls.find("."+l.panel),h.$nrsp=this.$menu),r.panel.add&&(h.$pnls=h.$pnls.not("."+l.panel+"_search"));var c=n.find("input"),p=n.find("."+l.searchfield+"__cancel"),o=this.$pnls.children("."+l.panel+"_search"),f=h.$pnls.find("."+l.listitem);h.$itms=f.not("."+l.listitem+"_divider"),h.$dvdr=f.filter("."+l.listitem+"_divider"),r.panel.add&&r.panel.splash&&c.off(d.focus+"-"+t+"-splash").on(d.focus+"-"+t+"-splash",function(e){a.openPanel(o)}),r.cancel&&(c.off(d.focus+"-"+t+"-cancel").on(d.focus+"-"+t+"-cancel",function(e){p.addClass(l.searchfield+"__cancel-active")}),p.off(d.click+"-"+t+"-splash").on(d.click+"-"+t+"-splash",function(n){n.preventDefault(),e(this).removeClass(l.searchfield+"__cancel-active"),o.hasClass(l.panel+"_opened")&&a.openPanel(a.$pnls.children("."+l.panel+"_opened-parent").last())})),r.panel.add&&"panel"==r.addTo&&this.bind("openPanel:finish",function(e){e[0]===o[0]&&c.focus()}),c.data(i.searchfield,h).off(d.input+"-"+t).on(d.input+"-"+t,function(e){s(e.keyCode)||a.search(c)}),this.search(c)},e[a].prototype._initNoResultsMsg=function(n){var s=this.opts[t];this.conf[t];if(n.closest("."+l.panel).length||(n=this.$pnls.children("."+l.panel).first()),!n.children("."+l.panel+"__noresultsmsg").length){var i=n.children("."+l.listview).first(),d=e('<div class="'+l.panel+"__noresultsmsg "+l.hidden+'" />').append(e[a].i18n(s.noResults));i.length?d.insertAfter(i):d.prependTo(n)}},e[a].prototype.search=function(n,s){var a=this,d=this.opts[t];this.conf[t];n=n||this.$menu.find("."+l.searchfield).chidren("input").first(),s=s||n.val(),s=s.toLowerCase().trim();var r="a",h="a, span",c=n.data(i.searchfield),p=n.closest("."+l.searchfield),o=p.find("."+l.btn),f=this.$pnls.children("."+l.panel+"_search"),u=c.$pnls,_=c.$itms,v=c.$dvdr,m=c.$nrsp;if(_.removeClass(l.listitem+"_nosubitems").find("."+l.btn+"_fullwidth-search").removeClass(l.btn+"_fullwidth-search "+l.btn+"_fullwidth"),f.children("."+l.listview).empty(),u.scrollTop(0),s.length){if(_.add(v).addClass(l.hidden),_.each(function(){var n=e(this),a=r;(d.showTextItems||d.showSubPanels&&n.find("."+l.btn+"_next"))&&(a=h),n.children(a).not("."+l.btn+"_next").text().toLowerCase().indexOf(s)>-1&&n.removeClass(l.hidden)}),d.panel.add){var b=e();u.each(function(){var n=a.__filterListItems(e(this).find("."+l.listitem)).clone(!0);n.length&&(d.panel.dividers&&(b=b.add('<li class="'+l.listitem+" "+l.listitem+'_divider">'+e(this).find("."+l.navbar+"__title").text()+"</li>")),b=b.add(n))}),b.find("."+l.mm("toggle")).remove().end().find("."+l.mm("check")).remove().end().find("."+l.btn).remove(),f.children("."+l.listview).append(b),this.openPanel(f)}else d.showSubPanels&&u.each(function(n){var s=e(this);a.__filterListItems(s.find("."+l.listitem)).each(function(){var n=e(this),s=n.data(i.child);s&&s.find("."+l.listview).children().removeClass(l.hidden)})}),e(u.get().reverse()).each(function(s){var t=e(this),d=t.data(i.parent);d&&(a.__filterListItems(t.find("."+l.listitem)).length?d.hasClass(l.hidden)&&d.removeClass(l.hidden).children("."+l.btn+"_next").not("."+l.btn+"_fullwidth").addClass(l.btn+"_fullwidth").addClass(l.btn+"_fullwidth-search"):n.closest("."+l.panel).length||((t.hasClass(l.panel+"_opened")||t.hasClass(l.panel+"_opened-parent"))&&setTimeout(function(){a.openPanel(d.closest("."+l.panel))},(s+1)*(1.5*a.conf.openingInterval)),d.addClass(l.listitem+"_nosubitems")))}),this.__filterListItems(u.find("."+l.listitem)).each(function(){e(this).prevAll("."+l.listitem+"_divider").first().removeClass(l.hidden)});o.removeClass(l.hidden),m.find("."+l.panel+"__noresultsmsg")[_.not("."+l.hidden).length?"addClass":"removeClass"](l.hidden),d.panel.add&&(d.panel.splash&&f.find("."+l.panel+"__searchsplash").addClass(l.hidden),_.add(v).removeClass(l.hidden))}else _.add(v).removeClass(l.hidden),o.addClass(l.hidden),m.find("."+l.panel+"__noresultsmsg").addClass(l.hidden),d.panel.add&&(d.panel.splash?f.find("."+l.panel+"__searchsplash").removeClass(l.hidden):n.closest("."+l.panel+"_search").length||this.openPanel(this.$pnls.children("."+l.panel+"_opened-parent").last()));this.trigger("updateListview")}}(jQuery);
/*
 * jQuery mmenu sectionIndexer add-on
 * mmenu.frebsite.nl
 */
!function(e){var a="mmenu",n="sectionIndexer";e[a].addons[n]={setup:function(){var r=this,d=this.opts[n];this.conf[n];s=e[a].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),d=this.opts[n]=e.extend(!0,{},e[a].defaults[n],d);var h=null;this.bind("initPanels:after",function(a){if(d.add){var s;switch(d.addTo){case"panels":s=a;break;default:s=e(d.addTo,this.$menu).filter("."+i.panel)}s.find("."+i.listitem+"_divider").closest("."+i.panel).addClass(i.panel+"_has-sectionindexer"),h||(h=e('<div class="'+i.sectionindexer+'" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),h.on(t.mouseover+"-"+n+" "+t.touchstart+"-"+n,"a",function(a){var n=e(a.target).attr("href").slice(1),t=r.$pnls.children("."+i.panel+"_opened"),s=t.find("."+i.listview),d=-1,h=t.scrollTop();t.scrollTop(0),s.children("."+i.listitem+"_divider").not("."+i.hidden).each(function(){d<0&&n==e(this).text().slice(0,1).toLowerCase()&&(d=e(this).position().top)}),t.scrollTop(d>-1?d:h)}));var o=function(e){e=e||this.$pnls.children("."+i.panel+"_opened"),this.$menu[(e.hasClass(i.panel+"_has-sectionindexer")?"add":"remove")+"Class"](i.menu+"_has-sectionindexer")};this.bind("openPanel:start",o),this.bind("initPanels:after",o)}})},add:function(){i=e[a]._c,r=e[a]._d,t=e[a]._e,i.add("sectionindexer"),t.add("mouseover")},clickAnchor:function(e,a){if(e.parent().is("."+i.indexer))return!0}},e[a].defaults[n]={add:!1,addTo:"panels"};var i,r,t,s}(jQuery);
/*
 * jQuery mmenu setSelected add-on
 * mmenu.frebsite.nl
 */
!function(e){var t="mmenu",n="setSelected";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];if(l=e[t].glbl,"boolean"==typeof r&&(r={hover:r,parent:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),"detect"==r.current){var d=function(e){e=e.split("?")[0].split("#")[0];var t=a.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');t.length?a.setSelected(t.parent(),!0):(e=e.split("/").slice(0,-1),e.length&&d(e.join("/")))};this.bind("initMenu:after",function(){d(window.location.href)})}else r.current||this.bind("initListview:after",function(e){e.find("."+i.listview).children("."+i.listitem+"_selected").removeClass(i.listitem+"_selected")});r.hover&&this.bind("initMenu:after",function(){this.$menu.addClass(i.menu+"_selected-hover")}),r.parent&&(this.bind("openPanel:finish",function(e){this.$pnls.find("."+i.listview).find("."+i.listitem+"_selected-parent").removeClass(i.listitem+"_selected-parent");for(var t=e.data(s.parent);t;)t.not("."+i.listitem+"_vertical").addClass(i.listitem+"_selected-parent"),t=t.closest("."+i.panel).data(s.parent)}),this.bind("initMenu:after",function(){this.$menu.addClass(i.menu+"_selected-parent")}))},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={current:!0,hover:!1,parent:!1};var i,s,a,l}(jQuery);
/*
 * jQuery mmenu sidebar add-on
 * mmenu.frebsite.nl
 */
!function(e){var s="mmenu",d="sidebar";e[s].addons[d]={setup:function(){if(this.opts.offCanvas){var n=this.opts[d];this.conf[d];l=e[s].glbl,("string"==typeof n||"boolean"==typeof n&&n||"number"==typeof n)&&(n={expanded:n}),"object"!=typeof n&&(n={}),"boolean"==typeof n.collapsed&&n.collapsed&&(n.collapsed="all"),"string"!=typeof n.collapsed&&"number"!=typeof n.collapsed||(n.collapsed={use:n.collapsed}),"object"!=typeof n.collapsed&&(n.collapsed={}),"number"==typeof n.collapsed.use&&(n.collapsed.use="(min-width: "+n.collapsed.use+"px)"),"boolean"==typeof n.expanded&&n.expanded&&(n.expanded="all"),"string"!=typeof n.expanded&&"number"!=typeof n.expanded||(n.expanded={use:n.expanded}),"object"!=typeof n.expanded&&(n.expanded={}),"number"==typeof n.expanded.use&&(n.expanded.use="(min-width: "+n.expanded.use+"px)"),n=this.opts[d]=e.extend(!0,{},e[s].defaults[d],n);var t=a.wrapper+"_sidebar-collapsed-"+n.collapsed.size,i=a.wrapper+"_sidebar-expanded-"+n.expanded.size;n.collapsed.use&&(this.bind("initMenu:after",function(){this.$menu.addClass(a.menu+"_sidebar-collapsed"),n.collapsed.blockMenu&&this.opts.offCanvas&&!this.$menu.children("."+a.menu+"__blocker").length&&this.$menu.prepend('<a class="'+a.menu+'__blocker" href="#'+this.$menu.attr("id")+'" />'),n.collapsed.hideNavbar&&this.$menu.addClass(a.menu+"_hidenavbar"),n.collapsed.hideDivider&&this.$menu.addClass(a.menu+"_hidedivider")}),"boolean"==typeof n.collapsed.use?this.bind("initMenu:after",function(){l.$html.addClass(t)}):this.matchMedia(n.collapsed.use,function(){l.$html.addClass(t)},function(){l.$html.removeClass(t)})),n.expanded.use&&(this.bind("initMenu:after",function(){this.$menu.addClass(a.menu+"_sidebar-expanded")}),"boolean"==typeof n.expanded.use?this.bind("initMenu:after",function(){l.$html.addClass(i),this.open()}):this.matchMedia(n.expanded.use,function(){l.$html.addClass(i),l.$html.hasClass(a.wrapper+"_sidebar-closed")||this.open()},function(){l.$html.removeClass(i),this.close()}),this.bind("close:start",function(){l.$html.hasClass(i)&&l.$html.addClass(a.wrapper+"_sidebar-closed")}),this.bind("open:start",function(){l.$html.removeClass(a.wrapper+"_sidebar-closed")}))}},add:function(){a=e[s]._c,n=e[s]._d,t=e[s]._e},clickAnchor:function(e,s,n){if(this.opts[d].expanded.use&&l.$html.is('[class*="'+a.wrapper+'_sidebar-expanded-"]')&&s&&n)return{close:!1}}},e[s].defaults[d]={collapsed:{use:!1,size:40,blockMenu:!0,hideDivider:!1,hideNavbar:!0},expanded:{use:!1,size:30}},e[s].configuration[d]={};var a,n,t,l}(jQuery);
/*
 * jQuery mmenu toggles add-on
 * mmenu.frebsite.nl
 */
!function(t){var e="mmenu",c="toggles";t[e].addons[c]={setup:function(){var s=this;this.opts[c],this.conf[c];a=t[e].glbl,this.bind("initPanels:after",function(e){this.__refactorClass(e.find("input"),this.conf.classNames[c].toggle,n.toggle),this.__refactorClass(e.find("input"),this.conf.classNames[c].check,n.check),e.find("input."+n.toggle+", input."+n.check).each(function(){var e=t(this),c=e.closest("li"),i=e.hasClass(n.toggle)?"toggle":"check",a=e.attr("id")||s.__getUniqueId();c.children('label[for="'+a+'"]').length||(e.attr("id",a),c.prepend(e),t('<label for="'+a+'" class="'+n[i]+'"></label>').insertBefore(c.children("a, span").last()))})})},add:function(){n=t[e]._c,s=t[e]._d,i=t[e]._e,n.add("toggle check")},clickAnchor:function(t,e){}},t[e].configuration.classNames[c]={toggle:"Toggle",check:"Check"};var n,s,i,a}(jQuery);
/*
 * jQuery mmenu navbar add-on breadcrumbs content
 * mmenu.frebsite.nl
 */
!function(a){var r="mmenu",n="navbars",e="breadcrumbs";a[r].addons[n][e]=function(n,e,s){var t=this,i=a[r]._c,b=a[r]._d;i.add("separator");var c=a('<span class="'+i.navbar+'__breadcrumbs" />').appendTo(n);this.bind("initNavbar:after",function(r){if(!r.children("."+i.navbar).children("."+i.navbar+"__breadcrumbs").length){r.removeClass(i.panel+"_has-navbar");for(var n=[],e=a('<span class="'+i.navbar+'__breadcrumbs"></span>'),t=r,c=!0;t&&t.length;){if(t.is("."+i.panel)||(t=t.closest("."+i.panel)),!t.parent("."+i.listitem+"_vertical").length){var d=t.children("."+i.navbar).children("."+i.navbar+"__title").text();d.length&&n.unshift(c?"<span>"+d+"</span>":'<a href="#'+t.attr("id")+'">'+d+"</a>"),c=!1}t=t.data(b.parent)}s.breadcrumbs.removeFirst&&n.shift(),e.append(n.join('<span class="'+i.separator+'">'+s.breadcrumbs.separator+"</span>")).appendTo(r.children("."+i.navbar))}}),this.bind("openPanel:start",function(a){var r=a.find("."+i.navbar+"__breadcrumbs");r.length&&c.html(r.html()||"")}),this.bind("initNavbar:after:sr-aria",function(r){r.children("."+i.navbar).children("."+i.breadcrumbs).children("a").each(function(){t.__sr_aria(a(this),"owns",a(this).attr("href").slice(1))})})}}(jQuery);
/*
 * jQuery mmenu navbar add-on close content
 * mmenu.frebsite.nl
 */
!function(t){var e="mmenu",n="navbars",a="close";t[e].addons[n][a]=function(n,a){var s=t[e]._c;t[e].glbl;s.add("close");var r=t('<a class="'+s.btn+" "+s.btn+"_close "+s.navbar+'__btn" href="#" />').appendTo(n);this.bind("setPage:after",function(t){r.attr("href","#"+t.attr("id"))}),this.bind("setPage:after:sr-text",function(n){r.html(this.__sr_text(t[e].i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(r,"owns",r.attr("href").slice(1))})}}(jQuery);
/*
 * jQuery mmenu navbar add-on next content
 * mmenu.frebsite.nl
 */
!function(a){var n="mmenu",t="navbars",e="next";a[n].addons[t][e]=function(e,s){var r,i,h,d=a[n]._c,o=a('<a class="'+d.btn+" "+d.btn+"_next "+d.navbar+'__btn" href="#" />').appendTo(e);this.bind("openPanel:start",function(a){r=a.find("."+this.conf.classNames[t].panelNext),i=r.attr("href"),h=r.html(),i?o.attr("href",i):o.removeAttr("href"),o[i||h?"removeClass":"addClass"](d.hidden),o.html(h)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(o,"hidden",o.hasClass(d.hidden)),this.__sr_aria(o,"owns",(o.attr("href")||"").slice(1))})},a[n].configuration.classNames[t].panelNext="Next"}(jQuery);
/*
 * jQuery mmenu navbar add-on prev content
 * mmenu.frebsite.nl
 */
!function(a){var n="mmenu",r="navbars",e="prev";a[n].addons[r][e]=function(e,t){var i=a[n]._c,s=a('<a class="'+i.btn+" "+i.btn+"_prev "+i.navbar+'__btn" href="#" />').appendTo(e);this.bind("initNavbar:after",function(a){a.removeClass(i.panel+"_has-navbar")});var h,l,d;this.bind("openPanel:start",function(a){a.parent("."+i.listitem+"_vertical").length||(h=a.find("."+this.conf.classNames[r].panelPrev),h.length||(h=a.children("."+i.navbar).children("."+i.btn+"_prev")),l=h.attr("href"),d=h.html(),l?s.attr("href",l):s.removeAttr("href"),s[l||d?"removeClass":"addClass"](i.hidden),s.html(d))}),this.bind("initNavbar:after:sr-aria",function(a){var n=a.children("."+i.navbar);this.__sr_aria(n,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(s,"hidden",s.hasClass(i.hidden)),this.__sr_aria(s,"owns",(s.attr("href")||"").slice(1))})},a[n].configuration.classNames[r].panelPrev="Prev"}(jQuery);
/*
 * jQuery mmenu navbar add-on searchfield content
 * mmenu.frebsite.nl
 */
!function(s){var e="mmenu",a="navbars",d="searchfield";s[e].addons[a][d]=function(a,d){var i=s[e]._c,t=s('<div class="'+i.searchfield+'" />').appendTo(a);"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=t}}(jQuery);
/*
 * jQuery mmenu navbar add-on tabs content
 * mmenu.frebsite.nl
 */
!function(a){var t="mmenu",e="navbars",n="tabs";a[t].addons[e][n]=function(n,s,r){function i(a){c.removeClass(d.navbar+"__tab_selected");var t=c.filter('[href="#'+a.attr("id")+'"]');if(t.length)t.addClass(d.navbar+"__tab_selected");else{var e=a.data(l.parent);e&&e.length&&i(e.closest("."+d.panel))}}var d=a[t]._c,l=a[t]._d,o=a[t]._e,_=this,c=n.children("a");n.addClass(d.navbar+"_tabs").parent().addClass(d.navbars+"_has-tabs"),c.on(o.click+"-"+e,function(t){t.preventDefault();var e=a(this);if(e.hasClass(d.navbar+"__tab_selected"))return void t.stopImmediatePropagation();try{_.__openPanelWoAnimation(a(e.attr("href"))),t.stopImmediatePropagation()}catch(n){}}),this.bind("openPanel:start",i)}}(jQuery);
/*
 * jQuery mmenu navbar add-on title content
 * mmenu.frebsite.nl
 */
!function(t){var a="mmenu",e="navbars",n="title";t[a].addons[e][n]=function(n,i){var r,s,l,h=t[a]._c,d=t('<a class="'+h.navbar+'__title" />').appendTo(n);this.bind("openPanel:start",function(t){t.parent("."+h.listitem+"_vertical").length||(l=t.find("."+this.conf.classNames[e].panelTitle),l.length||(l=t.children("."+h.navbar).children("."+h.navbar+"__title")),r=l.attr("href"),s=l.html()||i.title,r?d.attr("href",r):d.removeAttr("href"),d[r||s?"removeClass":"addClass"](h.hidden),d.html(s))});var o;this.bind("openPanel:start:sr-aria",function(t){if(this.opts.screenReader.text&&(o||(o=this.$menu.children("."+h.navbars+"_top, ."+h.navbars+"_bottom").children("."+h.navbar).children("."+h.btn+"_prev")),o.length)){var a=!0;"parent"==this.opts.navbar.titleLink&&(a=!o.hasClass(h.hidden)),this.__sr_aria(d,"hidden",a)}})},t[a].configuration.classNames[e].panelTitle="Title"}(jQuery);
/*
 * jQuery mmenu Angular wrapper
 * mmenu.frebsite.nl
 */
!function(e){var n="mmenu",t="angular";e[n].wrappers[t]=function(){this.opts.onClick={close:!0,preventDefault:!1,setSelected:!0}}}(jQuery);
/*
 * jQuery mmenu Bootstrap 3 wrapper
 * mmenu.frebsite.nl
 */
!function(n){var a="mmenu",e="bootstrap3";n[a].wrappers[e]=function(){if(this.$menu.hasClass("navbar-collapse")){this.conf.classNames.selected="active",this.conf.classNames.divider="divider",this.conf.clone=!0,this.opts.hooks=this.opts.hooks||{};for(var n="",a=["nav-tabs","nav-pills","navbar-nav"],e=0;e<a.length;e++)if(this.$menu.find("."+a[e]).length){n=a[e];break}n.length&&(this.opts.hooks["initMenu:before"]=function(){"navbar-nav"==n&&this.$menu.wrapInner("<div />")},this.opts.hooks["initMenu:after"]=function(){t.menu.call(this),t.dropdown.call(this),t[n.split("nav-").join("").split("-nav").join("")].call(this)})}};var t={menu:function(){this.$menu.find(".nav").removeClass("nav").end().find(".sr-only").remove().end().find(".divider:empty").remove();for(var n=["role","aria-haspopup","aria-expanded"],a=0;a<n.length;a++)this.$menu.find("["+n[a]+"]").removeAttr(n[a])},dropdown:function(){var a=this.$menu.find(".dropdown");a.removeClass("dropdown"),a.children(".dropdown-toggle").find(".caret").remove().end().each(function(){n(this).replaceWith("<span>"+n(this).html()+"</span>")}),a.children(".dropdown-menu").removeClass("dropdown-menu")},tabs:function(){this.$menu.find(".nav-tabs").removeClass("nav-tabs")},pills:function(){this.$menu.find(".nav-pills").removeClass("nav-pills")},navbar:function(){var n=this;this.$menu.removeClass("collapse navbar-collapse").find('[class*="navbar-"]').removeClass("navbar-left navbar-right navbar-nav navbar-text navbar-btn");var a=this.$menu.find(".navbar-form");this.conf.searchform={form:{action:a.attr("action"),method:a.attr("method")},input:{name:a.find("input").attr("name")},submit:!0},a.remove(),(this.$orig||this.$menu).closest(".navbar").find(".navbar-header").find(".navbar-toggle").off("click").on("click",function(a){n.open(),a.stopImmediatePropagation(),a.preventDefault()})}}}(jQuery);
/*
 * jQuery mmenu Bootstrap 4 wrapper
 * mmenu.frebsite.nl
 */
!function(n){function e(e){for(var a=n("<a />"),t=["href","title","target"],r=0;r<t.length;r++)"undefined"!=typeof e.attr(t[r])&&a.attr(t[r],e.attr(t[r]));return a.html(e.html()),a.find(".sr-only").remove(),a}function a(a){var t=n("<ul />");return a.find(".dropdown-item, .dropdown-divider").each(function(){var a=n(this),r=n("<li />");a.hasClass("dropdown-divider")?r.addClass("Divider"):r.append(e(a)),t.append(r)}),t}function t(t){var r=n("<ul />");return t.find(".nav-item").each(function(){var t=n(this),i=n("<li />");if(t.hasClass("active")&&i.addClass("Selected"),!t.hasClass("nav-link")){var o=t.children(".dropdown-menu");o.length&&i.append(a(o)),t=t.children(".nav-link")}i.prepend(e(t)),r.append(i)}),r}var r="mmenu",i="bootstrap4";n[r].wrappers[i]=function(){var e=this;if(this.$menu.hasClass("navbar-collapse")){this.conf.clone=!1;var r=n("<nav />"),i=n("<div />");r.append(i),this.$menu.children().each(function(){var r=n(this);switch(!0){case r.hasClass("navbar-nav"):i.append(t(r));break;case r.hasClass("dropdown-menu"):i.append(a(r));break;case r.hasClass("form-inline"):e.conf.searchfield.form={action:r.attr("action")||null,method:r.attr("method")||null},e.conf.searchfield.input={name:r.find("input").attr("name")||null},e.conf.searchfield.clear=!1,e.conf.searchfield.submit=!0;break;default:i.append(r.clone(!0))}}),this.bind("initMenu:before",function(){r.prependTo("body"),this.$menu=r}),this.$menu.parent().find(".navbar-toggler").removeAttr("data-target").removeAttr("aria-controls").off("click").on("click",function(n){n.preventDefault(),n.stopImmediatePropagation(),e[e.vars.opened?"close":"open"]()})}}}(jQuery);
/*
 * jQuery mmenu jQuery Mobile wrapper
 * mmenu.frebsite.nl
 */
!function(e){var n="mmenu",t="jqueryMobile";e[n].wrappers[t]=function(){var n=this;this.opts.onClick.close=!1,this.conf.offCanvas.pageSelector="div.ui-page-active",e("body").on("pagecontainerchange",function(e,t){"function"==typeof n.close&&(n.close(),n.setPage(t.toPage))}),this.bind("initAnchors:after",function(){e("body").on("click",".mm-listview a",function(n){n.isDefaultPrevented()||(n.preventDefault(),e("body").pagecontainer("change",this.href))})})}}(jQuery);
/*
 * jQuery mmenu Magento wrapper
 * mmenu.frebsite.nl
 */
!function(e){var n="mmenu",a="magento";e[n].wrappers[a]=function(){this.conf.classNames.selected="active"}}(jQuery);
/*
 * jQuery mmenu Olark wrapper
 * mmenu.frebsite.nl
 */
!function(n){var o="mmenu",a="olark";n[o].wrappers[a]=function(){this.conf.offCanvas.noPageSelector.push("#olark")}}(jQuery);
/*
 * jQuery mmenu Turbolinks wrapper
 * mmenu.frebsite.nl
 */
!function(n){var t="mmenu",o="turbolinks";n[t].wrappers[o]=function(){var o,r;n(document).on("turbolinks:before-visit",function(){r=n("html"),o=r.attr("class"),o=n.grep(o.split(/\s+/),function(n){return!/mm-/.test(n)}).join(" ")}).on("turbolinks:load",function(){"undefined"!=typeof r&&(r.attr("class",o),n[t].glbl=!1)})}}(jQuery);
/*
 * jQuery mmenu WordPress wrapper
 * mmenu.frebsite.nl
 */
!function(s){var e="mmenu",n="wordpress";s[e].wrappers[n]=function(){this.conf.classNames.selected="current-menu-item",s("#wpadminbar").css("position","fixed").addClass("mm-slideout")}}(jQuery);
return true;
}));

/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // update heights on load and resize events
    $(window).bind('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window).bind('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});

/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;(function ($) {
	"use strict";

	var methods = (function () {
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			ios = (function () {
				var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
				if (ios) {
					// iOS clicks only bubble as far as body children
					$(window).load(function () {
						$('body').children().on('click', $.noop);
					});
				}
				return ios;
			})(),
			wp7 = (function () {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			toggleMenuClasses = function ($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
						.filter(function () {
							return ($(this).children(o.popUpSelector).hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu) {
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			applyHandlers = function ($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (!ios) {
					touchevent += ' touchend.superfish';
				}
				if (wp7) {
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			},
			touchHandler = function (e) {
				var $this = $(this),
					$ul = $this.siblings(e.data.popUpSelector);

				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown') {
						$this.trigger('focus');
					} else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			over = function () {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			out = function () {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			close = function (o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function ($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el) {
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function (instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function () {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function () {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function () {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			init: function (op) {
				return this.each(function () {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: {opacity: 'show'},
		animationOut: {opacity: 'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

	// soon to be deprecated
	$.fn.extend({
		hideSuperfishUl: methods.hide,
		showSuperfishUl: methods.show
	});

})(jQuery);

jQuery(document).ready(function($) {


/*
|--------------------------------------------------------------------------
| Global myTheme Obj / Variable Declaration
|--------------------------------------------------------------------------
|
|
|
*/

	var myTheme = window.myTheme || {},
    $win = $( window );
		
	
/*
|--------------------------------------------------------------------------
| Main Navigation - Superfish plugin
|--------------------------------------------------------------------------
|
|
|
*/	

	myTheme.Navigation = function () {
		
		$('.menu-main-nav-container ul.sf-menu').superfish({
			
		});
	
	};
	

/*
|--------------------------------------------------------------------------
| Mobile Navigation - mmenu plugin
|--------------------------------------------------------------------------
|
|
|
*/	

	myTheme.MobileNav = function () {
		
		$("nav#mobile-menu").mmenu({
			 "extensions": [

				//"shadow-page",
				//"shadow-panels",
				 "multiline",
				 //"theme-white",
				 //"theme-dark",
				 "pagedim-black",
				 "border-offset",
				 "position-front"
			 ],

			//"slidingSubmenus": false,
			 "iconPanels": true,

		 });
	
	};		
	
	
/*
|--------------------------------------------------------------------------
| Responsive Videos - Fitvids plugin
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.FitVids = function () {
		
		$(".container").fitVids();
	
	};	
	

/*
|--------------------------------------------------------------------------
| Trim empty P tags
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.TrimP = function () {
		
		// Trimming white space
		$('p').filter(function () { return $.trim(this.innerHTML) == "" }).remove();

		// Without trimming white space
		$('p').filter(function () { return this.innerHTML == "" }).remove();
	
	};	
	

/*
|--------------------------------------------------------------------------
| Image / content popups - Fancybox plugin
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.Fancybox = function () {
		
		var thumbnails = 'a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"]';
		$(thumbnails).addClass("popup");
		
		$(".popup").fancybox({
			maxWidth	: 900,
			maxHeight	: 700,
			fitToView	: false,
			width		: '80%',
			height		: '80%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'elastic',
			closeEffect	: 'fade'
		});
			
	};


/*
|--------------------------------------------------------------------------
| isotope plugin
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.Isotope = function () {
	
		
		var isotopeContainer = $('.isotopeContainer');
		if( !isotopeContainer.length || !jQuery().isotope ) return;
		$win.load(function(){
			isotopeContainer.isotope({
				itemSelector: '.isotopeSelector',
				layoutMode: 'fitRows'
			});
			
		/* $('.isotopeFilters2').on( 'click', 'a', function(e) {
				$('.isotopeFilters2').find('.active').removeClass('active');
				$(this).parent().addClass('active');
				var filterValue = $(this).attr('data-filter');
				isotopeContainer.isotope({ filter: filterValue });
				e.preventDefault();
			}); */
		
		}); 
		
	
	};
	
	
	// for gallery page
	myTheme.Isotope2 = function () {
		
		var isotopeContainer = $('.gallery');
		if( !isotopeContainer.length || !jQuery().isotope ) return;
		$win.load(function(){
			isotopeContainer.isotope({
				itemSelector: '.gallery-item'
				//layoutMode: 'fitRows'
			});
		});
		
	
	};
	
	
/*
|--------------------------------------------------------------------------
| Same height columns - matchheight plugin
|--------------------------------------------------------------------------
|
|
|
*/	
	
	  myTheme.Matchheight = function () {
		  $('.matchheight').matchHeight();		  
	  };
	
/*
|--------------------------------------------------------------------------
| Zebra stripe for blog
|--------------------------------------------------------------------------
|
|
|
*/	
	
	  myTheme.Zebra = function () {
		  $("section.post-wrap:odd").addClass("odd");
	  };
	

/*
|--------------------------------------------------------------------------
| Functions Initializers
|--------------------------------------------------------------------------
|
|
|
*/

	myTheme.Navigation();
	myTheme.MobileNav();
	myTheme.FitVids();
	myTheme.TrimP();
	myTheme.Fancybox();
	myTheme.Isotope();
	myTheme.Isotope2();
	myTheme.Matchheight();
	myTheme.Zebra();
	
	

});