<template>
  <div class="gallery">
    <div class="container">
      <div class="grid--block__container" v-for="user in users" :key = "user.id">
        <div class="profile--info">
            <img v-bind:src="user.user.profile_image.small" alt="avatar--block">
            <div class="username--social">
                <p class="username--profile">{{ user.user.username }}</p>
                <p class="inst--username--profile">@{{ user.user.instagram_username }}</p>
            </div>
        </div>
        <img class="image--profile" v-bind:src="user.urls.small" alt="image--block">
        <!-- <userAll v-bind:userAll="user.user"></userAll> -->
        <div class="likes--profile"> 
          <p>{{ user.likes }}</p>
          <img src="../assets/Eye.png">
        </div>
      </div>
    </div>
    <div class="pagination">
      <div class="pagination--block">
        <p> {{ counter }} </p>
        <button @click="getLog">5555555</button>
      </div>
    </div>
  </div>
</template>

<script>

// import userAll from './userAll.vue'

export default {
  name: 'gallery',
  components: {
    // userAll
  },
  data() {
    return{
      users: [],
      url:  'https://api.unsplash.com/photos/?client_id=af3ec96790b516dbd635202f7b3104ef6226d6edd57fd7d99ef707fcf953ccb2',
      counter: 10
    }
  },

  methods: {
    getUsers(){
      // this.$axios.get(this.url)
      //   .then((response) => {this.users = response})
      //   // .then(function(response) { this.users = response })
      this.$axios
        .get(this.url)
        .then(response => (this.users = response.data));
    },

    getLog(){
      console.log(this.users)
    }

  },
  created:  function () {
      this.getUsers();
  },
  mounted: function (){
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  .container{
    width: 60%;
    height: 100%;
    position: relative;
    margin: auto;
    display: flex; 
    flex-wrap: wrap;
    flex-direction: row;
  }

  .grid--block__container{
    height: 50vh;
    width: 45%;
    position: relative;
    margin: 7% auto;
  }

  .profile--info{
    display: flex;
    height: 15%;
    margin-bottom: 3%;
    cursor: pointer;
  }

  .profile--info img{
    width: 62px;
    height: 62px;
    border-radius: 50px;
  }

  .username--social{
    display: flex;
    width: 80%;
    flex-direction: column;
    left: 3%;
    position: relative;
    align-self: center;
  }

  .username--profile, 
  .inst--username--profile{
    font-size: 1.2em;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    position: relative;
    display: inherit;
  }

  .username--profile{
    color: black;
    font-weight: bold;
    margin-bottom: 1%;
  }

  .inst--username--profile{
    color: #8D8D8D;
    font-weight: normal;
  }

  .image--profile{
    width: 100%;
    height: 100%;
    position: relative;
  }

  .likes--profile{
    display: flex;
    justify-content: flex-end;
    margin: 1% 2%;
    height: 8%;
    align-items: center;
  }

  .likes--profile p{
    margin-right: 2%;
    color: #8D8D8D;
    font-weight: bold;
    font-size: 1.2em;
    font-family: 'Roboto', sans-serif;
  }

  .likes--profile img{
    width: 7%;
    height: 60%;
  }

  .pagination{
    width: 100%;
    height: 10vh;
    position: relative;
    top: 15vh;
    background-color: rgba(0, 0, 0, .8)
  }

  .pagination--block{
        text-align: center;
          color: #fff;
          font-size: 1.4em;
          line-height: 10vh;
          font-family: sans-serif;
          font-weight: bold;
  }

  @media (min-width: 320px) and (max-width: 479px){
    .container{
      width: 100%;
      flex-direction: column;
    }

    .grid--block__container{
      height: 70vh;
      width: 100%;
      position: relative;
      margin: 20% auto;
    }

    .profile--info{
      margin-left: 5%;
    }
  }

  @media (min-width: 480px) and (max-width: 767px){
    .container{
      width: 80%;
      flex-direction: column;
    }

    .grid--block__container{
      height: 70vh;
      width: 100%;
      position: relative;
      margin: 20% auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1000px){
    .container{
      width: 90%;
    }

    .grid--block__container{
      margin: 10% auto;
    }
  }
</style>
