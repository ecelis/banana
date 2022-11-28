import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const useStore = defineStore("user", () => {
  const state = ref({
    loggedIn: false,
    data: null,
  });

  async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  function signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth());
  }  
  
  function initFirebaseAuth() {
    // Listen to auth state changes.
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
  }
  
  // Returns the signed-in user's display name.
  function getUserName () {
    return getAuth().currentUser.displayName;
  }

  function isUserSignedIn() {
    return !!getAuth().currentUser;
  }  
  
  return { state, signIn, signOutUser, initFirebaseAuth,
    getProfilePicUrl, getUserName, isUserSignedIn };
});
