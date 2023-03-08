<template>
  <div>
    <h1>Edit Film</h1>
    <form @submit.prevent="submitEditForm">
      <div>
        <label for="filmName">Name:</label>
        <input type="text" id="filmName" v-model="filmName" />
      </div>
      <div>
        <label for="filmType">Film Type:</label>
        <input type="text" id="filmType" v-model="filmType" />
      </div>
      <div>
        <label for="filmDirectorName">Film Director Name:</label>
        <input type="text" id="filmDirectorName" v-model="filmDirectorName" />
      </div>
      <div>
        <label for="filmProducerName">Film Producer Name:</label>
        <input type="text" id="filmProducerName" v-model="filmProducerName" />
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address" />
      </div>
      <div>
        <label for="district">District:</label>
        <input type="text" id="district" v-model="district" />
      </div>
      <div>
        <label for="year">Year:</label>
        <input type="text" id="year" v-model="year" />
      </div>
      <br />
      <button type="submit">Submit Changes</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import {fetchFilmInfos, postFilm} from "/src/api.js";
export default {
  data() {
    return {
      filmId: this.$route.params.filmId,
      filmName: '',
      filmType: '',
      filmDirectorName: '',
      filmProducerName: '',
      address: '',
      district: '',
      year: '',
    }
  },
  created() {
    this.filmId = this.$route.params.filmId;
    this.fetchFilm();
  },
  methods: {
    async fetchFilm() {
      try {
        const data = await fetchFilmInfos(this.filmId);
        this.filmName = data.nom_tournage;
        this.filmType = data.type_tournage;
        this.filmDirectorName = data.nom_realisateur;
        this.filmProducerName = data.nom_producteur;
        this.address = data.adresse_lieu;
        this.district = data.ardt_lieu;
        this.year = data.annee_tournage;
      } catch (error) {
        console.error(error);
      }
    },
    async submitEditForm() {
      let response = await postFilm(this.filmName, this.filmType, this.filmDirectorName, this.filmProducerName, this.address, this.district, this.year, this.filmId);
      if(response.success) {
        alert('Location updated successfully!');
      }
      else {
        alert('An error occurred, please try again later');
      }
    }
  }
};
</script>