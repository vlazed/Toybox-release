"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},a="Writing Ink Files",l={unversionedId:"tutorial-commu/writing-ink-files",id:"tutorial-commu/writing-ink-files",title:"Writing Ink Files",description:"Rink is a wrapper around a pure Lua ink parser, pink. Rink reads ink files, which are .txt files, from StringValues, where the Value contains the ink text file contents",source:"@site/docs/tutorial-commu/writing-ink-files.md",sourceDirName:"tutorial-commu",slug:"/tutorial-commu/writing-ink-files",permalink:"/projectName/docs/tutorial-commu/writing-ink-files",draft:!1,editUrl:"https://github.com/vlazed/Toybox-release/edit/main/docs/tutorial-commu/writing-ink-files.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Dialogue Navigation",permalink:"/projectName/docs/tutorial-commu/navigation"},next:{title:"Playing Ink Files",permalink:"/projectName/docs/tutorial-commu/playing-ink-files"}},s={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-ink-files"},"Writing Ink Files"),(0,i.kt)("p",null,"Rink is a wrapper around a pure Lua ink parser, pink. Rink reads ink files, which are ",(0,i.kt)("inlineCode",{parentName:"p"},".txt")," files, from ",(0,i.kt)("inlineCode",{parentName:"p"},"StringValues"),", where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," contains the ink text file contents"),(0,i.kt)("p",null,"The pink parser is still in-development. The following features are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Knots"),(0,i.kt)("li",{parentName:"ul"},"Choices"),(0,i.kt)("li",{parentName:"ul"},"Variables (Variables from outside ink are not set until after choice selection)"),(0,i.kt)("li",{parentName:"ul"},"Shuffles")),(0,i.kt)("p",null,"We recommend following this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md"},"guide")," to understand how to write ink files. "),(0,i.kt)("p",null,"The following is a template ink file to use for writing ink dialogue for the Toybox. We stress the following styles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All ink files after file tags and variables must start with ",(0,i.kt)("inlineCode",{parentName:"li"},"-> start"),", followed by the knot ",(0,i.kt)("inlineCode",{parentName:"li"},"=== start ==="),". "),(0,i.kt)("li",{parentName:"ul"},"Close all knots with ",(0,i.kt)("inlineCode",{parentName:"li"},"-> END"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'VAR player_name = "NO_NAME"\n\n-> start \n\n=== start ===\nHello... # speak Creepy them\nThis is fallback dialogue.  # dummy\n    -> choices\n\n=== choices ===\n*   [Uh oh]\n    -> conclusion\n*   [2]\n    SPOOKY\n    4\n    ME\n    -> conclusion\n\n=== conclusion ===\nIf you see this dialogue, please let the developer know. # start\nGoodbye {player_name} # speak 0 them\n\n\n-> END\n')))}m.isMDXComponent=!0}}]);