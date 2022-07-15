<template>
  <div class="bg-white dark:bg-slate-900">
      <Head>
        <Title>Khan Khulgun Team</Title>
      </Head>

      <WebHeader/>

      <NuxtPage :key="$route.fullPath"/>
      <WebFooter/>

  </div>
</template>
<script>
import WebHeader from '~/components/layouts/default/WebHeader.vue'
import WebFooter from '~/components/layouts/default/WebFooter.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    WebHeader,
    WebFooter,
  },
  computed: {
    ...mapGetters([
      'user',
      'userToken',
      'saveEventItems'
      // ...
    ]),
  },

}
</script>
