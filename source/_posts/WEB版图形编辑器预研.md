title: WEB版图形编辑器预研
date: 2015/4/21 16:46:25
tags: 
- WEB 
- SVG 
- VML 
- 预研 
- 图形编辑器 
categories: 
- WEB 
---

### 现有问题 ###

客户在使用过程中，反应拓扑图页面加载时间过长。
下面做了一个简单的测试，以页面*物理拓扑视图I区*为例，前期加载的主要元素如下
1. applet JAR包（*flow__V1.65.jar* **4.41M**）
2. JS文件，CSS文件，HTML文件（**50K+**） 
<!-- more -->
测试结果如下：
<table>
<tr><th>浏览器</th><th>第一次加载</th><th>以后加载</th></tr>
<tr><th>chrome</th><th>10秒</th><th>3秒</th></tr>
<tr><th>IE8</th><th>12秒</th><th>3秒</th></tr>
</table>
### 目前功能架构 ###
现有的功能，核心是**自定义图元编辑器**，在页面上能够任意的对模型元素进行布局、拖拽、并能够通过与用户或后台的交互(操作)来改变页面元素的表现形态。 
### 技术类别 ###
主要的技术方向有两类：
1. 通过浏览器插件开发
2. 使用浏览器原生支持的技术开发。
下面的表格介绍了，各种技术的优缺点
<table>
<tr><th>技术</th><th>简介</th><th>优点</th><th>缺点</th></tr>
<tr><td>APPLET</td><td>Applet是一种特殊的Java程序，它自身不可以单独运行，而是需要嵌入在一个HTML文件中。</td><td>无兼容性问题</td><td>需要安装插件、对用户要求高、首次加载较慢、</td></tr>
<tr><td>SVG</td><td>可缩放矢量图形（Scalable Vector Graphics，SVG）是基于可扩展标记语言（XML），用于描述二维矢量图形的一种图形格式。SVG由W3C制定，是一个开放标准。</td><td>标准的技术，速度快</td><td>IE低版本不支持</td></tr>
<tr><td>VML</td><td>VML的全称是Vector Markup Language(矢量可标记语言)，矢量的图形，但是VML只是被IE支持。</td><td>IE的标准</td><td>非IE浏览器不支持</td></tr>
<tr><td>CANVAS</td><td>Canvas元素是HTML5的一部分，允许脚本动态渲染位图像。</td><td>标准的技术</td><td>HTML5规范，IE9一下不支持</td></tr>
<tr><td>FLEX</td><td>FLASH的富客户端的解决方案，基于FLASH</td><td>无兼容性问题</td><td>需要装插件</td></tr>
</table>
以上技术浏览器的支持程度
<table>
<tr><th></th><th>APPLET</th><th>SVG</th><th>VML</th><th>CANVAS</th><th>FLEX</th></tr>
<tr><td>IE</td><td>JAVA</td><td>IE9+</td><td>IE5+</td><td>IE9+（IE9-可模拟，但效果差）</td><td>ADOBE</td></tr>
<tr><td>chrome</td><td>JAVA</td><td>支持</td><td>不支持</td><td>支持</td><td>ADOBE</td></tr>
<tr><td>FIREFOX</td><td>JAVA</td><td>支持</td><td>不支持</td><td>支持</td><td>ADOBE</td></tr>
</table>
### 技术框架 ###
####  mxGraph ####
mxGraph是一个JS绘图组件，适用于需要在网页中设计/编辑Workflow/BPM流程图、图表、网络图和普通图形的Web应用程序。
mxGraph提供了可以在**任何浏览器上**，具有完备交互功能的绘图工具。这是唯一的实现了不需要任何插件， 完全由客户端绘制，并且支持几乎所有浏览器（包括IE6）。运行速度也很快。**文档丰富，例子很多**。关键优势如下：
- 以服务器为中心的更新管理
- 无插件无需安装
- 可以部署到任何web服务器
- 使用XML，配置简单
- 用户界面使用HTML，数据用XML交互
- 后台可使用Java, .NET或PHP进行实时分享 
![](http://i.imgur.com/dcFvJn1.gif)
授权信息：
![](http://i.imgur.com/e7WOVFK.gif)
*注：以上价格不含IE9以下浏览器版本* 
>例子：https://www.draw.io/?demo=1
> 
>文档：https://jgraph.github.io/mxgraph
>
>中文官网：http://www.mxgraph.cn/
>
>英文官网：https://jgraph.com/ 
####  strawberry ####
Strawberry是一个提供了可以让用户动态制定Web拓扑图(流程设计器)的Web解决方案,Strawberry是基于 **JavaScript,VML,SVG**等Web技术开发而成,并且支持主流浏览器.IE,火狐,Chrome,Safari等.Strawberry不含有任何三方插件或需要授权的商业项目(Ext等),并且使用时客户端也不需要安装任何插件,方便简洁.
Strawberry当前最新版本为v0.2 beta，以前的版本已经真正的应用到正式生产环境,**稳定可靠**. **Strawberry是开源的项目，对商业友好，可提供源码，文档较弱**
![](http://i.imgur.com/WVXdyzV.gif)
>例子：见本地DEMO
> 
>项目地址：http://code.google.com/p/xiaojw-graph-strawberry
>

####  GooFlow ####
这是一个用来在浏览器上设计流程图的WEB UI组件，**基于Jquery开发**。可用来设计各种引擎的流程图、逻辑流图，数据流图，或者是设计某个系统中需要走流程的功能应用。特点如下：跨浏览器，**可兼容IE7--IE10， FireFox， Chrome， Opera等几大内核的浏览器**，且不需要浏览器再加装任何控件。 （IE7-IE8时，使用VML；IE9以上，FF，OPERA，CHROME，SAFARI上使用SVG） ,对商业友好，文档弱。
![](http://i.imgur.com/4tyozs1.jpg)
>例子：见本地DEMO
> 
>项目地址：http://www.iteye.com/topic/1130290
>
#### TWaver Flex ####
TWaver是美国Serva Software公司的产品，是应用最为广泛的电信专业图形界面开发工具包，在电信行业应用非常广泛。TWaver关注于数据的图形展示，它是面向开发人员的，需要进行二次开发。

TWaver组件产品目前有TWaver Java，TWaver 3D，TWaver Flex，TWaver .NET，TWaver HTML5和TWaver GIS六条分支，各分支都具有统一的核心技术和架构。

**TWaver Flex**是基于**Adobe Flex/Flash平台**技术的专业图形界面开发工具包，是TWaver产品的Flex技术分支。TWaver Flex为传统的电信运营支撑系统提供了全新的富Internet应用（Rich Internet Application，即RIA）解决方案。Flash插件在浏览器的安装率极高，并且**支持所有主流浏览器**。

![](http://i.imgur.com/GS8armi.gif)

*注：国内的图形控件开发商做的好的有多比控件 http://www.duobee.com/*
>例子：http://twaver.servasoft.com/demo/twaver_flex/twaver-flex-online-demo.html
> 
>项目地址：http://twaver.servasoft.com/
>

#### jTopo ####
jTopo（Javascript Topology library)是一款完全基于HTML5 Canvas的关系、拓扑图形化界面开发工具包。
jTopo关注于数据的图形展示，它是面向开发人员的，需要进行二次开发。
使用jTopo很简单，可以快速创建一些关系图、拓扑等相关图形化的展示。只要您的数据之间存在有关联关系，都可以使用jTopo来进行人性化、图形化的展示。jTopo特点：

- 完全基于HTML5 Canvas开发，始终站在开发者的角度设计，API平易近人、几乎简单到了极致。
- 不依赖任何其他库、执行仅需一个Canvas，不污染你的页面、Dom结构和代码命名空间。
- 功能异常强大、灵活，可扩展性极强（为扩展而生），包装一下，就是一款很专业的图形化软件。
- 体积小，压缩后仅几十KB。
- 性能十分优异，可流畅地展示大量数据(经过专业优化过甚至可以展示几十万、百万级别的数据)
- 免费
- 不足：目前文档不够详细，主要通过Demo来熟悉。

![](http://i.imgur.com/1nD2Tio.gif)

>例子：http://www.jtopo.com/demo/pstn.html
> 
>项目地址：http://www.jtopo.com/index.html
>
#### qunee ####
使用HTML5 Canvas技术，绘制清新、流畅的网络图，可用于社交网络图、拓扑图、流程图、地图等需求， JS组件封装，藏繁琐于简洁，轻松构建优雅的互联网应用与企业应用，让数据的在线可视化变得容易。组件特点如下：

- 轻巧、高性能 - 支持上万图元，流畅操作
- 矢量图形 - 支持矢量图形，无极缩放
- 交互体验 - 漫游交互，改进交互事件、支持手持设备
- 注重细节 - GIF动画，丰富渐变，层次控制等
![](http://i.imgur.com/CUNU6i6.gif)
![](http://i.imgur.com/HFQE2Y3.gif)
>例子：http://demo.qunee.com/#Network Organization Chart
> 
>项目地址：http://demo.qunee.com


### 总结 ###
作为图形编辑控件框架，以上框架的对比如下：
<table>
<tr><th>框架/特点</th><th>使用技术</th><th>是否需要插件</th><th>浏览器支持</th><th>文档详尽</th><th>显示效果</th><th>收费情况</th><th>产品成熟度</th><th>二次开发工作量</th></tr>
<tr><th>mxGraph</th><th>VML/SVG</th><th>否</th><th>所有</th><th>详细</th><th>美观</th><th>收费</th><th>高</th><th>一般</th></tr>
<tr><th>strawberry</th><th>VML/SVG</th><th>否</th><th>所有</th><th>弱</th><th>一般</th><th>无</th><th>一般</th><th>高</th></tr>
<tr><th>GooFlow</th><th>VML/SVG</th><th>否</th><th>所有</th><th>弱</th><th>一般</th><th>无</th><th>一般</th><th>高</th></tr>
<tr><th>TWaver Flex</th><th>FLEX</th><th>需要</th><th>所有</th><th>详细</th><th>美观</th><th>收费</th><th>高</th><th>一般</th></tr>
<tr><th>jTopo</th><th>HTML5/CANVAS</th><th>否</th><th>IE9+，chrome，firefox等</th><th>详细</th><th>一般+</th><th>无</th><th>高</th><th>一般</th></th></tr>
<tr><th>qunee</th><th>HTML5/CANVAS</th><th>否</th><th>IE9+，chrome，firefox等</th><th>详细</th><th>美观</th><th>收费</th><th>高</th><th>一般</th></th></tr>


</table>

### 参考 ###
SVG、CANVAS浏览器支持明细

![](http://dl.iteye.com/upload/picture/pic/110261/a89d91b9-5014-352f-a813-0e01c2583123.jpg)