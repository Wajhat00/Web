﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("colorbutton",{requires:"panelbutton,floatpanel",lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"bgcolor,textcolor",hidpi:!0,init:function(c){function m(l,g,e,h){var j=new CKEDITOR.style(i["colorButton_"+g+"Style"]),k=CKEDITOR.tools.getNextId()+"_colorBox";c.ui.add(l,CKEDITOR.UI_PANELBUTTON,{label:e,
title:e,modes:{wysiwyg:1},editorFocus:0,toolbar:"colors,"+h,allowedContent:j,requiredContent:j,panel:{css:CKEDITOR.skin.getPath("editor"),attributes:{role:"listbox","aria-label":f.panelTitle}},onBlock:function(a,b){b.autoSize=!0;b.element.addClass("cke_colorblock");b.element.setHtml(o(a,g,k));b.element.getDocument().getBody().setStyle("overflow","hidden");CKEDITOR.ui.fire("ready",this);var d=b.keys,e="rtl"==c.lang.dir;d[e?37:39]="next";d[40]="next";d[9]="next";d[e?39:37]="prev";d[38]="prev";d[CKEDITOR.SHIFT+
9]="prev";d[32]="click"},refresh:function(){c.activeFilter.check(j)||this.setState(CKEDITOR.TRISTATE_DISABLED)},onOpen:function(){var a=c.getSelection(),a=a&&a.getStartElement(),a=c.elementPath(a),b;if(a){a=a.block||a.blockLimit||c.document.getBody();do b=a&&a.getComputedStyle("back"==g?"background-color":"color")||"transparent";while("back"==g&&"transparent"==b&&a&&(a=a.getParent()));if(!b||"transparent"==b)b="#ffffff";this._.panel._.iframe.getFrameDocument().getById(k).setStyle("background-color",
b);return b}}})}function o(l,g,e){var h=[],j=i.colorButton_colors.split(","),k=CKEDITOR.tools.addFunction(function(a,b){if("?"==a){var e=arguments.callee,d=function(a){this.removeListener("ok",d);this.removeListener("cancel",d);"ok"==a.name&&e(this.getContentElement("picker","selectedColor").getValue(),b)};c.openDialog("colordialog",function(){this.on("ok",d);this.on("cancel",d)})}else{c.focus();l.hide();c.fire("saveSnapshot");c.removeStyle(new CKEDITOR.style(i["colorButton_"+b+"Style"],{color:"inherit"}));
if(a){var f=i["colorButton_"+b+"Style"];f.childRule="back"==b?function(a){return n(a)}:function(a){return!(a.is("a")||a.getElementsByTag("a").count())||n(a)};c.applyStyle(new CKEDITOR.style(f,{color:a}))}c.fire("saveSnapshot")}});h.push('<a class="cke_colorauto" _cke_focus=1 hidefocus=true title="',f.auto,'" onclick="CKEDITOR.tools.callFunction(',k,",null,'",g,"');return false;\" href=\"javascript:void('",f.auto,'\')" role="option"><table role="presentation" cellspacing=0 cellpadding=0 width="100%"><tr><td><span class="cke_colorbox" id="',
e,'"></span></td><td colspan=7 align=center>',f.auto,'</td></tr></table></a><table role="presentation" cellspacing=0 cellpadding=0 width="100%">');for(e=0;e<j.length;e++){0===e%8&&h.push("</tr><tr>");var a=j[e].split("/"),b=a[0],d=a[1]||b;a[1]||(b="#"+b.replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3"));a=c.lang.colorbutton.colors[d]||d;h.push('<td><a class="cke_colorbox" _cke_focus=1 hidefocus=true title="',a,'" onclick="CKEDITOR.tools.callFunction(',k,",'",b,"','",g,"'); return false;\" href=\"javascript:void('",
a,'\')" role="option"><span class="cke_colorbox" style="background-color:#',d,'"></span></a></td>')}(c.plugins.colordialog&&void 0===i.colorButton_enableMore||i.colorButton_enableMore)&&h.push('</tr><tr><td colspan=8 align=center><a class="cke_colormore" _cke_focus=1 hidefocus=true title="',f.more,'" onclick="CKEDITOR.tools.callFunction(',k,",'?','",g,"');return false;\" href=\"javascript:void('",f.more,"')\"",' role="option">',f.more,"</a></td>");h.push("</tr></table>");return h.join("")}function n(c){return"false"==
c.getAttribute("contentEditable")||c.getAttribute("data-nostyle")}var i=c.config,f=c.lang.colorbutton;CKEDITOR.env.hc||(m("TextColor","fore",f.textColorTitle,10),m("BGColor","back",f.bgColorTitle,20))}});CKEDITOR.config.colorButton_colors="000,800000,8B4513,2F4F4F,008080,000080,4B0082,696969,B22222,A52A2A,DAA520,006400,40E0D0,0000CD,800080,808080,F00,FF8C00,FFD700,008000,0FF,00F,EE82EE,A9A9A9,FFA07A,FFA500,FFFF00,00FF00,AFEEEE,ADD8E6,DDA0DD,D3D3D3,FFF0F5,FAEBD7,FFFFE0,F0FFF0,F0FFFF,F0F8FF,E6E6FA,FFF";
CKEDITOR.config.colorButton_foreStyle={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}]};CKEDITOR.config.colorButton_backStyle={element:"span",styles:{"background-color":"#(color)"}};