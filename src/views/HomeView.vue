<template>
    <main class="columns body-columns is-centered">
        <section class="column is-three-quarters">
            <div class="card">
                <div class="card-content">
                    <h1 class="title">What kind of music do I listen to?</h1>
                    <div class="content">
                        <p>
                            I always have a hard time answering and end up
                            saying something like "a variety". It really depends
                            on the context!
                        </p>
                        <p>
                            For example, I listen to a lot of ambient,
                            repetitive, instrumental stuff while working since
                            that helps me focus. There is music I enjoy live,
                            but not listening to at home. And stuff that I put
                            on repeat for a month and never touch again. But
                            that's not a complete nor satisfying.
                        </p>
                        <p>
                            So, this little app aims to answer that question
                            from the top ☝🏻. I picked one track per genre that
                            represents something I particularly enjoy -- even if
                            it's not be the best example of the genre itself.
                            Then you can continue on to related genres (and
                            their tracks).
                        </p>
                        <p>Please listen and enjoy! 🎵</p>
                    </div>
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
