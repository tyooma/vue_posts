<template>
  <nav class="nav purple lighten-2">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" to="/posts">Posts</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" :to="`/user/${id}`">User</router-link>
      </li>
      <li class="nav__item">
        <router-link @click.native="logout" class="nav__link" to="/">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      id: '',
    };
  },
  computed: {
    ...mapGetters(['getUserId']),
  },
  methods: {
    ...mapMutations(['logoutUser']),
    logout() {
      this.logoutUser();
    },
  },
  created() {
    this.id = this.getUserId;
  },
}
</script>

<style scoped>
  .nav {
    margin-bottom: 30px;
  }
</style>
