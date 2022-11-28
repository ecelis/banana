<script setup>
import {useStore} from "../stores/store";

const store = useStore();
</script>

<template>
  <div id="user-container">
    <div v-if="store.isUserSignedIn" id="user-pic"></div>
    <div v-if="store.isUserSignedIn" id="user-name"></div>
    <button
      v-if="store.loggedIn"
      id="sign-out"
      class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white"
      @click="store.signOutUser"
    >
      Sign-out
    </button>
    <button
      v-if="!store.isUserSignedIn"
      id="sign-in"
      class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white"
      @click="store.signIn"
    >
      <i class="material-icons">account_circle</i>Sign-in with Google
    </button>
  </div>
</template>