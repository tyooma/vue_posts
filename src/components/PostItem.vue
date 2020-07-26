<template>
  <div class="post">
    <div class="post__item">
      <h2 class="post__title">{{ post.title }}</h2>
      <p class="post__body">{{ post.body }}</p>
    </div>
    <hr />
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
</style>
