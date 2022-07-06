<template>
  <main>
    <div class="w-full p-5">
      <div
        class="flex justify-center p-5 rounded-lg bg-gradient-to-br from-blue-700 to-light-blue-500"
      >
        <h1 class="text-3xl font-bold text-white">
          Aplikasi Data Produk Deskripsi
        </h1>
      </div>

      <router-view/>
    </div>

    <!-- <router-view /> -->
  </main>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
