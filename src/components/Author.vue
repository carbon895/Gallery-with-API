<template>
    <div class="container">
        <div class="header__container">
            <img v-bind:src="user.user.profile_image.small" alt="image--profile">
            <div class="social--header">
                <p class="username--header"> {{ user.user.username }}</p>
                <p class="location--header"> {{ user.user.location }} </p>
            </div>
            <div class="btn" @click="comebackGallery()">Назад</div>
        </div>
        <div class="main__container">
            <img class="image--main" v-bind:src="user.urls.small" alt="image--block">
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        user(){
            return this.$store.getters.userById(this.$route.params.id);
        },
    },

    methods: {
        comebackGallery(){
            this.$router.push('/gallery')
        }
    }
}
</script>
<style scoped>
    .container{
        width: 100%;
        height: auto;
        position: relative;
        top: 15vh; /* if dont header use */
    }

    .header__container{
        width: 60%;
        margin: auto;
        height: 15vh;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
    }

    .header__container img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }

    .btn{
        color: #000;
        cursor: pointer;
        font-size: 1.2em;
        font-family: 'Roboto', sans-serif;
        border: 2px solid;
        padding: 1% 4%;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .username--header{
        font-size: 2em;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        position: relative;
    }

    .location--header{
        font-size: 1.5em;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        position: relative;
        text-align: center
    }

    .main__container{
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        top: 5vh;
    }

    .image--main{
        margin: auto;
        width: 300px;
        height: 385px;
        position: relative;
    }
</style>