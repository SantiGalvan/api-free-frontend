<script>
export default {
    name: 'AppHeader'
}
</script>

<template>

    <header>
        <nav class="container mb-5">
            <div class="logo">
                <figure>
                    <img src="/src/assets/img/logo.jpg" alt="Logo" class="img-fluid rounded-circle">
                </figure>
            </div>
            <div class="links">
                <ul class="d-flex justify-content-center gap-3">
                    <li>
                        <RouterLink :to="{ name: 'home' }">Posts</RouterLink>
                    </li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">Tags</a></li>
                </ul>
            </div>
            <div class="actions">
                <ul class="d-flex justify-content-center gap-3">
                    <li><a href="">Register</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<style lang="scss"></style>
