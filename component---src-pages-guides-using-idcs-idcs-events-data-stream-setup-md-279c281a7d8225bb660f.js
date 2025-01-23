"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5667],{34271:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return m}});var n=a(87462),i=a(63366),s=(a(15007),a(64983)),d=a(91515),p=["components"],c={},o={_frontmatter:c},r=d.Z;function m(e){var t=e.components,a=(0,i.Z)(e,p);return(0,s.mdx)(r,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"setting-up-indesign-apis-user-events-stream-with-adobe-io-events"},"Setting up InDesign APIs User Events Stream with Adobe I/O Events"),(0,s.mdx)("p",null,"These instructions describe how to set up and get started using Adobe I/O Events for InDesign APIs user driven job processing events. You can use Adobe I/O for streaming InDesign APIs job processing events such as the downloading of assets, engine processing, uploading of assets etc."),(0,s.mdx)("h2",{id:"introduction"},"Introduction"),(0,s.mdx)("p",null,'InDesign APIs events provide all the job processing details, similar to those shown in the status calls of InDesign APIs. However, InDesign APIs events are more comprehensive and real-time, unlike the status calls which only include "not-started," "running," "completed," and "failed" statuses.'),(0,s.mdx)("h2",{id:"setup-events-browsinglistening-in-indesign-apis"},"Setup events browsing/listening in InDesign APIs"),(0,s.mdx)("p",null,"InDesign APIs are currently in Beta thus cannot be enabled without a PreRelease agreement. After a PreRelease agreement is in place, you should be able to see InDesign APIs (Beta) - Firefly Services events tile in developer console."),(0,s.mdx)("h2",{id:"setup-adobe-io"},"Setup Adobe I/O"),(0,s.mdx)("p",null,"See ",(0,s.mdx)("a",{parentName:"p",href:"/adobe-io-events/src/pages/index.md"},"Getting Started with Adobe I/O Events")),(0,s.mdx)("p",null,"For basic instructions for this use case, starting from ",(0,s.mdx)("a",{parentName:"p",href:"/adobe-io-events/console/"},"developer.adobe.com/console"),":"),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"When prompted, click the designated button to proceed")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Select ",(0,s.mdx)("inlineCode",{parentName:"p"},"Create new project")),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"672px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/8b8129f95fe7c773f4089467b33d7bdc/5530d/events_idcs_01.webp 320w","/adobe-io-events/static/8b8129f95fe7c773f4089467b33d7bdc/0c8fb/events_idcs_01.webp 640w","/adobe-io-events/static/8b8129f95fe7c773f4089467b33d7bdc/42a33/events_idcs_01.webp 672w"],sizes:"(max-width: 672px) 100vw, 672px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/8b8129f95fe7c773f4089467b33d7bdc/dd4a7/events_idcs_01.png 320w","/adobe-io-events/static/8b8129f95fe7c773f4089467b33d7bdc/0f09e/events_idcs_01.png 640w","/adobe-io-events/static/8b8129f95fe7c773f4089467b33d7bdc/00e42/events_idcs_01.png 672w"],sizes:"(max-width: 672px) 100vw, 672px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/8b8129f95fe7c773f4089467b33d7bdc/00e42/events_idcs_01.png",alt:"Create new project",title:"Quick Start",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Select ",(0,s.mdx)("inlineCode",{parentName:"p"},"Add event")),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1262px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/c5a6ca1648c36c11ff404910771431f9/5530d/events_idcs_02.webp 320w","/adobe-io-events/static/c5a6ca1648c36c11ff404910771431f9/0c8fb/events_idcs_02.webp 640w","/adobe-io-events/static/c5a6ca1648c36c11ff404910771431f9/53908/events_idcs_02.webp 1262w"],sizes:"(max-width: 1262px) 100vw, 1262px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/c5a6ca1648c36c11ff404910771431f9/dd4a7/events_idcs_02.png 320w","/adobe-io-events/static/c5a6ca1648c36c11ff404910771431f9/0f09e/events_idcs_02.png 640w","/adobe-io-events/static/c5a6ca1648c36c11ff404910771431f9/f3b60/events_idcs_02.png 1262w"],sizes:"(max-width: 1262px) 100vw, 1262px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/c5a6ca1648c36c11ff404910771431f9/f3b60/events_idcs_02.png",alt:"Add event",title:"Get started with your new project by adding an event subscription",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Filter by ",(0,s.mdx)("inlineCode",{parentName:"p"},"Creative Cloud"),"\n",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"868px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/2b5f0dab08685af6d5a35e5f1f1f7035/5530d/events_idcs_03.webp 320w","/adobe-io-events/static/2b5f0dab08685af6d5a35e5f1f1f7035/0c8fb/events_idcs_03.webp 640w","/adobe-io-events/static/2b5f0dab08685af6d5a35e5f1f1f7035/cef0d/events_idcs_03.webp 868w"],sizes:"(max-width: 868px) 100vw, 868px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/2b5f0dab08685af6d5a35e5f1f1f7035/dd4a7/events_idcs_03.png 320w","/adobe-io-events/static/2b5f0dab08685af6d5a35e5f1f1f7035/0f09e/events_idcs_03.png 640w","/adobe-io-events/static/2b5f0dab08685af6d5a35e5f1f1f7035/9a8ca/events_idcs_03.png 868w"],sizes:"(max-width: 868px) 100vw, 868px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/2b5f0dab08685af6d5a35e5f1f1f7035/9a8ca/events_idcs_03.png",alt:"Filter Selection",title:"Filter by Creative Cloud",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Select ",(0,s.mdx)("inlineCode",{parentName:"p"},"Select InDesign APIs (Beta) - Firefly Services")),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/5530d/events_idcs_04.webp 320w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/0c8fb/events_idcs_04.webp 640w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/94b1e/events_idcs_04.webp 1280w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/0b34d/events_idcs_04.webp 1920w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/d5269/events_idcs_04.webp 2560w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/8ab54/events_idcs_04.webp 3258w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/dd4a7/events_idcs_04.png 320w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/0f09e/events_idcs_04.png 640w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/bbbf7/events_idcs_04.png 1280w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/ac7a9/events_idcs_04.png 1920w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/c7a69/events_idcs_04.png 2560w","/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/770a1/events_idcs_04.png 3258w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/30ce82f5e227dc20ff850a2d2f9c4172/bbbf7/events_idcs_04.png",alt:"Provider selection",title:"Select event provider",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Subscribe to the user driven change events of your choosing"),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/5530d/events_idcs_05.webp 320w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/0c8fb/events_idcs_05.webp 640w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/94b1e/events_idcs_05.webp 1280w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/0b34d/events_idcs_05.webp 1920w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/d5269/events_idcs_05.webp 2560w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/d21c8/events_idcs_05.webp 2772w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/dd4a7/events_idcs_05.png 320w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/0f09e/events_idcs_05.png 640w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/bbbf7/events_idcs_05.png 1280w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/ac7a9/events_idcs_05.png 1920w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/c7a69/events_idcs_05.png 2560w","/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/db9fb/events_idcs_05.png 2772w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/831f59aa65398ae04a220115ebd88050/bbbf7/events_idcs_05.png",alt:"Event selection",title:"Select event subscriptions",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Set up OAuth Server-to-Server Credentials."),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"The OAuth Server-to-Server credential relies on the OAuth 2.0 client_credentials grant type to generate access tokens.")),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.43750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/5530d/events_idcs_06.webp 320w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/0c8fb/events_idcs_06.webp 640w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/94b1e/events_idcs_06.webp 1280w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/0b34d/events_idcs_06.webp 1920w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/d5269/events_idcs_06.webp 2560w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/c0d94/events_idcs_06.webp 2804w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/dd4a7/events_idcs_06.png 320w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/0f09e/events_idcs_06.png 640w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/bbbf7/events_idcs_06.png 1280w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/ac7a9/events_idcs_06.png 1920w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/c7a69/events_idcs_06.png 2560w","/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/69d05/events_idcs_06.png 2804w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/0138d1db1f561843b09f7983e8100a5b/bbbf7/events_idcs_06.png",alt:"Set up credentials",title:"Set up credentials",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Set up Event Registration"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"Provide a name and description for this event subscription")),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.43750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/5530d/events_idcs_07.webp 320w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/0c8fb/events_idcs_07.webp 640w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/94b1e/events_idcs_07.webp 1280w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/0b34d/events_idcs_07.webp 1920w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/d5269/events_idcs_07.webp 2560w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/010ad/events_idcs_07.webp 2774w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/dd4a7/events_idcs_07.png 320w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/0f09e/events_idcs_07.png 640w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/bbbf7/events_idcs_07.png 1280w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/ac7a9/events_idcs_07.png 1920w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/c7a69/events_idcs_07.png 2560w","/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/d09f7/events_idcs_07.png 2774w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/70c46c1af19a2ff55e8fc6a463c0404b/bbbf7/events_idcs_07.png",alt:"Set Up registration",title:"Set Up registration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Configure Event Registration"),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/5530d/events_idcs_08.webp 320w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/0c8fb/events_idcs_08.webp 640w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/94b1e/events_idcs_08.webp 1280w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/0b34d/events_idcs_08.webp 1920w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/d5269/events_idcs_08.webp 2560w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/d130a/events_idcs_08.webp 2806w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/dd4a7/events_idcs_08.png 320w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/0f09e/events_idcs_08.png 640w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/bbbf7/events_idcs_08.png 1280w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/ac7a9/events_idcs_08.png 1920w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/c7a69/events_idcs_08.png 2560w","/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/1cc5d/events_idcs_08.png 2806w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/844e121ee3a761f86fd9877179a7e933/bbbf7/events_idcs_08.png",alt:"Configure registration",title:"Configure registration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"Optionally choose whether to enable Webhook or Runtime action",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"Enable Webhook",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"We recommend batch over single webhooks"),(0,s.mdx)("li",{parentName:"ul"},"For ",(0,s.mdx)("inlineCode",{parentName:"li"},"Webhook URL")," a public https endpoint must be provided"),(0,s.mdx)("li",{parentName:"ul"},"The endpoint must be able to handle get and post requests"),(0,s.mdx)("li",{parentName:"ul"},"The get request must respond with the challenge query if it exists"),(0,s.mdx)("li",{parentName:"ul"},"The post request must respond that it received the message or the webhook will re-attempt to send several times before giving up and automatically disabling the webhook sends"))),(0,s.mdx)("li",{parentName:"ul"},"Enable Runtime action",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"/adobe-io-events/runtime/docs/guides/getting-started/"},"See Setting up your Runtime Environment")),(0,s.mdx)("li",{parentName:"ul"},"Select a pre-made runtime action/runtime namespace"))))))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"After Saving"),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/5530d/events_idcs_09.webp 320w","/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/0c8fb/events_idcs_09.webp 640w","/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/94b1e/events_idcs_09.webp 1280w","/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/0b34d/events_idcs_09.webp 1920w","/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/068f0/events_idcs_09.webp 2314w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/dd4a7/events_idcs_09.png 320w","/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/0f09e/events_idcs_09.png 640w","/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/bbbf7/events_idcs_09.png 1280w","/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/ac7a9/events_idcs_09.png 1920w","/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/42d3e/events_idcs_09.png 2314w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/f5fd6bbbe48fbeecd91cc08c6c811c89/bbbf7/events_idcs_09.png",alt:"Verify setup",title:"Verify setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"Verify that the Status is ",(0,s.mdx)("inlineCode",{parentName:"li"},"Active")),(0,s.mdx)("li",{parentName:"ul"},"If Webhook was selected, verify that it successfully passed the challenge without errors")))),(0,s.mdx)("h3",{id:"event-data-structure"},"Event Data Structure"),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"We are still finalizing the data structure as we prepare for Beta release. While we don't expect any major changes, there may be some minor modifications.")),(0,s.mdx)("p",null,"Events are structured in JSON format using the ",(0,s.mdx)("a",{parentName:"p",href:"https://cloudevents.io/"},"CloudEvents")," spec"),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"Example Event (batch)")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n      "data": {\n        "key": "ec1b9eaf-a0b2-4bcf-9f6d-bd394e2586d7",\n        "source": "indesign",\n        "value": {\n          "jobId": "8b524c70-6779-47f1-ac2a-ce93c23b3f5f",\n          "eventId": "ec1b9eaf-a0b2-4bcf-9f6d-bd394e2586d7",\n          "state": "QUEUED",\n          "timestamp": 1720631447943\n        }\n      },\n      "id": "e414ef62-92f7-48f9-841b-b22d38f6141e",\n      "source": "urn:uuid:5c8f2d48-a2a7-4d0e-bb49-aabf9a72bd1e",\n      "specversion": "1.0",\n      "type": "QUEUED",\n      "datacontenttype": "application/json",\n      "time": "2024-07-10T17:10:48.985Z",\n      "event_id": "420c1092-a7fd-4132-9ee8-de7a41c01bcd",\n      "recipient_client_id": "7af7ab96045640b5a6e4724810145eb9"\n    },\n  {\n      "data": {\n        "key": "f1dbc354-3878-4273-8a9e-c2a6b57543cc",\n        "source": "indesign",\n        "value": {\n          "jobId": "8b524c70-6779-47f1-ac2a-ce93c23b3f5f",\n          "eventId": "f1dbc354-3878-4273-8a9e-c2a6b57543cc",\n          "state": "ASSETS_DOWNLOAD_STARTED",\n          "timestamp": 1720631448826\n        }\n      },\n      "id": "70b8efcb-38f2-4781-84ee-036013d3f5bc",\n      "source": "urn:uuid:5c8f2d48-a2a7-4d0e-bb49-aabf9a72bd1e",\n      "specversion": "1.0",\n      "type": "ASSETS_DOWNLOAD_STARTED",\n      "datacontenttype": "application/json",\n      "time": "2024-07-10T17:10:49.165Z",\n      "event_id": "d1c47805-a971-4685-8e63-863ba4ecd325",\n      "recipient_client_id": "7af7ab96045640b5a6e4724810145eb9"\n    }\n  ,\n  {\n      "data": {\n        "key": "2196c45f-8721-4587-8136-b92147a5efa6",\n        "source": "indesign",\n        "value": {\n          "jobId": "8b524c70-6779-47f1-ac2a-ce93c23b3f5f",\n          "eventId": "2196c45f-8721-4587-8136-b92147a5efa6",\n          "state": "ASSET_DOWNLOAD_STARTED",\n          "timestamp": 1720631448998\n        }\n      },\n      "id": "740798e9-0827-4efd-a769-78b9a67c0ee8",\n      "source": "urn:uuid:5c8f2d48-a2a7-4d0e-bb49-aabf9a72bd1e",\n      "specversion": "1.0",\n      "type": "ASSET_DOWNLOAD_STARTED",\n      "datacontenttype": "application/json",\n      "time": "2024-07-10T17:10:49.238Z",\n      "event_id": "1bf6e136-967f-47c3-a64e-afe90f6656d0",\n      "recipient_client_id": "7af7ab96045640b5a6e4724810145eb9"\n    }\n]\n')),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"Example Event (single)")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "key": "70db1be2-cdde-4a00-bc41-5acd33db3cc7",\n    "source": "indesign",\n    "value": {\n      "jobId": "8b524c70-6779-47f1-ac2a-ce93c23b3f5f",\n      "eventId": "70db1be2-cdde-4a00-bc41-5acd33db3cc7",\n      "state": "ASSET_DOWNLOAD_FAILED",\n      "timestamp": 1720631449367,\n      "data": {\n        "destination": "doc.indd",\n        "source": {\n          "url": "Presigned url",\n          "type": "AWS/Azure/Dropbox(Optional)"\n        }\n      }\n    }\n  },\n  "id": "7e3a89ce-d1f5-4b55-a9fc-682e3ac535e2",\n  "source": "urn:uuid:5c8f2d48-a2a7-4d0e-bb49-aabf9a72bd1e",\n  "specversion": "1.0",\n  "type": "ASSET_DOWNLOAD_FAILED",\n  "datacontenttype": "application/json",\n  "time": "2024-07-10T17:10:49.509Z",\n  "event_id": "f60a502e-c16b-49c6-b3c1-770666a1921f",\n  "recipient_client_id": "7af7ab96045640b5a6e4724810145eb9"\n}\n\n')),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"Data Field Definitions:")),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Field"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"event_id"),(0,s.mdx)("td",{parentName:"tr",align:null},"Unique UUID generated per event")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"id"),(0,s.mdx)("td",{parentName:"tr",align:null},"Unique UUID generated per event")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"type"),(0,s.mdx)("td",{parentName:"tr",align:null},"Type of event used for event subscription routing")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"source"),(0,s.mdx)("td",{parentName:"tr",align:null},"Context in which an event happened")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"time"),(0,s.mdx)("td",{parentName:"tr",align:null},"Timestamp of the completion of the action")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"data"),(0,s.mdx)("td",{parentName:"tr",align:null},"Event data object")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"jobID"),(0,s.mdx)("td",{parentName:"tr",align:null},"ID of the JOB")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"timestamp"),(0,s.mdx)("td",{parentName:"tr",align:null},"Time stamp in ISO 8601 format when event was triggered")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"state"),(0,s.mdx)("td",{parentName:"tr",align:null},"Tells what this event represents in the sequence of JOB execution")))),(0,s.mdx)("h3",{id:"event-list"},"Event List"),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"Note - This is a snapshot listing of most available events. There may be some events that don't show up or no longer exist.")),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Event state"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"QUEUED"),(0,s.mdx)("td",{parentName:"tr",align:null},"The job is not yet running")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSETS_DOWNLOAD_STARTED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Downloading has started for assets required to run this job")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSET_DOWNLOAD_STARTED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Emitted for individual assets, once for each asset that is downloaded")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSET_SCANNING_STARTED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Scanning the downloaded asset")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSET_DOWNLOAD_COMPLETED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Downloading of an individual asset is completed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSET_SCANNING_COMPLETED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Scanning of an individual asset is completed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSET_DOWNLOAD_FAILED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Individual downloading of an asset has failed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSET_SCANNING_FAILED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Individual scanning of an asset has failed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSETS_DOWNLOAD_COMPLETED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Downloading of all assets is completed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ENGINE_PROCESSING_STARTED"),(0,s.mdx)("td",{parentName:"tr",align:null},"The job was handed over to engine to be processed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"RUNNING"),(0,s.mdx)("td",{parentName:"tr",align:null},"The Engine is still working on the job")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ENGINE_PROCESSING_COMPLETED"),(0,s.mdx)("td",{parentName:"tr",align:null},"The Engine has completed the capability execution")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSETS_UPLOAD_STARTED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Capability generated asset upload started")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSET_UPLOAD_STARTED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Emitted for individual asset upload, once for each asset that starts uploading")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSET_UPLOAD_COMPLETED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Capability generated asset upload completed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSET_UPLOAD_FAILED"),(0,s.mdx)("td",{parentName:"tr",align:null},"One or more capability generated asset upload failed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"ASSETS_UPLOAD_COMPLETED"),(0,s.mdx)("td",{parentName:"tr",align:null},"All asset uploading is completed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"COMPLETED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Job was completed")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"FAILED"),(0,s.mdx)("td",{parentName:"tr",align:null},"Job was failed")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-idcs-idcs-events-data-stream-setup-md-279c281a7d8225bb660f.js.map