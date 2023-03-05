<script>
export default {
  data() {
    return {
      token: localStorage.getItem('token',),
    }
  },
}
</script>

<template>
  <main>
    <router-link to="/">Home</router-link> |
    <router-link to="/data">Data</router-link>
    <router-view/>
  </main>
</template>