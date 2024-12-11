<template>
  <div>
    <MenuComponent/>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>
@import 'assets/styles/style.css';
</style>
