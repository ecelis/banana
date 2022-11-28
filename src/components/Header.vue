<script setup>
  import UserBadge from "./UserBadge.vue";
</script>

<template>
  <header
      class="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700"
    >
      <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
        <div
          class="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop"
        >
          <h3>
            <i class="material-icons">chat_bubble_outline</i> Banana Chat
          </h3>
        </div>
        <UserBadge />
      </div>
    </header>

</template>