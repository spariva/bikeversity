<template>
  <div>
    <MenuComponent/>
    <router-view></router-view>
    <FooterComponent/>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent,
    FooterComponent
  }
}
</script>

<style>
@import 'assets/styles/style.css';
</style>
