<template>
    <main class="columns body-columns">
        <section class="column is-half is-offset-one-quarter">
            <div class="card">
                <div class="card-content">
                    <!-- Genre info -->
                    <h1 class="title">
                        {{ genre.name }}
                    </h1>
                    <p class="content">
                        {{ genre.description ?? "Description goes here!" }}
                    </p>
                    <!-- Example track player -->
                    <!-- document.querySelector('[title="Play"]').click() -->
                    <iframe
                        style="border-radius: 12px"
                        v-if="genre.trackId"
                        :src="`https://open.spotify.com/embed/track/${genre.trackId}?utm_source=generator`"
                        width="100%"
                        height="280"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                </div>
                <!-- Navigation to next pages -->
                <footer class="card-footer">
                    <router-link
                        v-for="relation in genre.next"
                        v-bind:key="relation.destination.name"
                        class="card-footer-item"
                        :to="`/${relation.destination.id}`"
                    >
                        {{ relation.comparison }}
                    </router-link>
                </footer>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { entryGenre, genreMap } from "../map";

export default defineComponent({
    name: "HomeView",
    components: {
        RouterLink,
    },
    data() {
        const genreId = Array.isArray(this.$route.params.genreId)
            ? this.$route.params.genreId[0] ?? ""
            : this.$route.params.genreId;
        return {
            genre: genreMap.get(genreId) ?? entryGenre,
        };
    },
});
</script>
