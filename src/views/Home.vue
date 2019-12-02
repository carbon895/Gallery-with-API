<template>
  <div class="home">
    <Author v-if="id"></Author>
    <Gallery v-else></Gallery>
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from '@/components/Gallery.vue';
import Author from '@/components/Author.vue';

export default{ 
  components: { Gallery, Author }, 
  props: ['id']
}

</script>
