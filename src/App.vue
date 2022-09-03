<template>
    <main class="section is-large">
        <RouterView :key="$route.path" />
    </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
