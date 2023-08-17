<template><div><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>VuePress v2 目前仍处于 <code v-pre>beta</code> 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，很可能会在 Minor 版本中发生 Breaking Changes 。因此，在每次更新 beta 版本之后，请一定要仔细阅读 <a href="https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">更新日志<ExternalLinkIcon/></a>。</p>
</div>
<h2 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h2>
<ul>
<li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js v16.19.0+<ExternalLinkIcon/></a></li>
<li><a href="https://classic.yarnpkg.com/zh-Hans/" target="_blank" rel="noopener noreferrer">Yarn v1 classic<ExternalLinkIcon/></a> （可选）</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>使用 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm<ExternalLinkIcon/></a> 时，你可能需要安装 <code v-pre>vue</code> 和 <code v-pre>@vuepress/client</code> 作为 peer-dependencies ，即 <code v-pre>pnpm add -D vue @vuepress/client@next</code> 。</li>
<li>使用 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">yarn 2<ExternalLinkIcon/></a> 时，你需要在 <a href="https://yarnpkg.com/configuration/yarnrc#nodeLinker" target="_blank" rel="noopener noreferrer"><code v-pre>.yarnrc.yml</code><ExternalLinkIcon/></a> 文件中设置 <code v-pre>nodeLinker: 'node-modules'</code> 。</li>
</ul>
</div>
<h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2>
<p>这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。</p>
<ul>
<li><strong>步骤 1</strong>: 创建并进入一个新目录</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 2</strong>: 初始化项目</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="PNPM" active>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">pnpm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="YARN">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤 3</strong>: 将 VuePress 安装为本地依赖</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="PNPM" active>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next @vuepress/client@next vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="YARN">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li><strong>步骤 4</strong>: 在 <code v-pre>package.json</code> 中添加一些 <a href="https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts" target="_blank" rel="noopener noreferrer">scripts<ExternalLinkIcon/></a></li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 5</strong>: 将默认的临时目录和缓存目录添加到 <code v-pre>.gitignore</code> 文件中</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">'node_modules'</span> <span class="token operator">>></span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">'.temp'</span> <span class="token operator">>></span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">'.cache'</span> <span class="token operator">>></span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 6</strong>: 创建你的第一篇文档</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello VuePress'</span> <span class="token operator">></span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 7</strong>: 在本地启动服务器来开发你的文档网站</li>
</ul>
<CodeGroup>
  <CodeGroupItem title="PNPM" active>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="YARN">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<p>VuePress 会在 <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080<ExternalLinkIcon/></a> 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。</p>
<p>现在，你应该已经有了一个简单可用的 VuePress 文档网站。接下来，了解一下 VuePress <RouterLink to="/zh/guide/configuration.html">配置</RouterLink> 相关的内容。</p>
</div></template>


