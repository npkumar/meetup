import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Hong_Kong_Night_Skyline.jpg',
        id: '1',
        title: 'Hong Kong',
        date: new Date(),
        location: 'Hong Kong',
        description: 'Foobar at HK'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Ginza_at_Night%2C_Tokyo.jpg',
        id: '2',
        title: 'Tokyo',
        date: new Date(),
        location: 'Tokyo',
        description: 'Foobar at TK'
      }
    ],
    user: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      // optional changes to payload
      const meetup = {
        id: Date.now() + '',
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      // connect to firebase and store
      commit('createMeetup', meetup)
    },
    signUpUser ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        })
        .catch(err => {
          // handle later
          console.log(err)
        })
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },

    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 3)
    },

    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId
        })
      }
    },

    user (state) {
      return state.user
    }
  }
})
