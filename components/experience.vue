<template>
    <div class="wrapper">
        <div class="project">
        <span>项目名称:中酒云图管理系统</span>
        <p>
            <span>项目简述：</span> 中酒云图是面向酒企经销商的酒水产业链的 CRM 系统 连接了酒
            厂、经销商和终端门店的一体化平台.
            系统采用.NET MVC 框架开发，包含信息管理，图片上传、终端管理、报表分析，云单，导
            入导出等功能。
            </br>
            <span>责任描述：</span>  参与系统改版前端重构。
            原系统没有实现前后端分离，在开发和系统拓展上有诸多弊端。新版系统采用
            angularJs 框架开发，通过 rest 接口与后端进行交互。重构过程中
            将原有功能抽象成模块，对 js 代码进行封装。展示上用 bootstrap 框架对原
            有页面进行全面改造，使布局更合理，样式更美观。
        </p>
    </div>
     <div class="project">
        <span>项目名称:基于 Spring MVC 的 web 移动社交网站</span>
        <p>
            <span>项目简述：</span> 移动web的社交平台 主要功能有文章的编辑、发布、建站、评论、点赞等
            </br>
            <span>责任描述：</span> 责任描述：在老师的实验室接手的项目，项目中负责 web 移动页面
                            的设计与开发，通过与 RESTful 接口交互加载数据完成登录注册，文章展示，
                            留言点赞等交互功能。移动 web 页面利用原生 html、css、js 实现，通过计算屏幕尺寸 ppi 和 css
                            媒体查询实现手机屏幕的适配。
                            后台管理系统的页面采用基于 bootstrap 的前端框架 AdminLET 以及一些流行
                            的前端组件。
        </p>
    </div>
    </div>
</template>
<style>
    .project{
        width: 100%;
        box-sizing: border-box;
        padding: 0 1rem;
        height: auto;
    }
    .project{
        color: aliceblue;
    }
    .project>span{
        font-size: 1.2rem;
    }
    .project p span{
        color: #000;
    }
    
</style>