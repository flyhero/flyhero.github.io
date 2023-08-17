<template><div><h1 id="theme-api" tabindex="-1"><a class="header-anchor" href="#theme-api" aria-hidden="true">#</a> Theme API</h1>
<NpmBadge package="@vuepress/core" /><p>VuePress theme also works as a plugin, so Theme API can accept all the options of <RouterLink to="/reference/plugin-api.html">Plugin API</RouterLink> with following differences.</p>
<h2 id="basic-options" tabindex="-1"><a class="header-anchor" href="#basic-options" aria-hidden="true">#</a> Basic Options</h2>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Name of the theme.</p>
<p>It should follow the naming convention, and ensure consistency with the package name when publishing to NPM:</p>
<ul>
<li>Non-scoped: <code v-pre>vuepress-theme-foo</code></li>
<li>Scoped: <code v-pre>@org/vuepress-theme-foo</code></li>
</ul>
</li>
</ul>
<h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3>
<ul>
<li>
<p>Details:</p>
<p>A theme should never be used multiple times, so this option is not supported in theme API.</p>
</li>
</ul>
<h2 id="theme-specific-options" tabindex="-1"><a class="header-anchor" href="#theme-specific-options" aria-hidden="true">#</a> Theme Specific Options</h2>
<h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3>
<ul>
<li>
<p>Type: <code v-pre>Theme</code></p>
</li>
<li>
<p>Details:</p>
<p>The theme to inherit.</p>
<p>All of the Theme API of the parent theme will be inherited, but the child theme will not override the parent theme directly. Theme specific options will override according to following rules:</p>
<ul>
<li><a href="#plugins">plugins</a>: When a same plugin is used in both child and parent theme, if the plugin does not support to be used multiple times, only the one used in the child theme will take effect.</li>
<li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>: Child theme templates will override parent theme templates.</li>
</ul>
<p>Multi-level inheritance is supported, i.e. theme B could be extended from theme A, and then theme C could be extended from theme B. In other words, a theme could have a parent theme, a grandparent theme and so on.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// inherit the default theme</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>
<ul>
<li>
<p>Type: <code v-pre>(Plugin | Plugin[])[]</code></p>
</li>
<li>
<p>Details:</p>
<p>Plugins to use in the theme.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/reference/config.html#plugins">Config &gt; plugins</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="templatebuild" tabindex="-1"><a class="header-anchor" href="#templatebuild" aria-hidden="true">#</a> templateBuild</h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the HTML template for build.</p>
<p>It would override the default value of <RouterLink to="/reference/config.html#templatebuild">templateBuild</RouterLink>, but could be overridden by user config.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/reference/config.html#templatebuild">Config &gt; templateBuild</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="templatedev" tabindex="-1"><a class="header-anchor" href="#templatedev" aria-hidden="true">#</a> templateDev</h3>
<ul>
<li>
<p>Type: <code v-pre>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify the HTML template for dev.</p>
<p>It would override the default value of <RouterLink to="/reference/config.html#templatedev">templateDev</RouterLink>, but could be overridden by user config.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/reference/config.html#templatedev">Config &gt; templateDev</RouterLink></li>
</ul>
</li>
</ul>
</div></template>


