import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import index from '@/components/index'
import my from '@/components/my'
import receiveTask from '@/components/receiveTask'
import taskInfo from '@/components/taskInfo'
import video from '@/components/video'
import withDraw from '@/components/withdraw'
import orderList from '@/components/orderList'

Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/',
        component: home,
        children: [
            {
              path: '',
              redirect: '/index'
            },
            {
                path: '/index',
                name: 'index',
                component: index
            },
            {
                path: '/my',
                name: 'my',
                component: my
            },]
    },
      {
        path: '/receiveTask',
        name: 'receiveTask',
        component: receiveTask
      },
      {
        path: '/taskInfo',
        name: 'taskInfo',
        component: taskInfo
      },
      {
        path: '/video',
        name: 'video',
        component: video
      },{
        path: '/withDraw',
        name: 'withDraw',
        component: withDraw
      },{
        path: '/orderList',
        name: 'orderList',
        component: orderList
      }
    ]
})
