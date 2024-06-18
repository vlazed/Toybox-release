"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Style Data Structure",l={unversionedId:"tutorial-fighter/data-structure",id:"tutorial-fighter/data-structure",title:"Style Data Structure",description:"The fighter style is composed of two sections: the first section is the fighter stats, and the second section is the fighter tracks",source:"@site/docs/tutorial-fighter/data-structure.md",sourceDirName:"tutorial-fighter",slug:"/tutorial-fighter/data-structure",permalink:"/Toybox-release/docs/tutorial-fighter/data-structure",draft:!1,editUrl:"https://github.com/vlazed/Toybox-release/edit/main/docs/tutorial-fighter/data-structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Fighter Navigation",permalink:"/Toybox-release/docs/tutorial-fighter/navigation"},next:{title:"Attack Animations",permalink:"/Toybox-release/docs/tutorial-fighter/attack-animations"}},s={},c=[{value:"Fighter Stats",id:"fighter-stats",level:2},{value:"Fighter Tracks",id:"fighter-tracks",level:2}],h={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"style-data-structure"},"Style Data Structure"),(0,r.kt)("p",null,"The fighter style is composed of two sections: the first section is the fighter stats, and the second section is the fighter tracks"),(0,r.kt)("h2",{id:"fighter-stats"},"Fighter Stats"),(0,r.kt)("p",null,"The fighter stats has the following data structure (taken from Brawler with damage values hashed tag)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    DamageSet = {\n        RightPunch = ##,\n        LeftPunch = ##,\n        RightKick = ##,\n        LeftKick = ##,\n        Trip = ##,\n        ThrowForward = ##,\n        ThrowBackward = ##,\n    },\n    AttackLimbs = {\n        RightPunch = "Right Arm",\n        LeftPunch = "Left Arm",\n        RightKick = "Right Leg",\n        LeftKick = "Left Leg",\n        Trip = "Right Leg",\n        Grab = "Right Arm",\n    },\n    AttackLimbType = {\n        RightPunch = "General",\n        LeftPunch = "General",\n        RightKick = "General",\n        LeftKick = "General",\n        Trip = "General",\n        Grab = "General",\n    },\n    BlockHealRate = ##, -- health per second\n    ParryWindow = ##,\n    BlockCooldownWindow = ##,\n    Combos = require(script.Combos),\n}\n')),(0,r.kt)("p",null,"We will get to combos later. Notice that each key in the fighter stats generally have the same dictionary with the following keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    RightPunch: T,\n    LeftPunch: T,\n    RightKick: T,\n    LeftKick: T,\n    Trip: T,\n    ThrowForwad: T,\n    ThrowBackward: T\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T")," denotes the type that the values of these keys may take on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"DamageSet"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),", and it represents how much damage each of these attacks may deal "),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"AttackLimbs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," which names the limb that these attacks will use"),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"AttackLimbType"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," which names the material of these limbs. Different materials produce different sounds")),(0,r.kt)("p",null,"The other stats are listed below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BlockHealRate")," is the amount of health per second when not in the blocking state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ParryWindow")," is the time in seconds which a player can parry an attack. We recommend a tiny window for parrying"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BlockCooldownWindow")," is the time in seconds which a player cannot return to the blocking state after exiting from it. This prevents attempts to spam parrying"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Combos")," is a table where the keys are the inputs required to execute the combo, and the value is a table with the animation id and the damage dealt.")),(0,r.kt)("h2",{id:"fighter-tracks"},"Fighter Tracks"),(0,r.kt)("p",null,"The fighter tracks has the following data structure (taken from Brawler)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    LocomotionSet = {\n        WalkForward = getPositionData(##, -multiplier * Vector2.yAxis),\n        WalkBackward = getPositionData(##, multiplier * Vector2.yAxis),\n        WalkRight = getPositionData(##, multiplier * Vector2.xAxis),\n        WalkLeft = getPositionData(##, -multiplier * Vector2.xAxis),\n        Idle = getPositionData(##, multiplier * Vector2.zero),\n    },\n    AttackTrackSet = {\n        RightPunch = ##,\n        LeftPunch = ##,\n        RightKick = ##,\n        LeftKick = ##,\n        Trip = ##,\n        Grab = ##,\n        ThrowForward = ##,\n        ThrowBackward = ##,\n    },\n    FlinchTrackSet = {\n        RightPunch = ##,\n        LeftPunch = ##,\n        RightKick = ##,\n        LeftKick = ##,\n        Trip = ##,\n        Grab = ##,\n        ThrowForward = ##,\n        ThrowBackward = ##,\n    },\n    Block = ##,\n    Parry = ##,\n}\n")),(0,r.kt)("p",null,"Every number in the fighter tracks is an animation id. ",(0,r.kt)("inlineCode",{parentName:"p"},"AttackTrackSet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FlinchTrackSet")," are the animation ids for the respective attacks and flinches. These tracks complement each other: for example, a right punch to the face should produce a flinch which the head is thrown back."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LocomotionSet")," denotes the different animations to play when a player walks in a direction relative to the camera (similarly in other words, ",(0,r.kt)("strong",{parentName:"p"},"when shift-locked"),"). The second argument in ",(0,r.kt)("inlineCode",{parentName:"p"},"getPositionData")," is a point in an animation blendspace, which the ",(0,r.kt)("inlineCode",{parentName:"p"},"DirectionalMovement")," class uses to blend between the different animations."),(0,r.kt)("p",null,"When making a locomotion for a fighter, make sure that every animation has the same pace: otherwise, animations may play out of sync"))}u.isMDXComponent=!0}}]);