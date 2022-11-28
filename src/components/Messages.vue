<template>
  <div
    id="messages-card"
    class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop"
  >
    <div class="mdl-card__supporting-text mdl-color-text--grey-600">
      <div id="messages"></div>
      <form id="message-form" action="#">
        <div
          class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
        >
          <input
            class="mdl-textfield__input"
            type="text"
            id="message"
            autocomplete="off"
          />
          <label class="mdl-textfield__label" for="message"
            >Message...</label
          >
        </div>
        <button
          id="submit"
          disabled
          type="submit"
          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        >
          Send
        </button>
      </form>
      <form id="image-form" action="#">
        <input
          id="mediaCapture"
          type="file"
          accept="image/*"
        />
        <button
          id="submitImage"
          title="Add an image"
          class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white"
        >
          <i class="material-icons">image</i>
        </button>
      </form>
    </div>
  </div>
</template>