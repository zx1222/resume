<template>
    <div class="wrapper">
        <div class="userPhoto">
            <img src="../img/a5.jpg">
        </div>
        <div class="basicInfo">
            <div class="left">
                <p>姓名：张鑫</p>
                <p>毕业学校：鲁东大学</p>
                <p>专业：信息管理与信息系统+统计学</p>
            </div>
           <div class="right">
                <p>毕业时间：2016.06</p>
                <p>手机：15506656802</p>
                <p>邮箱：15506656802@163.com</p>    
           </div>
           <p>求职意向：web前端开发</p>
        </div>
        <div class="briefIndro">
            <h3>个人简介</h3>
            <p>有将近一年的前端开发经验，对基础的js,css(css3),html(h5)熟练掌握，对http协议有较深入的个人理解，掌握主流的UI框架入bootstrap，semantic，会使用包管理工具及适合项目的构建工具结合框架实现前端自动化提高开发效率及降低后期维护成本，有模块化开发意识，代码风格简洁工整，合理嵌套，布局优雅。热爱所选择的行业，踏实前进。</p>
        </div>
    </div>

</template>
<style>
    .wrapper{
        padding-top: 1rem;
        -webkit-transition: 1s;
    }
    .userPhoto {
        width: 7rem;
        height:7rem;
        margin: 0 auto;
    }
    .userPhoto img{
        width: 100%;
        height:100%;
        margin: 0 auto;
    }
    .basicInfo{
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        height: auto;
        overflow: hidden;
        border-bottom: 2px solid aliceblue;
    }
    .basicInfo .left{
        width: 50%;
        height: auto;
        float: left;
    }
    .basicInfo .right{
        width: 50%;
        height: auto;
        float: right;
    }
    .basicInfo  p{
        text-align: center;
        color: aliceblue;
    }
    .briefIndro{
    width: 100%;
    height: auto;
    }
    .briefIndro h3{
        color: aliceblue;
        font-weight: 500;
        text-align: center;
    }
    .briefIndro p{
/*        font-size: .9rem;*/
        color: aliceblue;
        text-align: center;
    }

</style>