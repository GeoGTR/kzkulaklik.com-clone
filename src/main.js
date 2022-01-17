import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: 'AIzaSyDxwLbTKvrFnTcU8X16DbZC8K_P53r08Uc',

  authDomain: 'kzweb-9f387.firebaseapp.com',

  projectId: 'kzweb-9f387',

  storageBucket: 'kzweb-9f387.appspot.com',

  messagingSenderId: '801273496160',

  appId: '1:801273496160:web:128f27c31934c3abbbf905'

}
// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App).use(store).use(router).mount('#app')
