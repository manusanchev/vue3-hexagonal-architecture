<script setup lang="ts">
</script>

<template>
  <dialog v-bind="$attrs" role="alertdialog" class="m-auto min-w-lg rounded-lg min-h-60 p-4 outline-none relative">
    <slot />
  </dialog>
</template>

<style scoped>
/* Open state of the dialog  */
dialog:open {
  opacity: 1;
}

/* Closed state of the dialog   */
dialog {
  opacity: 0;
  transition: all 0.2s allow-discrete;
}

@starting-style {
  dialog:open {
    opacity: 0;
  }
}

/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition: all 0.2s allow-discrete;

}

dialog:open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  dialog:open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
</style>
