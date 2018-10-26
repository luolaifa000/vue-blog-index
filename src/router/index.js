import home from '@/views/index/home'
import login from '@/views/index/login'
import register from '@/views/index/register'
import article from '@/views/index/article'
import detail from '@/views/index/detail'
import message from '@/views/index/message'
import link from '@/views/index/link'


const index = [
  {
    path: '/',
    component: home,
    redirect: {
      name: 'home',
    },
  },
  {
    path: '/home',
    component: home,
    name: 'home',
    children: [
      {
        path: '/login',
        component: login,
        name: 'login',
      },
      {
        path: '/register',
        component: register,
        name: 'register',
      },
      {
        path: '/article',
        component: article,
        name: 'article',
      },
      {
        path: '/article/:id',
        component: detail,
        name: 'detail',
      },
      {
        path: '/message',
        component: message,
        name: 'message',
      },
      {
        path: '/link',
        component: link,
        name: 'link',
      }
    ]
  },
]
export default index