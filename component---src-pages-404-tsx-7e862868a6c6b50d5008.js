(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{187:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(219);t.default=function(){return a.createElement(i.a,{title:"Page not found"},a.createElement("h1",null,"NOT FOUND"),a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},203:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(9),o=n.n(r),l=n(198),d=n.n(l);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(214),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var u=n(38);n.d(t,"parsePath",function(){return u.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},204:function(e,t,n){"use strict";n(55);var a=n(252),i=n.n(a),r=n(253),o=n.n(r),l=new i.a(o.a).options;t.a={text:{fontFamily:l.bodyFontFamily.join(", "),lineHeight:l.baseLineHeight,highlight:"#2D882D"},palette:{primary:Object.assign({},"#AA3939",{rgb:[170,57,57]}),highlight:"#FFF3B0",alt:"#335C67",alt2:"#E09F3E",alt3:"#540B0E",grey:"#444",whitish:"#FEFEFE"},backgrounds:{sidebar:"#F6F6F6",header:"#AA3939"}}},214:function(e,t,n){var a;e.exports=(a=n(224))&&a.default||a},219:function(e,t,n){"use strict";var a=n(248),i=n(0),r=n(249),o=n.n(r),l=n(203),d=n(201),c=n(225),s=n(204);n(254);var u=d.a.div.withConfig({displayName:"layout__BodyContent",componentId:"s1ms8vo4-0"})(["display:flex;flex:1;flex-direction:column;"]),m=d.a.div.withConfig({displayName:"layout__ContentContainer",componentId:"s1ms8vo4-1"})(["display:flex;height:100%;flex-direction:row;align-items:stretch;flex:1;padding:0;margin:0;"]),p=d.a.div.withConfig({displayName:"layout__Content",componentId:"s1ms8vo4-2"})(["margin:auto;padding:0px 1.0875rem 1.45rem;display:flex;flex-direction:column;height:100%;flex:5;padding:1.45rem;overflow:scroll;"]),f=d.a.div.withConfig({displayName:"layout__SidebarContainer",componentId:"s1ms8vo4-3"})(["display:flex;flex:1;height:100%;padding:1rem;background:",";"],s.a.backgrounds.sidebar);t.a=function(e){var t=e.sidebar,n=void 0===t?null:t,r=(e.logoTo,e.children),d=e.title;return i.createElement(l.StaticQuery,{query:"431921337",render:function(e){var t,a,l,s=e.site.siteMetadata;return i.createElement(i.Fragment,null,i.createElement(o.a,{title:d||s.title,meta:(t=s,a=t.description,l=t.keywords,[{name:"description",content:a},{name:"keywords",content:l.join(", ")}])},i.createElement("html",{lang:"en"})),i.createElement(u,null,i.createElement(c.a,null),i.createElement(m,null,n?i.createElement(f,null,n):null,i.createElement(p,null,r))))},data:a})}},224:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),o=n.n(r),l=n(46),d=n(1),c=function(e){var t=e.location,n=d.a.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:n})};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},225:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(12),i=n.n(a),r=n(226),o=n(0),l=n(203),d=n(201),c=n(204),s=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.logoTo,n=void 0===t?"/":t,a=e.opacity,i=void 0===a?1:a;return o.createElement(l.StaticQuery,{query:"295592476",render:function(e){var t=e.site.siteMetadata,a=t.title,r=t.githubUrl;return o.createElement(u,null,o.createElement(m,{style:{opacity:i}},o.createElement(f,null,o.createElement(h,{to:n},a)),o.createElement(p,null,o.createElement(g,{to:"/"},"Home"),o.createElement(g,{to:"/documentation"},"Docs"),o.createElement(g,{to:"/blog"},"Blog"),o.createElement(g,{to:r},"Github"))))},data:r})},t}(o.PureComponent);s.HEIGHT=60;var u=d.a.div.withConfig({displayName:"header__Container",componentId:"s13eiwdg-0"})(["background:",";height:","px;display:flex;"],c.a.backgrounds.header,s.HEIGHT),m=d.a.div.withConfig({displayName:"header__InnerContainer",componentId:"s13eiwdg-1"})(["flex:1;margin:0 auto;max-width:960;padding:1.45rem 1.0875rem;display:flex;justify-content:space-between;align-self:stretch;align-items:center;"]),p=d.a.div.withConfig({displayName:"header__Links",componentId:"s13eiwdg-2"})(["display:flex;flex-direction:row;align-items:center;"]),f=d.a.h1.withConfig({displayName:"header__Title",componentId:"s13eiwdg-3"})(["margin:0;border:none;"]),h=Object(d.a)(l.Link).withConfig({displayName:"header__TitleLink",componentId:"s13eiwdg-4"})(["color:white;text-decoration:none;font-family:",";font-weight:100;"],c.a.text.fontFamily),g=Object(d.a)(l.Link).withConfig({displayName:"header__OuterLink",componentId:"s13eiwdg-5"})(["color:white;margin-left:8px;margin-right:8px;font-family:",";font-weight:100;"],c.a.text.fontFamily)},226:function(e){e.exports={data:{site:{siteMetadata:{title:"chart-parts",githubUrl:"https://github.com/Microsoft/chart-parts"}}}}},248:function(e){e.exports={data:{site:{siteMetadata:{title:"chart-parts",keywords:["visualization","dataviz","grammar of graphics","mark-based visualization"],description:"A flexible, React-friendly, Grammar of Graphics for data visualization"}}}}},254:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-404-tsx-7e862868a6c6b50d5008.js.map