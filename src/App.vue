<template>
  <div id="app">
    <div v-if="this.getValidation">
      <NavBar />
      <router-view />
    </div>
    <div v-if="!this.getValidation" class="form__wrapper">
      <form class="form" @submit.prevent="login">
        <div class="form__input col s12">
          <input required v-model="email" type="email" placeholder="Email" />
        </div>
        <span v-if="error"> Wrong Email </span>
        <button class="form__button btn waves-effect purple lighten-2" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import NavBar from './components/NavBar';
export default {
  name: 'App',
  data() {
    return {
      email: '',
      error: false,
      validation: true,
    };
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(['getUsers', 'getValidation']),
  },
  methods: {
    ...mapActions(['fetchPosts', 'fetchComments', 'fetchUsers']),
    ...mapMutations(['loginUser', 'checkUserLogin']),
    login() {
      this.checkUserLogin(this.email);
      if (this.getValidation) {
        this.loginUser(this.email);
        this.validation = true;
        this.error = false;
        this.$router.push('./posts');
      } else {
        this.error = true;
      }
    },
  },
  async mounted() {
    this.fetchPosts();
    this.fetchComments();
    this.fetchUsers();
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .form__wrapper {
    width: 450px;
    height: 190px;

    margin: 50px auto;

    border-radius: 20px;
    background-color: #ba68c8;
  }

  .form {
    width: 400px;
    height: 160px;

    margin: 100px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 20px;
    background-color: #fff;
  }

  .form__input {
    width: 300px;

    margin-bottom: 30px;
  }
  
</style>
