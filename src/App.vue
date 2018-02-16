<template>
  <v-app dark>
    <v-navigation-drawer app v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Charts</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- <main> -->
    <v-content>
      <v-container fluid>
        <!-- <router-view></router-view> -->
        <!-- <line-example></line-example> -->
      </v-container>
    <!-- </main> -->
  </v-content>
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
        {icon: 'schedule', title: 'Schedule'},
        {icon: 'check_circle', title: 'Operation Effectiveness'},
        {icon: 'adjust', title: 'Syestem Availabiliry & Reliability'},
        {icon: 'person', title: 'Profile'}
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
