<template>
  <h2>Films :</h2>
  <div>
    <div v-for="film in currentFilms" :key="film._id">
      <button @click="goToFilmDetails(film._id)">{{ film.nom_tournage }}</button>
    </div>
    <br />
    <div>
      <button @click="previousPage">Previous</button>
      <button @click="nextPage">Next</button>
      <div v-if="role === 'admin'">
        <button @click="createFilm">Add Film</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {userRole} from "/src/api.js";
export default {
  data() {
    return {
      token: localStorage.getItem('token'),
      films: [],
      currentPage: 1,
      itemsPerPage: 10,
      role: '',
    };
  },
  computed: {
    currentFilms() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.films.slice(start, end);
    },
  },
  async mounted() {
    await this.fetchFilms();
    this.role = await userRole();
  },
  methods: {
    async fetchFilms() {
      const { data } = await axios.get('http://localhost:3000/locations', {
        headers: {
          'Authorization': `Bearer ${this.token}`,
        }});
      this.films = data;
    },
    goToFilmDetails(filmId) {
      this.$router.push(`/filmDetails/${filmId}`);
    },
    createFilm() {
      this.$router.push('/createFilm');
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < Math.ceil(this.films.length / this.itemsPerPage)) {
        this.currentPage++;
      }
    },
  },
};
</script>