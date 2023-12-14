<template>
  <div class="user-list__details">
    <h2 class="user-list__details-hl">Details</h2>
    <dl v-if="users">
      <dt>name:</dt>
      <dd>{{ users.name || "-" }}</dd>

      <dt>email:</dt>
      <dd>{{ users.email || "-" }}</dd>

      <dt>phone:</dt>
      <dd>{{ users.phone || "-" }}</dd>

      <dt>company:</dt>
      <dd>{{ users.company.name || "-" }}</dd>
    </dl>
    <p v-else class="user-list__details-hint">
      Es wurde kein Nutzer gefunden / ausgewählt
    </p>
  </div>
</template>

<script>
export default {
  props: {
    users: Object,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.user-list__details {
  width: 60%;
  padding: 1rem;
  color: #192a56;
}
.user-list__details-hl {
  color: #00a8ff;
}
.user-list__details dd {
  margin-bottom: 1rem;
}
.user-list__details-hint {
  border: 2px solid #e84118;
  border-radius: 5px;
  color: #e84118;
  padding: 0.5rem;
}
</style>
