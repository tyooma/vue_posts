<template>
  <div>
    <div class="user__page">
      <h3 class="user__username">{{users.username}}</h3>
      <img src="../images/user_avatar.png" alt="user avatar" class="user__avatar" />
      <h4 class="user__name">{{ users.name }}</h4>
      <p>{{users.email}}</p>
      <p>{{users.phone}}</p>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'User',
  data() {
    return {
      id: this.$route.params.id,
      users: {},
    }
  },
  created() {
    this.users = this.getUsers.find(user => user.id === Number(this.id));
  },
  computed: {
    ...mapGetters(['getUsers']),
  },
}
</script>

<style scoped>
  .user__avatar {
    width: 100px;
    height: 100px;

    cursor: pointer;
  }

  .user__username {
    font-weight: 700;
  }
</style>
