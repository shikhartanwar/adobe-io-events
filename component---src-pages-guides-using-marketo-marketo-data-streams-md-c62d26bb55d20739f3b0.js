"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1877],{67781:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return u}});var i=t(87462),r=t(63366),n=(t(15007),t(64983)),s=t(91515),m=t(50260),o=t(43500),d=["components"],p={},l={_frontmatter:p},c=s.Z;function u(e){var a=e.components,t=(0,r.Z)(e,d);return(0,n.mdx)(c,(0,i.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"subscribing-to-the-marketo-events-with-adobe-io-events"},"Subscribing to the Marketo Events with Adobe I/O Events"),(0,n.mdx)("p",null,"These instructions describe how to set up and get started using Adobe I/O Events for the Marketo Data Streams."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#subscribing-to-marketo-events"},"Subscribing to Marketo Events")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#developer-guidelines"},"Developer Guidelines")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#debug"},"Debug"))),(0,n.mdx)("h2",{id:"introduction"},"Introduction"),(0,n.mdx)("p",null,"In order to allow for additional scalability and further programmatic automation of the Marketo platform, we have introduced the Marketo Data Streams.  The data streams are available to all CET and Performance Plus customers.  There are currently five data streams:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://developers.marketo.com/data-streams/#overview_lead_activity_data_stream"},"Lead Activity Data Stream")),(0,n.mdx)("li",{parentName:"ul"},"Metrics Data Stream (Alpha)"),(0,n.mdx)("li",{parentName:"ul"},"Notification Data Stream (Beta)"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"marketo-observability-data-stream-setup.md"},"Observability Data Stream (Beta)")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"marketo-user-audit-data-stream-setup.md"},"User Audit Data Stream (Beta)"))),(0,n.mdx)("p",null,"At this time, only the Notification, Observability, and User Audit streams are available within Adobe I/O Events, the Lead and Metrics streams can be subscribed to via alternate paths."),(0,n.mdx)("p",null,"Note: The Marketo Data Streams are currently in Beta"),(0,n.mdx)("h2",{id:"subscribing-to-marketo-events"},"Subscribing to Marketo Events"),(0,n.mdx)("p",null,"See the ",(0,n.mdx)("a",{parentName:"p",href:"/adobe-io-events/src/pages/index.md"},"Adobe I/O Events Docs")),(0,n.mdx)("p",null,"Here are some basic getting started instructions that will be the same for each of the available Marketo data streams in I/O Events."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Start from the ",(0,n.mdx)("a",{parentName:"p",href:"/adobe-io-events/console/"},"developer console"),":")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Select ",(0,n.mdx)("inlineCode",{parentName:"p"},"Create new project")),(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"305px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.34426229508196%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/25d39bf466900121aa3c2130f674b2e3/7fa18/UserAuditDataStreamIOSetup1.webp 305w"],sizes:"(max-width: 305px) 100vw, 305px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/25d39bf466900121aa3c2130f674b2e3/05c01/UserAuditDataStreamIOSetup1.png 305w"],sizes:"(max-width: 305px) 100vw, 305px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/25d39bf466900121aa3c2130f674b2e3/05c01/UserAuditDataStreamIOSetup1.png",alt:"Create new project",title:"Quick Start",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Select ",(0,n.mdx)("inlineCode",{parentName:"p"},"Add event")),(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"515px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/5530d/UserAuditDataStreamIOSetup2.webp 320w","/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/2a394/UserAuditDataStreamIOSetup2.webp 515w"],sizes:"(max-width: 515px) 100vw, 515px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/dd4a7/UserAuditDataStreamIOSetup2.png 320w","/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/70021/UserAuditDataStreamIOSetup2.png 515w"],sizes:"(max-width: 515px) 100vw, 515px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/aaf3583239827acdfa63c5512a7885c6/70021/UserAuditDataStreamIOSetup2.png",alt:"Add event",title:"Get started with your new project by adding an event subscription",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Filter by ",(0,n.mdx)("inlineCode",{parentName:"p"},"Experience Cloud")))),(0,n.mdx)("p",null,"You should see the three Marketo Data Streams available.  Please see the individual page for each stream for further setup instructions."),(0,n.mdx)(m.default,{mdxType:"DeveloperGuidelines"}),(0,n.mdx)(o.default,{mdxType:"Debug"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-marketo-marketo-data-streams-md-c62d26bb55d20739f3b0.js.map