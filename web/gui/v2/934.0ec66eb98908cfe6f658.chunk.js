!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d4462c48-6e8e-4831-807f-dd8af511f691",e._sentryDebugIdIdentifier="sentry-dbid-d4462c48-6e8e-4831-807f-dd8af511f691")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"ed021627f8d20b39f0609a37950c1a1e11c33d03"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[934],{64934:function(e,t,n){n.r(t),n.d(t,{Trust:function(){return c}});n(33948),n(31672),n(2490),n(59461),n(15306);var o=n(67294),a=n(17563),r=n(22195),d=n(1043),l=n(78266);const c=()=>{const[e,t]=(0,o.useMemo)((()=>{const{search:e}=window.location,{redirect_uri:t,agent_uri:n}=a.parse(e);return[t,n]})),[n,c,i]=(0,d.So)(),[u,s]=(0,d.aJ)({},[n]);return(0,o.useEffect)((()=>{const n=u.find((e=>e.url===t));n&&location.replace("/api/v1/auth/account/origins/".concat(n.id,"/redirect?redirect_uri=").concat(encodeURIComponent(e),"&agent_uri=").concat(encodeURIComponent(t)))}),[e,t,u]),o.createElement(r.Layer,{full:!0},o.createElement(r.Flex,{"data-testid":"trust",alignItems:"center",justifyContent:"center",column:!0,width:"100%",height:"100%",background:"mainBackground",gap:4},o.createElement(l.H,{animate:i}),o.createElement(r.Text,{textAlign:"center"},"Do you trust ",o.createElement(r.Text,{strong:!0},t),"?"),o.createElement(r.Flex,{column:!0,gap:2,alignItems:"center"},o.createElement(r.TextBig,null,"Authorizing this URL will allow it to request your Netdata Cloud data."),o.createElement(r.Flex,{gap:2},o.createElement(r.Button,{flavour:"borderless",onClick:()=>window.location.replace(decodeURIComponent(e)),disabled:s||i},"Cancel"),o.createElement(r.Button,{onClick:()=>c(t),disabled:s||i,isLoading:s||i},"Yes")))))};t.default=c}}]);