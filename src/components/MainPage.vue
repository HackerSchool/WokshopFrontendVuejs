<template>
  <div>
    <h1>Welcome to your Torrents Hacking System</h1>
    <router-link :to= "{name: 'Home'}" > Home </router-link> <br>
    <router-link :to= "{name: 'Dashboard'}" > Dashboard</router-link>
    <main class="main-content">
      <div class="container">
        <router-view class="col"></router-view>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Index'
}
</script>
