<template><div><h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h1>
<NpmBadge package="@vuepress/bundler-vite" /><p>Vite 打包工具是由 <a href="https://www.npmjs.com/package/@vuepress/bundler-vite" target="_blank" rel="noopener noreferrer">@vuepress/bundler-vite<ExternalLinkIcon/></a> 包提供的。它是 <a href="https://www.npmjs.com/package/vuepress" target="_blank" rel="noopener noreferrer">vuepress<ExternalLinkIcon/></a> 包的依赖之一，当然你也可以单独安装它：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>
<p>Vite 打包工具的配置项：</p>
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
<p>详情：</p>
<p>接收 Vite 的所有配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://cn.vitejs.dev/config/" target="_blank" rel="noopener noreferrer">Vite &gt; Config<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="vuepluginoptions" tabindex="-1"><a class="header-anchor" href="#vuepluginoptions" aria-hidden="true">#</a> vuePluginOptions</h3>
<ul>
<li>
<p>详情：</p>
<p>接收 <a href="https://www.npmjs.com/package/@vitejs/plugin-vue" target="_blank" rel="noopener noreferrer">@vitejs/plugin-vue<ExternalLinkIcon/></a> 的所有配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://cn.vitejs.dev/plugins/#vitejsplugin-vue" target="_blank" rel="noopener noreferrer">Vite &gt; 插件 &gt; 官方插件<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</div></template>


