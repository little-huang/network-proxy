<template>
  <div class="index-view">
    <!-- start header -->
    <div class="index-header">
      <base-button @event="add">添加</base-button>
    </div>
    <!-- end header -->
  </div>
</template>

<script>
export default {
  name: 'index-view',
  data() {
    return {

    };
  },
  methods: {
    add() {
      // TODO: do something ...
    }
  }
};
</script>

<style lang="scss">
  .index-header {
    display: flex;
    justify-content: flex-end;

    .base-button {
      width: 70px;
    }

  }
</style>