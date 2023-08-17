<template><div><h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h1>
<NpmBadge package="@vuepress/bundler-vite" /><p>Vite bundler is provided by <a href="https://www.npmjs.com/package/@vuepress/bundler-vite" target="_blank" rel="noopener noreferrer">@vuepress/bundler-vite<ExternalLinkIcon/></a> package. It is a dependency of the <a href="https://www.npmjs.com/package/vuepress" target="_blank" rel="noopener noreferrer">vuepress<ExternalLinkIcon/></a> package, and you can also install it separately.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>
<p>Reference of vite bundler options:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/bundler-vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/cli'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    viteOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vuePluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="viteoptions" tabindex="-1"><a class="header-anchor" href="#viteoptions" aria-hidden="true">#</a> viteOptions</h3>
<ul>
<li>
<p>Details:</p>
<p>Accepts all options of Vite.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://vitejs.dev/config/" target="_blank" rel="noopener noreferrer">Vite &gt; Config<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="vuepluginoptions" tabindex="-1"><a class="header-anchor" href="#vuepluginoptions" aria-hidden="true">#</a> vuePluginOptions</h3>
<ul>
<li>
<p>Details:</p>
<p>Accepts all options of <a href="https://www.npmjs.com/package/@vitejs/plugin-vue" target="_blank" rel="noopener noreferrer">@vitejs/plugin-vue<ExternalLinkIcon/></a>.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://vitejs.dev/plugins/#vitejs-plugin-vue" target="_blank" rel="noopener noreferrer">Vite &gt; Plugins &gt; Official Plugins<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</div></template>


