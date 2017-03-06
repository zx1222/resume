import Vue from 'vue';
import VueRouter from 'vue-router';

import topnav from '../components/topNav'

var Chart = require('chart.js')

import userInfo from '../components/userInfo'
import proSkill from '../components/proSkill'
import experience from '../components/experience'
import workEx from '../components/workEx'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: userInfo
        },
        {
            path: '/userInfo',
            component: userInfo
        },
        {
            path: '/proSkill',
            component: proSkill
        },
        {
            path: '/experience',
            component: experience
        },
        {
            path: '/workEx',
            component: workEx
        }
    ]
});
export default router;