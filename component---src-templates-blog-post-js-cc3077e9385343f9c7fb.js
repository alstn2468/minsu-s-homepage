(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1QcF":function(e,t,n){},DMNx:function(e,t,n){},"Lmb+":function(e,t,n){},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("E9XD"),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=s(n("q1tI")),i=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],f=!1;function m(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return u.some((function(e){return e===n}))?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!f){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),f=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);p.displayName="DisqusThread",p.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},TsVF:function(e,t,n){},XReL:function(e,t,n){},hUWy:function(e,t,n){},jmfv:function(e,t,n){},"n1n/":function(e,t,n){},uhgt:function(e,t,n){},weRM:function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=(n("TsVF"),function(){return r.a.createElement("hr",{className:"custom-hr"})}),i=n("hpys"),s=n("CC2r"),c=function(e){var t=e.title;return r.a.createElement("h1",null,t)},l=(n("1QcF"),function(e){var t=e.date;return r.a.createElement("p",{className:"post-date"},t)}),u=(n("Lmb+"),function(e){var t=e.html;return r.a.createElement("div",{className:"post-container",dangerouslySetInnerHTML:{__html:t}})}),f=(n("weRM"),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",target:"_blank",rel:"noopener","aria-label":"Share on Facebook",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))),r.a.createElement("span",{className:"service-label"},"Share on Facebook")))}),m=(n("hUWy"),function(e){var t=e.onClick;return r.a.createElement("a",{className:"resp-sharing-button__link",href:"#",rel:"noopener","aria-label":"Share on Twitter",onClick:t},r.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"},r.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))),r.a.createElement("span",{className:"service-label"},"Share on Twitter")))}),p=(n("DMNx"),function(e){var t='"'+e.title+'" by '+e.author+"(@alstn2468)";return r.a.createElement("div",{className:"social-share"},r.a.createElement(f,{onClick:function(e){return e.preventDefault(),function(e,t){window.FB.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}(window.location.href,t)}}),r.a.createElement(m,{onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/share?url="+encodeURI(encodeURI(e))+"&text="+t,"sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}}))}),d=(n("jmfv"),function(e){var t=e.sponsorId;return r.a.createElement("div",{className:"sponsor-button"},r.a.createElement("a",{className:"bmc-button",target:"_blank",href:"http://buymeacoff.ee/"+t},r.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",null,"Buy me a coffee")))}),h=n("lbRd"),b=n("Wbzz"),g=(n("n1n/"),function(e){var t=e.pageContext,n=t.previous,a=t.next;return r.a.createElement("ul",{className:"navigator"},r.a.createElement("li",null,n&&r.a.createElement(b.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,a&&r.a.createElement(b.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))});function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=n("dI71"),y=n("RPjP"),E=n.n(y),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(v(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(v(n)),n}Object(w.a)(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},n.render=function(){var e=this.props,t=e.post,n=e.shortName,a=e.siteUrl+e.slug;return r.a.createElement(E.a,{shortname:n,identifier:t.frontmatter.title,title:t.frontmatter.title,url:a,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},t}(a.Component),k=n("JqEL"),C=n("WlAH"),N=function(e){var t=e.repo,n=r.a.createRef();return Object(a.useEffect)((function(){var e=k.f(C.d.DARK),a=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:e?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(r).forEach((function(e){a.setAttribute(e,r[e])})),n.current.appendChild(a)}),[]),r.a.createElement("div",{className:"utterances",ref:n})},j=n("EXIE");n("uhgt"),n("XReL"),t.default=function(e){var t=e.data,n=e.pageContext,f=e.location;Object(a.useEffect)((function(){return j.c(),function(){return j.a()}}),[]);var m=t.markdownRemark,b=t.site.siteMetadata,v=b.title,w=b.comment,y=b.siteUrl,E=b.author,k=b.sponsor,C=w.disqusShortName,O=w.utterances,S=m.frontmatter,x=S.title,D=S.date;return r.a.createElement(i.a,{location:f,title:v},r.a.createElement(s.a,{title:x,description:m.excerpt}),r.a.createElement(c,{title:x}),r.a.createElement(l,{date:D}),r.a.createElement(u,{html:m.html}),r.a.createElement(p,{title:x,author:E}),!!k.buyMeACoffeeId&&r.a.createElement(d,{sponsorId:k.buyMeACoffeeId}),r.a.createElement(o,null),r.a.createElement(h.a,null),r.a.createElement(g,{pageContext:n}),!!C&&r.a.createElement(_,{post:m,shortName:C,siteUrl:y,slug:n.slug}),!!O&&r.a.createElement(N,{repo:O}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cc3077e9385343f9c7fb.js.map