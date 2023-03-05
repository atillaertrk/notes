import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/config';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import store from './store';

let app;

auth.onAuthStateChanged(()=>{
    if(!app){
        app= createApp(App).use(router).use(store).mount('#app')

    }
})
