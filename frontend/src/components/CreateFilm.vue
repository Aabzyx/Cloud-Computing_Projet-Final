<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="filmName" v-model="filmName" />
    </div>
    <div class="form-group">
      <label for="filmType">Film Type</label>
      <input type="text" id="filmType" v-model="filmType" />
    </div>
    <div class="form-group">
      <label for="filmDirectorName">Film Director Name</label>
      <input type="text" id="filmDirectorName" v-model="filmDirectorName" />
    </div>
    <div class="form-group">
      <label for="filmProducerName">Film Producer Name</label>
      <input type="text" id="filmProducerName" v-model="filmProducerName" />
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" id="address" v-model="address" />
    </div>
    <div class="form-group">
      <label for="district">District (only integers, or else rerun backend)</label>
      <input type="text" id="district" v-model="district" />
    </div>
    <div class="form-group">
      <label for="year">Year</label>
      <input type="number" id="year" v-model="year" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      filmName: '',
      filmType: '',
      filmDirectorName: '',
      filmProducerName: '',
      address: '',
      district: '',
      year: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('http://localhost:3000/locations', {
          filmName: this.filmName,
          filmType: this.filmType,
          filmDirectorName: this.filmDirectorName,
          filmProducerName: this.filmProducerName,
          address: this.address,
          district: this.district,
          year: this.year
        }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }});
        this.filmName = '';
        this.filmType = '';
        this.filmDirectorName = '';
        this.filmProducerName = '';
        this.address = '';
        this.district = '';
        this.year = '';
        alert('Location created successfully!');
      } catch (error) {
        alert('An error occurred, please try again later');
      }
    }
  }
};
</script>