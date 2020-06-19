<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <br>
    <br>

    <div class="container">
      <div class="row header mb-5 p-3">
        <div class="col-lg-12">
          <h2>Ngapain NIH</h2>
        </div>
      </div>
      <div class="row content">
        <div class="col-lg-12">
          <div class="pekerjaan-rumah">      
            <div class="row">
              <div v-for="tugasApa in tugas" v-bind:key="tugasApa.id" class="mb-4 tugas col-lg-12 text-left">
                 
                 <ItemTugas v-bind:tugasApa="tugasApa" /> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import ItemTugas from "./components/ItemTugas.vue";


export default {
  name: "app",
  data: function () {
    return {
      tugas: [
        {
          id: 1,
          nama: 'Membersihkan Genteng',
          isDone: false
        },
        {
          id: 2,
          nama: 'Menguras Sumur',
          isDone: false
        },
        {
          id: 3,
          nama: 'Mengeringkan Bak Mandi',
          isDone: false
        },
        {
          id: 4,
          nama: 'Menggoreng sop',
          isDone: false
        },
        {
          id: 5,
          nama: 'Nyuci Lantai',
          isDone: false
        }
      ]
    };
  },
  components: {
    ItemTugas
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  background: chartreuse;
}

.header h2 {
  margin: 0;
}

.tugas .item {
  font-size: 30px;
}

.item-completed {
  color: #1abc9c;
}
</style>
