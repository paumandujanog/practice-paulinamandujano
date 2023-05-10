<template>
  <div>
    <h1>{{ message }}</h1>
    <ul>
      <li v-for='item in items' :key='item.id'>
        {{ item.name }}
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
    // addItem() {
    //   const newItem = {
    //     name: this.newItemName
    //   };

    //   axios.post('https://jsonplaceholder.typicode.com/todos', newItem)
    //     .then(response => {
    //       this.items.push(response.data);
    //       this.newItemName = '';
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // },
    // deleteItem(itemId) {
    //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${itemId}`)
    //     .then(() => {
    //       this.items = this.items.filter(item => item.id !== itemId);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }
  }
});
</script>
