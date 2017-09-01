import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertComponent from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    // Initialize Firebase
    const config = {

    }
    firebase.initializeApp(config)

    // detects if valid token if present
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })

    // load existing meetups
    this.$store.dispatch('loadMeetups')
  }
})
