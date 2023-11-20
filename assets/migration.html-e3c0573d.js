import{_ as e,r as p,o as c,c as r,a as n,b as s,d as o,e as a}from"./app-84c1d8f6.js";const u={},l=a('<h1 id="migration" tabindex="-1"><a class="header-anchor" href="#migration" aria-hidden="true">#</a> Migration</h1><h2 id="current-state-node-output" tabindex="-1"><a class="header-anchor" href="#current-state-node-output" aria-hidden="true">#</a> Current-State Node Output</h2><p>Unchecking &#39;Override Topic&#39; and &#39;Override Payload&#39; doesn&#39;t work in node-red-contrib-home-assistant v0.3.2. It always overwrites <code>msg.topic</code> and <code>msg.payload</code>. If you have current-state nodes where you have unchecked the &#39;Override Payload&#39; with node-red-contrib-home-assistant-websocket it will stop overriding payload and put the state object into <code>msg.data</code></p><h2 id="poll-state-node-output" tabindex="-1"><a class="header-anchor" href="#poll-state-node-output" aria-hidden="true">#</a> Poll-State Node Output</h2><p><code>msg.payload.data</code> moved to <code>msg.data</code></p><p><code>msg.payload</code> becomes just the state of the state object <code>msg.payload.data.state</code> =&gt; <code>msg.payload</code></p><p><code>msg.payload.dateChanged</code> removed</p><p><code>msg.timeSinceChanged</code> and <code>msg.timeSinceChangedMs</code> moved into <code>msg.data</code></p>',8),i={href:"https://github.com/AYapejian/node-red-contrib-home-assistant",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;topic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sun.sun&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;payload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;timeSinceChanged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4 hours ago&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timeSinceChangedMs&quot;</span><span class="token operator">:</span> <span class="token number">15342567</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dateChanged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018-10-11T14:21:01.004Z&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;entity_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sun.sun&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;above_horizon&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;last_changed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018-10-11T14:21:01.004183+00:00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;last_updated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018-10-11T18:36:30.002985+00:00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;context&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_msgid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;345fd403.6e71ec&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),k={href:"https://github.com/zachowj/node-red-contrib-home-assistant-websocket",target:"_blank",rel:"noopener noreferrer"},q=a(`<div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;topic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sun.sun&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;payload&quot;</span><span class="token operator">:</span> <span class="token string">&quot;above_horizon&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;entity_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sun.sun&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;above_horizon&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timeSinceChanged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5 hours ago&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timeSinceChangedMs&quot;</span><span class="token operator">:</span> <span class="token number">16236433</span>
    <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_changed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018-10-11T14:21:01.004183+00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_updated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018-10-11T18:51:30.002737+00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;context&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_msgid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5071255c.ad802c&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1);function h(g,m){const t=p("ExternalLinkIcon");return c(),r("div",null,[l,n("p",null,[n("a",i,[s("node-red-contrib-home-assistant"),o(t)]),s(" v0.3.2")]),d,n("p",null,[n("a",k,[s("node-red-contrib-home-assistant-websocket"),o(t)]),s(" v0.1.1")]),q])}const _=e(u,[["render",h],["__file","migration.html.vue"]]);export{_ as default};
