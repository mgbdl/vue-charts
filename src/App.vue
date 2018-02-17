<template>
  <v-app dark>
    <v-navigation-drawer temporary app v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor : pointer"> Charts </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- <main> -->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- </main> -->
  </v-app>
</template>

<script>
import LineExample from './components/LineChart.js'
export default {
  name: 'App',
  components: {
    LineExample
  },
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'schedule', title: 'Schedule', link: '/schedule'},
        {icon: 'check_circle', title: 'Operation Effectiveness', link: '/operation'},
        {icon: 'adjust', title: 'System Availabiliry & Reliability', link: '/system'},
        {icon: 'person', title: 'Profile', link: '/'}
      ]
    }
  }
}
</script>
<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
