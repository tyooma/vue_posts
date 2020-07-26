<template>
  <div>
    <div class="user__page">
      <h1>User info</h1>
      <p>Name: {{ users.name }}</p>
      <p>Username: {{users.username}}</p>
      <p>Email: {{users.email}}</p>
      <p>Phone {{users.phone}}</p>
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
