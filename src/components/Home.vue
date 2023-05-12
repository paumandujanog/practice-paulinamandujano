<template>
  <div>
    <h1>{{ message }}</h1>
    <ul>
      <li v-for='item in items' :key='item.id'>
        {{ item.name }}
        {{ item.status }}
        <button @click='deleteItem(item.id)'>Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import axios from 'axios';
import { RickAndMortyDto } from '@/entities/rick-morty.dto';

export default defineComponent({
  data() {
    return {
      message: 'CRUD con Vue.js y TypeScript',
      items: [] as RickAndMortyDto[],
      newItemName: ''
    };
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      this.getCharacters();
    },
    async getCharacters() {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character?status=alive');
        console.log(response.data.results);
        return this.items = response.data.results
      } catch (error) {
        console.log(error);
      }

    }
  }
});
</script>
