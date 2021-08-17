import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import { firebaseConfig } from './firebase-config.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
console.log(db,"ceva")
// db.collection('Persons').get().then(r => {
//   r.docs.map(doc=>{
//     console.log(doc.data())
//   })
// })


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
