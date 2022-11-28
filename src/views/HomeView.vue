<script setup>
import Messages from "../components/Messages.vue";
import SnackBar from "../components/SnackBar.vue";
</script>

<template>
  <main class="mdl-layout__content mdl-color--grey-100">
    <div
      id="messages-card-container"
      class="mdl-cell mdl-cell--12-col mdl-grid"
    >
      <Messages />
      <SnackBar />
    </div>
  </main>
</template>
