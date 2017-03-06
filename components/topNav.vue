<template>
    <ul>
        <li><router-link to="/userInfo"><img src="../img/user.svg"><span>个人简介</span></router-link></li>
        <li><router-link to="/proSkill"><img src="../img/hammer.svg"><span>专业技能</span></router-link></li>
        <li><router-link to="/experience"><img src="../img/EX.svg"><span>项目经验</span></router-link></li>
        <li><router-link to="/workEx"><img src="../img/work.svg"><span>工作经验</span></router-link></li>
    </ul>
</template>
<style>
    li a{
        text-decoration: none;
    }
    ul{
        width: 100%;
        height: 4.5rem;
    }
    ul li{
        width: 20%;
        height: inherit;
        margin-left: 2%;
        display: inline-block;
        background: transparent;
        border-radius: 0 0 10px 10px;
    }
    ul li:hover{
         background:#FC615D;
        cursor: pointer;
        color: #fff
    }
    ul li img{
        width: 1.5rem;
        height: 1.5rem;
        margin: .5rem 5.5rem 0 5.5rem;
    }
    ul li span{
        display: block;
        width: 100%;
        height: 1.5rem;
        color: #ecf0f1;
        text-align: center;
        font-size: 1.1rem;    
    }
</style>