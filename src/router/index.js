import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView'
import readNote from '../components/readNote'
import WriteNote  from '../views/WriteNote.vue'
import postList from '../components/postList.vue'
import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/write-note',
    name: 'WriteNote',
    component: WriteNote
  },
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: ErrorView,
  },
  {
    path: '/list',
    name: 'list',
    component:postList
  },
  {
    path: '/readNote/:id',
    name: 'readNote',
    component: readNote,
    props: true
    
  },
  {
    path: '/registerUser',
    name: 'register',
    component:RegisterView
  },
  {
    path: '/loginUser',
    name: 'login',
    component:LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
