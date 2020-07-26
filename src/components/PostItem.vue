<template>
  <div class="post">
    <div class="post__item">
      <h2 class="post__title">{{ post.title }}</h2>
      <p class="post__body">{{ post.body }}</p>
    </div>
    <hr />
    <h3 class="comments__title">Comments</h3>
        <Comments 
          v-bind:comments="comments"
        />
  </div>
</template>

<script>
import Comments from './Comments';
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {},
      comments: [],
    };
  },
  components: {
    Comments,
  },
  computed: {
    ...mapGetters(['getPosts', 'getComments']),
  },
  methods: {
    ...mapActions(['fetchComments']),
  },
  created() {
    this.post = this.getPosts.find(post => post.id === Number(this.id));
    this.comments = this.getComments.filter(comment => comment.postId === Number(this.id));
  },
}
</script>

<style scoped>
  .post__item {
    padding: 0 20px 20px;
  }
  .comments__title {
    width: 250px;

    margin: 0 auto;

    background-color: rgb(54, 54, 54);
    color: #fff;
  
    border-radius: 15px;
  }
</style>
