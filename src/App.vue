<template>
  <div id="app">
    <Author v-if="id"></Author>
    <Gallery v-else></Gallery>
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue'


export default {
  name: 'app',
  components: {
    Gallery
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    border: 0;
  }
</style>
