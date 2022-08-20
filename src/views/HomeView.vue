<template>
    <main class="columns body-columns">
        <section class="column is-half is-offset-one-quarter">
            <div class="card">
                <div class="card-content">
                    <!-- Genre info -->
                    <h1 class="title">
                        {{ entryGenre.name }}
                    </h1>
                    <p class="subtitle">Description goes here!</p>
                    <!-- Example track player -->
                </div>
                <!-- Navigation to next pages -->
                <footer class="card-footer">
                    <a
                        v-for="relation in entryGenre.next"
                        v-bind:key="relation.destination.name"
                        class="card-footer-item"
                        href="#"
                    >
                        {{ relation.comparison }}
                    </a>
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
    data() {
        return {
            entryGenre,
        };
    },
});
</script>
