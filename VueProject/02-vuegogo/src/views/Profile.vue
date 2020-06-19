<template>
  <div class="profile">
    <h1>This halaman Profile</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="media text-left">
            <img src="../assets/gambar2.jpg" class="user-pic mr-3">
            <div class="media-body">
              <h5 class="mt-0">{{ firstName }} {{ lastName }}</h5>
              <p>
                Crach ini apa ini itu Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus quo fugit. Voluptate, esse temporibus. Dolorum dignissimos laborum accusantium ratione consectetur tempora architecto, vel minima voluptates inventore temporibus veritatis ipsa. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css' 

export default {
  name: 'Profile',
  data: function () {
    // property: value,
    return {
      firstName: 'Cilok',
      lastName: 'pedas'
    }
  },
  components: {

  }
}
</script>

<style scoped>
.user-pic {
  height: 80px;
  width: 80px;
  border-radius: 40%;
}
</style>