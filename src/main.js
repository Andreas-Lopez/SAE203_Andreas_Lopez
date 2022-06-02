import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyARg5NLhK5AJCbjOtxQLKCOgNX7VnsHN7U",
    authDomain: "sae203-17532.firebaseapp.com",
    projectId: "sae203-17532",
    storageBucket: "sae203-17532.appspot.com",
    messagingSenderId: "736299677775",
    appId: "1:736299677775:web:5c4584c6f4ef870bca923a"
  };

  const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
