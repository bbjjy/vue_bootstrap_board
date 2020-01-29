import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Board from '@/components/Board'
import ContextDetail from '@/components/ContextDetail'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'ContextDetail',
      component: ContextDetail
    },
    {
      path: '/board/free/create/:contentId?', //?는 파라미터 있던 없던 보내기
      name: 'Create',
      component: Create
    }
  ]
})
