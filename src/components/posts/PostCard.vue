<script>
export default {
    name: 'PostCard',
    props: { post: Object }
}
</script>

<template>
    <div class="card">
        <div class="card-header text-center">
            <h4>{{ post.title }}</h4>
        </div>
        <div class="card-body">
            <p>{{ post.content }}</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
            <a href="" class="btn btn-primary">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" class="me-2" />Vedi
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    .card-header {
        height: 80px;
    }

    .card-body {
        height: 150px;
    }
}
</style>