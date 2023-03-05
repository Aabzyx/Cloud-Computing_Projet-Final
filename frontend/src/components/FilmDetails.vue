<template>
  <div>
    <h2>Nom : {{filmInfos.filmName}}</h2>
    <h4>Type : {{filmInfos.filmType}}</h4>
    <h4>Nom du(des) directeur(s) : {{filmInfos.filmDirectorName}}</h4>
    <h4>Société de production : {{filmInfos.filmProducerName}}</h4>
    <h4>Adresse : {{filmInfos.address}}</h4>
    <h4>Arrondissemnt : {{filmInfos.district}}</h4>
    <h4>Année : {{filmInfos.year}}</h4>
  </div>
  <div v-if="role === 'admin'">
    <button @click="goToEditFilm(filmId)">Edit</button>
    <button @click="confirmDelete">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
import {userRole, fetchFilmInfos, deleteFilm} from "/src/api.js";
export default {
  data() {
    return {
      filmId: this.$route.params.filmId,
      filmInfos: [],
      role: '',
    };
  },
  async mounted() {
    this.filmInfos = await fetchFilmInfos(this.filmId);
    this.role = await userRole();
  },
  methods: {
    async confirmDelete() {
      if(confirm("Are you sure you want to delete this film ?")) {
        await this.deleteFilm();
      }
    },
    async deleteFilm() {
      let response = await deleteFilm(this.filmId);
      if(response.success) {
        alert('Film deleted successfully !');
        this.$router.back();
      } else {
        alert('An error occurred, please try again later');
      }
    },
    goToEditFilm(filmId) {
      this.$router.push(`/editFilm/${filmId}`);
    },
  }
};
</script>