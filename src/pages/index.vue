<template>
  <div>
    <Top />
    <Banner />
<!--    <Promotion/>-->
    <FAS/>
  </div>
</template>

<script>

import Banner from "../components/home/Banner"
import FAS from "../components/home/FAS"
import Promotion from "../components/home/Promotion"
import Top from "../components/home/Top"
export default {

  components: {
    Top,
    Banner,
    Promotion,
    FAS
  },
  data() {
    return {

    };
  },
};
</script>
<style scoped>
</style>
