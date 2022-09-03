<template>
    <main class="columns body-columns is-centered">
        <section class="column is-three-quarters">
            <div class="card">
                <div class="card-content">
                    <h1 class="title">What kind of music do I listen to?</h1>
                    <p class="content">stuff</p>
                </div>
                <!-- Navigation to next pages -->
                <footer class="card-footer">
                    <router-link
                        class="card-footer-item"
                        :to="`/${entryGenre.id}`"
                    >
                        Get started!
                    </router-link>
                </footer>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { entryGenre } from "../map";

export default defineComponent({
    name: "HomeView",
    components: {},
    data() {
        return { entryGenre };
    },
});
</script>
