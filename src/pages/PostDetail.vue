<script>
import axios from 'axios';
import PostCard from '../components/posts/PostCard.vue';
const postsUri = 'http://localhost:3000/posts/'

export default {
    name: 'PostDetail',
    components: { PostCard },
    data: () => ({
        post: {}
    }),
    methods: {
        async getPost() {
            try {
                const res = await axios.get(postsUri + this.$route.params.slug);
                this.post = res.data;
            } catch (err) {
                console.error(err);
            }
        }
    },
    created() {
        this.getPost();
    }
}
</script>

<template>
    <div class="container">
        <PostCard :post="post" :isDetail="true" />
    </div>
</template>

<style lang="scss"></style>