<template>
  <div class="comments">
    <div
      class="comment__item"
      v-for="comment of comments"
      v-bind:comment="comment"
      v-bind:key="comment.id"
    >
      <h3 class="comment_name">{{ comment.name }}</h3>
      <p class="comment__text">{{ comment.body }}</p>
      <p class="comment__mail">Email: {{ comment.email }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props:['comments'],
}
</script>

<style scoped>
  
</style>
