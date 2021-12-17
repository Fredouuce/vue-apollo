<template>
  <div v-if="myAnimes === 0">Afiche moi</div>
  <div v-else>
    <h1>Page {{ routePage }}</h1>
    <button @click="routePage--" v-if="routePage > 1">Previous</button>
    <button @click="routePage++">Next</button>

    <div v-for="anime in myAnimes.media" :key="anime.id">
      <p>{{ anime.title.romaji }}</p>
      <img :src="anime.coverImage.large" alt="" />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "HelloWorld",
  data() {
    return {
      myAnimes: [],
      routePage: 1,
    };
  },
  apollo: {
    myAnimes: {
      query: gql`
        query getAnime($id: Int, $page: Int, $perPage: Int) {
          myAnimes: Page(page: $page, perPage: $perPage) {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
            media(id: $id, type: ANIME) {
              id
              title {
                romaji
                native
              }
              genres
              bannerImage
              coverImage {
                extraLarge
                large
                medium
                color
              }
            }
          }
        }
      `,
      variables() {
        return {
          page: this.routePage,
          perPage: 30,
        };
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
