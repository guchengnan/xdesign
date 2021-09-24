<template></template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "square",
      validator: (s) => ["square", "rounded"].includes(s),
    },
  },
};
</script>

<style></style>
