<template>
    <main>
        <div class="title">{{ entryGenre.name }}</div>
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
