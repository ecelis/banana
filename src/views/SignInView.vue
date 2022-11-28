<script setup>
import { useStore } from "@/stores/store";

const store = useStore();


</script>

<template>
  <div>Sign In</div>
  <div>{{store.data}}----{{store.isUserSignedIn()}}</div>
</template>
