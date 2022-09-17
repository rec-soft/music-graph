<template>
    <main class="columns body-columns is-centered is-multiline">
        <section class="column is-half">
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
                    <!-- Can't autoplay due to https://stackoverflow.com/questions/25098021/securityerror-blocked-a-frame-with-origin-from-accessing-a-cross-origin-frame -->
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
                        :to="`/${relation.destination.id}?${getQueryParam([
                            genre.id,
                            ...pastGenres,
                        ])}`"
                    >
                        {{ relation.comparison }}
                    </router-link>
                </footer>
            </div>
        </section>
        <section
            class="column is-two-thirds has-text-centered"
            v-if="pastGenres.length > 0"
        >
            ⬆
        </section>
        <section
            class="column is-two-thirds has-text-centered"
            v-for="(g, i) in pastGenres"
            :key="g"
        >
            <!-- Links to past genres -->
            <router-link
                class="button is-rounded is-link is-outlined"
                :to="`/${g}?${getQueryParam(pastGenres.slice(i + 1))}`"
            >
                {{ g }}
            </router-link>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { entryGenre, genreMap } from "../map";

const PAST_GENRES_QUERY_PARAM = "p";

export default defineComponent({
    name: "GenreView",
    components: {
        RouterLink,
    },
    data() {
        const genreId = Array.isArray(this.$route.params.genreId)
            ? this.$route.params.genreId[0] ?? ""
            : this.$route.params.genreId;
        const genre = genreMap.get(genreId) ?? entryGenre;
        const pastGenres: string[] =
            this.$route.query[PAST_GENRES_QUERY_PARAM]?.toString().split(",") ??
            [];

        return {
            genre,
            pastGenres,
        };
    },
    methods: {
        getQueryParam(genres: string[]) {
            // Add current genre.
            return `${PAST_GENRES_QUERY_PARAM}=${genres.join(",")}`;
        },
    },
});
</script>
