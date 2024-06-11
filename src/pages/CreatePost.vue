<script>
import axios from 'axios';

const categoriesUri = 'http://localhost:3000/categories/';
const tagsUri = 'http://localhost:3000/tags/';

export default {
    name: 'CreatePost',
    data: () => ({
        categories: [],
        tags: [],
        post: {
            title: '',
            content: '',
            categoryId: 'Seleziona una categoria',
            tags: []
        }
    }),
    methods: {
        async fetchCategories() {
            try {
                const res = await axios.get(categoriesUri);
                this.categories = res.data;
            } catch (err) {
                console.error(err);
            }
        },
        async fetchTags() {
            try {
                const res = await axios.get(tagsUri);
                this.tags = res.data;
            } catch (err) {
                console.error(err);
            }
        }
    },
    created() {
        this.fetchCategories();
        this.fetchTags();
    },
}
</script>

<template>
    <form action="http://localhost:3000/posts/" method="post" class="container">
        <div class="row">

            <div class="col-5">

                <div class="row">

                    <!-- Titolo -->
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="title" class="form-label">Titolo</label>
                            <input v-model="post.title" type="text" class="form-control" id="title"
                                placeholder="Nome del Post">
                        </div>
                    </div>

                    <!-- Categorie -->
                    <div class="col-12 mb-3">
                        <label for="category" class="form-label">Categorie</label>
                        <select v-model="post.categoryId" class="form-select" id="category" name="categories">
                            <option selected>Seleziona una categoria</option>
                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                {{ category.label }}
                            </option>
                        </select>
                    </div>

                    <!-- Tags -->
                    <div class="col-12 mb-3 mt-2">
                        <p class="mb-3">Tags</p>
                        <div class="d-flex gap-4 flex-wrap">
                            <div class="form-check" v-for="tag in tags" :key="tag.id">
                                <label class="form-check-label form-check-inline" :for="`tag-${tag.id}`">
                                    {{ tag.label }}
                                </label>
                                <input v-model="post.tags" class="form-check-input" type="checkbox" name="tags[]"
                                    :value="tag.id" :id="`tag-${tag.id}`">
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="col-7">

                <!-- Contenuto -->
                <div class="mb-3">
                    <label for="contente" class="form-label">Contenuto del Post</label>
                    <textarea v-model="post.content" class="form-control" name="content" id="content" cols="30"
                        rows="10"></textarea>
                </div>

            </div>

        </div>
        <div class="d-flex justify-content-between mt-5">

            <button @click="$router.back()" type="button" class="btn btn-secondary">
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" class="me-2 fa-beat-fade" />Torna indietro
            </button>

            <div class="d-flex gap-3">
                <button class="btn btn-danger" type="reset">
                    <FontAwesomeIcon icon="fa-solid fa-rotate" class="me-2 fa-sync fa-spin fa-spin-reverse" />Reset
                </button>
                <button class="btn btn-success">
                    <FontAwesomeIcon icon="fa-solid fa-floppy-disk" class="me-2 fa-bounce" />Salva
                </button>
            </div>

        </div>
    </form>
</template>

<style lang="scss"></style>