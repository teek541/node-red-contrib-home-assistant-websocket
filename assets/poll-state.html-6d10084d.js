import{_ as d,r as n,o as l,c as h,a as e,b as t,d as a,w as c,e as i}from"./app-84c1d8f6.js";const u={},p=e("h1",{id:"poll-state",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#poll-state","aria-hidden":"true"},"#"),t(" Poll State")],-1),f=e("p",null,"Polls for the state at regular intervals, optionally also outputting at the start and when the state changes. Useful for either alert for non-communicating devices (time since change > 1 day for example) or dashboard graphs with consistent interval charts",-1),m=e("h2",{id:"configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),t(" Configuration")],-1),_={id:"entity-id",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#entity-id","aria-hidden":"true"},"#",-1),b=i('<p>The entity id of the entity to poll for.</p><h3 id="update-interval" tabindex="-1"><a class="header-anchor" href="#update-interval" aria-hidden="true">#</a> Update Interval</h3><ul><li>Type: <code>number</code></li></ul><p>The amount of time between checking/sending updates.</p><h3 id="if-state" tabindex="-1"><a class="header-anchor" href="#if-state" aria-hidden="true">#</a> If State</h3><ul><li>Type: <code>string</code></li></ul><p>If the conditional statement is evaluated as true send the message to the first output otherwise send it to the second output. If blank there will only be one output.</p><p><strong>Also see:</strong></p>',8),y=i('<h3 id="state-type" tabindex="-1"><a class="header-anchor" href="#state-type" aria-hidden="true">#</a> State Type</h3><ul><li>Type: <code>string</code></li></ul><p>Convert the state of the entity to the selected type. Boolean will be converted to true based on if the string is equal by default to (y|yes|true|on|home|open). Original value stored in msg.data.original_state</p><h3 id="output-initially" tabindex="-1"><a class="header-anchor" href="#output-initially" aria-hidden="true">#</a> Output Initially</h3><ul><li>Type: <code>boolean</code></li></ul><p>Output once on startup/deploy then on each interval</p><h3 id="expose-to-home-assistant" tabindex="-1"><a class="header-anchor" href="#expose-to-home-assistant" aria-hidden="true">#</a> Expose to Home Assistant</h3><ul><li>Type: <code>boolean</code></li></ul>',8),x={href:"https://github.com/zachowj/hass-node-red",target:"_blank",rel:"noopener noreferrer"},T=i('<h2 id="outputs" tabindex="-1"><a class="header-anchor" href="#outputs" aria-hidden="true">#</a> Outputs</h2><h3 id="topic" tabindex="-1"><a class="header-anchor" href="#topic" aria-hidden="true">#</a> topic</h3><ul><li>Type: <code>string</code></li></ul><p>entity_id of changed entity</p><h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> payload</h3><ul><li>Type: <code>object</code></li></ul><p>The last known state of the entity</p><h3 id="data-timesincechanged" tabindex="-1"><a class="header-anchor" href="#data-timesincechanged" aria-hidden="true">#</a> data.timeSinceChanged</h3><ul><li>Type: <code>string</code></li></ul><p>Human readable format string of time since last updated, example &quot;1 hour ago&quot;</p><h3 id="data-timesincechangedms" tabindex="-1"><a class="header-anchor" href="#data-timesincechangedms" aria-hidden="true">#</a> data.timeSinceChangedMs</h3><ul><li>Type: <code>number</code></li></ul><p>Number of milliseconds since last changed</p><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>',14),v={href:"https://home-assistant.io/docs/configuration/state_object/",target:"_blank",rel:"noopener noreferrer"};function w(k,C){const s=n("Badge"),r=n("RouterLink"),o=n("ExternalLinkIcon");return l(),h("div",null,[p,f,m,e("h3",_,[g,t(" Entity ID "),a(s,{text:"required"})]),b,e("ul",null,[e("li",null,[a(r,{to:"/guide/conditionals.html"},{default:c(()=>[t("Conditionals")]),_:1})])]),y,e("p",null,[t("Creates a switch within Home Assistant to enable/disable this node. This feature requires "),e("a",x,[t("Node-RED custom integration"),a(o)]),t(" to be installed in Home Assistant")]),T,e("ul",null,[e("li",null,[e("a",v,[t("Home Assistant State Objects"),a(o)])])])])}const S=d(u,[["render",w],["__file","poll-state.html.vue"]]);export{S as default};
