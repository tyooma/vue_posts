<template>
  <ul class="posts__list">
    <li
      class="posts__item"
      v-for="post of posts"
      v-bind:post="post"
      v-bind:key="post.id"
    > 
      <div class="posts__user">
        <img src="../images/user_avatar.png" alt="user avatar" class="posts__user_avatar" />
        <div class="posts__user_info">
          <router-link class="posts__username" :to="`/user/${post.user.id}`">{{ post.user.username }}</router-link>
          <div>{{post.user.email}}</div>
        </div>
      </div>
      <router-link class="posts__title" :to="`/posts/post/${post.id}`">{{ post.title }}</router-link>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'PostsList',
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    ...mapGetters(['getPosts', 'getUsers']),
  },
  methods: {
    ...mapActions(['fetchPosts', 'fetchComments']),
    getPostsWithUsers() {
      this.posts = this.getPosts.map(post => ({
        ...post,
        user: this.getUsers.find(user => user.id === post.userId),
      }));
    },
  },
  async mounted() {
    this.fetchPosts();
    this.fetchComments();
    this.getPostsWithUsers();
  },
}
</script>

<style scoped>
  .posts__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .posts__item {
    width: 600px;

    padding: 20px;
    margin-bottom: 30px;
    

    box-shadow: 0 0 2px rgba(0,0,0,0.1);
    border-radius: 10px;
    cursor: pointer;

    transition: all 0.3s;
  }

  .posts__item:hover {
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    transform: scale(1.1);
  }

  .posts__user {
    display: flex;
    align-items: center;
  }

  .posts__username {
    font-size: 12px;
    color: rgb(172, 172, 172);
  }

  .posts__user_avatar {
    width: 40px;
    height: 40px;
  }

  .posts__user_info {
    margin-left: 15px;
    padding-left: 3px;
    padding-right: 3px;

    display: flex;
    flex-direction: column;
    align-items: start;

    background-color: rgb(250, 250, 250);
    border-radius: 15px;
  }

  .posts__title {
    font-size: 24px;
    color: rgb(34, 34, 34);

    transition: color  0.3s;
  }

  .posts__title:hover {
    opacity: 0.6;
  }
</style>