import{_ as e,o as a,c as t,e as i}from"./app-84c1d8f6.js";const n={},r=i('<h1 id="zone" tabindex="-1"><a class="header-anchor" href="#zone" aria-hidden="true">#</a> Zone</h1><p>Outputs when one of the configured entities enter or leaves one of the defined zones.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><h3 id="entities" tabindex="-1"><a class="header-anchor" href="#entities" aria-hidden="true">#</a> Entities</h3><ul><li>Type: <code>array</code></li></ul><p>An array of entity ids to monitor for zone changes.</p><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h3><ul><li>Type: <code>string</code></li></ul><p>Set when to check an entity. Either entering or leaving a zone.</p><h3 id="zones" tabindex="-1"><a class="header-anchor" href="#zones" aria-hidden="true">#</a> Zones</h3><ul><li>Type: <code>array</code></li></ul><p>An array of zone ids to check when a configured entity updates.</p><h2 id="outputs" tabindex="-1"><a class="header-anchor" href="#outputs" aria-hidden="true">#</a> Outputs</h2><h3 id="topic" tabindex="-1"><a class="header-anchor" href="#topic" aria-hidden="true">#</a> topic</h3><ul><li>Type: <code>string</code></li></ul><p>The entity id of the device/person that triggered the update.</p><h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> payload</h3><ul><li>Type: <code>string</code></li></ul><p>The state of the device/person entity that triggered the update.</p><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h3><ul><li>Type: <code>object</code></li></ul><p>The entity object of the device/person that triggered the update.</p><h3 id="zones-1" tabindex="-1"><a class="header-anchor" href="#zones-1" aria-hidden="true">#</a> zones</h3><ul><li>Type: <code>array</code></li></ul><p>An array of zone entities where the device/person entity entered/left after an update of location.</p>',25),o=[r];function d(h,c){return a(),t("div",null,o)}const l=e(n,[["render",d],["__file","zone.html.vue"]]);export{l as default};
