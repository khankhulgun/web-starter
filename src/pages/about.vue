<template>
  <Head>
    <Title>About</Title>
  </Head>
  <div>
    <div class="container  m-auto">
      <h1 class="text-3xl font-bold ">
        About
      </h1>
    </div>

    <div class="container ">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img class="w-full aspect-video img" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80" />
        <img class="w-full aspect-video img" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80" />
        <img class="w-full aspect-video img" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80" />
        <img class="w-full aspect-video img" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80" />
        <img class="w-full aspect-video img" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80" />

      </div>
    </div>

    <Banner />
  </div>
</template>

<script>

import Banner from "../components/home/Banner"
export default {

  components: {
    Banner
  },
  data() {
    return {

    };
  },
};
</script>
