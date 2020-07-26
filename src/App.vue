<template>
  <div id="app">
    <div v-if="this.getValidation">
      <NavBar />
      <router-view />
    </div>
    <div v-if="!this.getValidation" class="login">
      <form  @submit.prevent="login">
        <div class="input-field col s12">
          <input required v-model="email" type="email" placeholder="Email" />
        </div>
        <span v-if="error"> Wrong Email </span>
        <button class="btn waves-effect purple lighten-2" type="submit">Submit</button>
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

  
</style>
