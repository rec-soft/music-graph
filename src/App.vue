<template>
    <main class="section is-medium">
        <RouterView :key="$route.path" />
    </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
