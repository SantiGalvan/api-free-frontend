<script>
import axios from 'axios';
import PostsList from '../components/posts/PostsList.vue'
const postsUri = 'http://localhost:3000/posts/'

export default {
    name: 'HomePage',
    components: { PostsList },
    data: () => ({
        posts: []
    }),
    methods: {
        async fetchPosts() {
            try {
                const res = await axios.get(postsUri);
                this.posts = res.data.data;
            } catch (err) {
                console.error(err);
            }
        }
    },
    created() {
        this.fetchPosts();
    }
}
</script>

<template>
    <div class="container">
        <div class="row mb-5">
            <PostsList v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<style lang="scss"></style>