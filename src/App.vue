<template>
  <nav>
    <router-link to="/">Home </router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
