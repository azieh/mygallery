<template>
  <section id="blog">
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Co tam na Instagramie?</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col cols="12" md="4" v-for="feed in instaFeed" v-bind:key="feed">
          <instagram-embed
            class-name="mb-4"
            hide-caption="true"
            :url="feed"
            :max-width="500"
          />
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import InstagramEmbed from "vue-instagram-embed";
const instaFeed = [
  "https://www.instagram.com/p/BgPNVkghElY/",
  "https://www.instagram.com/p/Bf1VWwyh4Zd/",
  "https://www.instagram.com/p/BfxtkuwhPan/",
  "https://www.instagram.com/p/BfqVsK6B-zo/",
  "https://www.instagram.com/p/Bfls5eEBGzA/",
  "https://www.instagram.com/p/Bfi_c7zhA1F/",
  "https://www.instagram.com/p/Bfgai0tBUkC/",
  "https://www.instagram.com/p/BfeWcJ_BNcR/",
  "https://www.instagram.com/p/BcIKtiKhjZn/",
  "https://www.instagram.com/p/BcGPNavgJz2/",
  "https://www.instagram.com/p/Bb9faNVBtO1/",
  "https://www.instagram.com/p/Bb7m9wdB5wo/",
  "https://www.instagram.com/p/Bb0GLNbh2cX/",
  "https://www.instagram.com/p/BbHCVbrhqaV/",
  "https://www.instagram.com/p/BbBmkonBkSF/",
  "https://www.instagram.com/p/Ba_8tjdBkmn/",
  "https://www.instagram.com/p/Ba9rXjlBqTt/",
  "https://www.instagram.com/p/BaWVLDeh4dC/",
  "https://www.instagram.com/p/BZGjzwPA79P/",
  "https://www.instagram.com/p/BY0OnE3g0rU/",
  "https://www.instagram.com/p/BYq9rDZgK-2/",
  "https://www.instagram.com/p/BYgydXygFmB/",
  "https://www.instagram.com/p/BX84cYRgUSX/",
  "https://www.instagram.com/p/BXYkToMgf60/",
  "https://www.instagram.com/p/BXLojuRgrYU/",
  "https://www.instagram.com/p/BXJC-ahAcNw/",
  "https://www.instagram.com/p/BWAz09tgfIE/",
  "https://www.instagram.com/p/BV4NyLDgdNO/",
  "https://www.instagram.com/p/BV2jg3WAYm6/",
  "https://www.instagram.com/p/BVu9xTpgv_l/",
  "https://www.instagram.com/p/BVuA68fgqId/",
  "https://www.instagram.com/p/BVsGqsNAIdy/",
  "https://www.instagram.com/p/BVkobDWAdg6/",
  "https://www.instagram.com/p/BVfOY4Mge8Q/",
  "https://www.instagram.com/p/BVVXHpsgc90/",
  "https://www.instagram.com/p/BVVVls5gZkd/",
  "https://www.instagram.com/p/BVIHp5cg3il/",
  "https://www.instagram.com/p/BVFzs_lgh4i/",
  "https://www.instagram.com/p/BVFy0d2An8r/",
  "https://www.instagram.com/p/BVFvyjQgPIp/",
  "https://www.instagram.com/p/BU4nP0FAO97/",
  "https://www.instagram.com/p/BUB48_pAGcI/",
  "https://www.instagram.com/p/BTfFscwAdPP/",
  "https://www.instagram.com/p/BTYliEPgr_D/",
  "https://www.instagram.com/p/BTR0lhfDR7W/",
  "https://www.instagram.com/p/BTFQX7CgyVk/",
  "https://www.instagram.com/p/BS6r9NXAp9W/",
  "https://www.instagram.com/p/BR9JKemg7zV/",
  "https://www.instagram.com/p/BRQaQEFgiQ4/",
  "https://www.instagram.com/p/BQ6AH6uA5JR/",
  "https://www.instagram.com/p/BQnPAc4gXQ3/",
  "https://www.instagram.com/p/BQfnzSrgQBR/",
  "https://www.instagram.com/p/BQdqfywg09I/",
  "https://www.instagram.com/p/BP5FSYtAl9h/",
  "https://www.instagram.com/p/BP3OIdcgLlG/",
  "https://www.instagram.com/p/BPdayrygaLg/",
  "https://www.instagram.com/p/BPLEKxPAeRy/",
  "https://www.instagram.com/p/BPAx8Igg8uV/",
  "https://www.instagram.com/p/BOs5N53g21x/",
  "https://www.instagram.com/p/BOKUBmigwI7/"
];
export default {
  name: "Instagram",
  components: {
    InstagramEmbed
  },
  data: () => {
    return {
      instaFeed
    };
  }
};
</script>
