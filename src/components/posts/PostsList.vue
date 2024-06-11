<script>
import PostCard from './PostCard.vue'

export default {
    name: 'PostsList',
    components: { PostCard },
    props: { post: Object }
}
</script>

<template>
    <div class="col-3 g-4">
        <PostCard :post="post" />
    </div>
</template>

<style lang="scss"></style>