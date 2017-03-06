
<template>
 <div class="wrapper">
    <span class="title">前端技能</span>
   <div class="canvasBox">
        <div class="skill">
        <canvas id="myChart1" width="10" height="10"></canvas>
   </div>
   <div class="skill">
        <canvas id="myChart2" width="10" height="10"></canvas>
   </div>
   </div>
   <span class="title">工具</span>
   <div class="canvasBox">
       <div class="skill">
        <canvas id="myChart3" width="10" height="10"></canvas>
   </div>
   <div class="skill">
        <canvas id="myChart4" width="10" height="10"></canvas>
   </div>
   </div>
   <span class="title">补充说明</span>
   <ol>
       <li>熟悉w3c规范，了解语义化，熟练掌握DOM、BOM、AJAX、JSON</li>
       <li>注重代码规范性，布局弹性，结构合理，在适配的时候尽量做到单一样式修改即可</li>
       <li>对http协议有一定理解，了解web服务器在通信中所扮演的角色</li>
       <li>对前端性能优化有一定理解</li>
       <li>能够结合不同框架运用合理的构建及包管理工具实现高效率开发</li>
       <li>认真刻苦，踏实好学，对选择的职业充满热情</li>
   </ol>
 </div>
    
</template>
<script>
    window.onload=function(){
        var ctx1 = document.getElementById("myChart1").getContext("2d");
        var data1 = {
            labels: ["htmml(h5)", "css", "js","less","es6"],
            datasets: [
               {
                   fillColor : "rgba(34,56,205,0.5)",
                    strokeColor : "rgba(34,56,205,1)",
                    pointColor : "rgba(34,56,205,1)",
                    pointStrokeColor : "#fff",
                    data : [90,80,70,70,40]
                }
            ]
        };
        var myRadarChart1 = new Chart(ctx1, {
            type: 'radar',
            data: data1,
            options: {
            scale: {
                    reverse: false,
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        });
        
        
        var ctx2 = document.getElementById("myChart2").getContext("2d");
        var data2 = {
            labels: ["bootstrap", "semantic", "element","angular", "vue", "jquery","node"],
            datasets: [
               {
                   fillColor : "rgba(34,56,205,0.5)",
                    strokeColor : "rgba(34,56,205,1)",
                    pointColor : "rgba(34,56,205,1)",
                    pointStrokeColor : "#fff",
                    data : [90,80,50,60,60,70,40]
                }
            ]
        };
        var myRadarChart2 = new Chart(ctx2, {
            type: 'radar',
            data: data2,
            options: {
            scale: {
                    reverse: false,
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        });
        
        
        
        var ctx3 = document.getElementById("myChart3").getContext("2d");
        var data3 = {
            labels: ["webpack", "npm", "bower"],
            datasets: [
               {
                   fillColor : "rgba(34,56,205,0.5)",
                    strokeColor : "rgba(34,56,205,1)",
                    pointColor : "rgba(34,56,205,1)",
                    pointStrokeColor : "#fff",
                    data : [90,80,70,60,60]
                }
            ]
        };
        var myRadarChart3 = new Chart(ctx3, {
            type: 'radar',
            data: data3,
            options: {
            scale: {
                    reverse: false,
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        });
        
    
        var ctx4 = document.getElementById("myChart4").getContext("2d");
        var data4 = {
            labels: ["git", "svn", "webstorm","brackets"],
            datasets: [
               {
                   fillColor : "rgba(34,56,205,0.5)",
                    strokeColor : "rgba(34,56,205,1)",
                    pointColor : "rgba(34,56,205,1)",
                    pointStrokeColor : "#fff",
                    data : [70,70,70,70]
                }
            ]
        };
        var myRadarChart4 = new Chart(ctx4, {
            type: 'radar',
            data: data4,
            options: {
            scale: {
                    reverse: false,
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        });
        
        Radar.defaults = {

            //Boolean - If we show the scale above the chart data			
            scaleOverlay : false,

            //Boolean - If we want to override with a hard coded scale
            scaleOverride : false,

            //** Required if scaleOverride is true **
            //Number - The number of steps in a hard coded scale
            scaleSteps : null,
            //Number - The value jump in the hard coded scale
            scaleStepWidth : null,
            //Number - The centre starting value
            scaleStartValue : null,

            //Boolean - Whether to show lines for each scale point
            scaleShowLine : true,

            //String - Colour of the scale line	
            scaleLineColor : "rgba(0,0,0,.1)",

            //Number - Pixel width of the scale line	
            scaleLineWidth : 1,

            //Boolean - Whether to show labels on the scale	
            scaleShowLabels : false,

            //Interpolated JS string - can access value
            scaleLabel : "<%=value%>",

            //String - Scale label font declaration for the scale label
            scaleFontFamily : "'Arial'",

            //Number - Scale label font size in pixels	
            scaleFontSize : 12,

            //String - Scale label font weight style	
            scaleFontStyle : "normal",

            //String - Scale label font colour	
            scaleFontColor : "#666",

            //Boolean - Show a backdrop to the scale label
            scaleShowLabelBackdrop : true,

            //String - The colour of the label backdrop	
            scaleBackdropColor : "rgba(255,255,255,0.75)",

            //Number - The backdrop padding above & below the label in pixels
            scaleBackdropPaddingY : 2,

            //Number - The backdrop padding to the side of the label in pixels	
            scaleBackdropPaddingX : 2,

            //Boolean - Whether we show the angle lines out of the radar
            angleShowLineOut : true,

            //String - Colour of the angle line
            angleLineColor : "rgba(0,0,0,.1)",

            //Number - Pixel width of the angle line
            angleLineWidth : 1,			

            //String - Point label font declaration
            pointLabelFontFamily : "'Arial'",

            //String - Point label font weight
            pointLabelFontStyle : "normal",

            //Number - Point label font size in pixels	
            pointLabelFontSize : 12,

            //String - Point label font colour	
            pointLabelFontColor : "#666",

            //Boolean - Whether to show a dot for each point

            pointDot : true,

            //Number - Radius of each point dot in pixels
            pointDotRadius : 3,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth : 1,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke : false,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth : 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill : false,

            //Boolean - Whether to animate the chart
            animation : true,

            //Number - Number of animation steps
            animationSteps : 60,

            //String - Animation easing effect
            animationEasing : "easeOutQuart",

            //Function - Fires when the animation is complete
            onAnimationComplete : null

        }
}
</script>

<style>
    .skill{
        width: 11rem;
        height: 11rem;
        float: left;
        padding: .5rem 9rem;
    }
    .title{
        display: block;
        width: 100%;
        height: auto;
        text-align: center;
        color: aliceblue;
    }
    .canvasBox{
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    ol{
        color: aliceblue;
        font-size: .9rem;
    }

</style>
