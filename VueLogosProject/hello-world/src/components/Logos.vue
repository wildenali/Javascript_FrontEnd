<template>
    <div>
        <div class="logos-wrapper">
            <h2 class="title-header">Cek Logos</h2>
            <div class="item-logos">
                <img class="logo" alt="Burger1 logo" src="../assets/burger1.png">
            </div>
            <div class="item-logos">
                <img class="logo" alt="Burger1 logo" src="../assets/burger2.png">
            </div>
            <div class="item-logos">
                <img class="logo" alt="Burger1 logo" src="../assets/burger3.png">
            </div>
            <div class="item-logos">
                <img class="logo" alt="Burger1 logo" src="../assets/burger4.png">
            </div>
            <div class="item-logos">
                <img class="logo" alt="Burger1 logo" src="../assets/burger5.png">
            </div>
            <div class="item-logos">
                <img class="logo" alt="Burger1 logo" src="../assets/burger6.png">
            </div>
            <div class="item-logos">
                <img class="logo" alt="Burger1 logo" src="../assets/burger7.png">
            </div>
            <div class="item-logos">
                <img class="logo" alt="Burger1 logo" src="../assets/burger8.png">
            </div>
            <div class="item-logos">
                <img class="logo" alt="Burger1 logo" src="../assets/martabak.png">
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Logos'
}
</script>

<style scoped>
.title-header {
    margin-bottom: 80px;
}

.logos-wrapper {
    width: 52%;
    overflow: hidden;
    margin: auto;
}

.item-logos {
    float: left;
    margin-left: 70px;
    margin-bottom: 70px;
    width: 150px;
    height: 150px;
}
.item-logos .logo {
    width: 150px;
    height: 150px;
}
</style>