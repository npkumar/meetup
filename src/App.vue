<template>
  <v-app>

  <v-navigation-drawer v-model="sideNav">
    <v-list>
      <v-list-tile v-for="item in menuItems" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar dark class="primary">
    <v-toolbar-side-icon 
      @click.native.stop="sideNav =!sideNav"
      class="hidden-sm-and-up">
    </v-toolbar-side-icon>
    <v-toolbar-title>Meetup</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems" :key="item.title">
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  
  <!-- This part would be dynamic -->
  <main>

  </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { icon: 'supervisor_account', title: 'View Meetups' },
          { icon: 'room', title: 'Organize Meetup' },
          { icon: 'person', title: 'Profile' },
          { icon: 'face', title: 'Sign Up' },
          { icon: 'lock_open', title: 'Sign In' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
