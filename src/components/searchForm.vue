<script setup>
import { ref, computed } from 'vue';
import { EventBus } from './messageBus.js';

const searchQuery = ref('');

EventBus.messageData = {
  searchText: searchQuery,
};
</script>

<template>
  <form id="search" class="searchForm">
    <h3>Filter Deals:</h3>
    <input name="query" v-model="searchQuery" autocomplete="off" />
  </form>
</template>

<style>
.searchForm {
  text-align: left;
  margin: 10px;
}

input {
  margin: 5px;
}
</style>
