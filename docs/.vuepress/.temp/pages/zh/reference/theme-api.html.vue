<template><div><h1 id="主题-api" tabindex="-1"><a class="header-anchor" href="#主题-api" aria-hidden="true">#</a> 主题 API</h1>
<NpmBadge package="@vuepress/core" /><p>VuePress 主题同样是一个插件，因此主题 API 可以接收 <RouterLink to="/zh/reference/plugin-api.html">插件 API</RouterLink> 的所有选项，但存在以下差别：</p>
<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项" aria-hidden="true">#</a> 基础配置项</h2>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>主题的名称。</p>
<p>它应遵从如下命名约定，并且在发布到 NPM 时应确保和包名保持一致：</p>
<ul>
<li>非 Scoped: <code v-pre>vuepress-theme-foo</code></li>
<li>Scoped: <code v-pre>@org/vuepress-theme-foo</code></li>
</ul>
</li>
</ul>
<h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3>
<ul>
<li>
<p>详情：</p>
<p>主题永远不能被多次使用，因此主题 API 不支持该配置项。</p>
</li>
</ul>
<h2 id="主题特定配置项" tabindex="-1"><a class="header-anchor" href="#主题特定配置项" aria-hidden="true">#</a> 主题特定配置项</h2>
<h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3>
<ul>
<li>
<p>类型： <code v-pre>Theme</code></p>
</li>
<li>
<p>详情：</p>
<p>要继承的主题。</p>
<p>父主题的所有主题 API 都会被继承，但是子主题不会直接覆盖父主题。主题特定的配置项会根据以下规则进行覆盖：</p>
<ul>
<li><a href="#plugins">plugins</a>： 当同一个插件在子主题和父主题中都被使用时，如果该插件不支持被多次使用，那么只有在子主题中使用的插件会生效。</li>
<li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>： 子主题的模板会覆盖父主题的模板。</li>
</ul>
<p>支持多级继承，即主题 B 可以继承主题 A ，然后主题 C 可以继承主题 B 。换句话说，一个主题可以有一个父主题、一个祖父主题等等。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/utils'</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 继承默认主题</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>
<ul>
<li>
<p>类型： <code v-pre>(Plugin | Plugin[])[]</code></p>
</li>
<li>
<p>详情：</p>
<p>主题中要使用的插件。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/zh/reference/config.html#plugins">配置 &gt; plugins</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="templatebuild" tabindex="-1"><a class="header-anchor" href="#templatebuild" aria-hidden="true">#</a> templateBuild</h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>指定构建时使用的 HTML 模板。</p>
<p>它会覆盖 <RouterLink to="/zh/reference/config.html#templatebuild">templateBuild</RouterLink> 的默认值，但是也会被用户配置覆盖。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/zh/reference/config.html#templatebuild">配置 &gt; templateBuild</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="templatedev" tabindex="-1"><a class="header-anchor" href="#templatedev" aria-hidden="true">#</a> templateDev</h3>
<ul>
<li>
<p>类型： <code v-pre>string</code></p>
</li>
<li>
<p>详情：</p>
<p>指定开发时使用的 HTML 模板。</p>
<p>它会覆盖 <RouterLink to="/zh/reference/config.html#templatedev">templateDev</RouterLink> 的默认值，但是也会被用户配置覆盖。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/zh/reference/config.html#templatedev">配置 &gt; templateDev</RouterLink></li>
</ul>
</li>
</ul>
</div></template>


