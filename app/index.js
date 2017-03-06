import Vue from 'vue'
    //import Chart from 'chart.js'

require("../css/index.css")
import topnav from '../components/topNav'
import router from '../router';
var app = new Vue({
    el: '#app1',
    components: {
        topnav
    },
    router

})