<script>
export default {
    name: 'PostCard',
    props: { post: Object, isDetail: Boolean },
    computed: {
        creationDate() {
            const date = new Date(this.post.createdAt);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`
        }
    }
}
</script>

<template>
    <!-- Card del post -->
    <div class="card">

        <!-- Card Header se è presente la categoria -->
        <div v-if="post.category" class="card-header d-flex align-items-center justify-content-center text-center"
            :style="{ backgroundColor: post.category.color }">
            <h4>{{ post.title }}</h4>
        </div>

        <!-- Card Header se non è presente la categoria -->
        <div v-else class="card-header d-flex align-items-center justify-content-center text-center">
            <h4>{{ post.title }}</h4>
        </div>

        <!-- Card Body HomePage -->
        <div v-if="!isDetail" class="card-body index-body text-center mb-3">
            <p>{{ post.content }}</p>
            <p><strong>Autore: </strong>{{ post.user.name }}</p>
        </div>

        <!-- Card Body PostDetail -->
        <div v-else class="card-body">
            <div class="row">
                <div class="col-4">
                    <p v-if="post.category" class="ms-4">
                        <span class="badge" :style="{ backgroundColor: post.category.color }">
                            {{ post.category.label }}
                        </span>
                    </p>
                    <p class="ms-4" v-for="tag in post.tags" :key="tag.id">
                        <span class="badge rounded-pill me-1 text-dark" :style="{ backgroundColor: tag.color }">
                            {{ tag.label }}
                        </span>
                    </p>
                </div>
                <div class="col">
                    <p>{{ post.content }}</p>
                    <p v-if="post.user"><strong>Autore: </strong>{{ post.user.name }}</p>
                    <p>{{ creationDate }}</p>
                </div>
            </div>
        </div>

        <!-- Card Footer HomePage -->
        <div v-if="!isDetail" class="card-footer d-flex justify-content-center">
            <RouterLink :to="{ name: 'post-detail', params: { slug: post.slug } }" class="btn btn-primary">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" class="me-2" />Vedi
            </RouterLink>
        </div>

        <!-- Card Footer PostDetail -->
        <div v-else class="card-footer d-flex justify-content-between">
            <button @click="$router.back()" class="btn btn-secondary">
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" class="me-2 fa-beat-fade" />Torna indietro
            </button>
            <div class="d-flex gap-4">
                <RouterLink class="btn btn-warning">
                    <FontAwesomeIcon icon="fa-solid fa-pen" class="me-2 fa-bounce" />Modifica
                </RouterLink>
                <RouterLink class="btn btn-danger">
                    <FontAwesomeIcon icon="fa-solid fa-trash-can" class="me-2 fa-shake" />Elimina
                </RouterLink>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.card {
    .card-header {
        height: 80px;
    }

    .index-body {
        height: 150px;
    }
}
</style>