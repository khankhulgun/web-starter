<template>
  <header class="py-10 lg:fixed lg:inset-x-0 bg-white z-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav class="relative z-50 flex justify-between">
        <div class="flex items-center md:gap-x-12">
          <a aria-label="Home" href="/" class="text-slate-700">
            <img src="https://khankhulgun.mn/logo_b.png" class="mx-auto h-10 w-auto" alt="Khan Khulgun"> Khan khulgun
          </a>
          <div class="hidden md:flex md:gap-x-6">


            <nuxt-link
              class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              to="/"
            >
              Home
            </nuxt-link>

            <nuxt-link
              class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              to="/about"
            >
              About
            </nuxt-link>

            <nuxt-link
              class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              to="/ant"
            >
              Ant example
            </nuxt-link>

          </div>
        </div>
        <div class="flex items-center gap-x-5 md:gap-x-8">
          <div class="hidden md:block"><a
            class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            href="/login"
          >Sign in</a></div>
          <a
            class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
            href="/register"
          ><span>Register</span></a>
          <div class="-mr-1 md:hidden">
            <div>
              <button
                class="relative z-10 flex h-8 w-8 items-center justify-center"
                aria-label="Toggle Navigation" id="headlessui-popover-button-:r0:" type="button" aria-expanded="false"
                @click="mobileMenu = true"

              >
                <svg aria-hidden="true" class="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none"
                     stroke-width="2" stroke-linecap="round"
                >
                  <path d="M0 1H14M0 7H14M0 13H14" class="origin-center transition"></path>
                  <path d="M2 2L12 12M12 2L2 12" class="origin-center transition scale-90 opacity-0"></path>
                </svg>
              </button>
              <div  v-show="mobileMenu">
                <button
                  class="relative z-10 flex h-8 w-8 items-center justify-center "
                  aria-label="Toggle Navigation" id="headlessui-popover-button-:R1p6:" type="button"
                  aria-expanded="true" aria-controls="headlessui-popover-panel-:R1p6H1:"
                  @click="mobileMenu = false"

                >
                  <svg aria-hidden="true" class="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none"
                       stroke-width="2" stroke-linecap="round"
                  >
                    <path d="M0 1H14M0 7H14M0 13H14" class="origin-center transition scale-90 opacity-0"></path>
                    <path d="M2 2L12 12M12 2L2 12" class="origin-center transition"></path>
                  </svg>
                </button>
                <div class="fixed inset-0 bg-slate-300/50 opacity-100" id="headlessui-popover-overlay-:r2:"></div>
                <div
                  class="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 opacity-100 scale-100"
                  id="headlessui-popover-panel-:R1p6H1:" tabindex="-1"
                >
                  <nuxt-link
                    class="block w-full p-2"
                    to="/"
                  >
                    Home
                  </nuxt-link>

                  <nuxt-link
                    class="block w-full p-2"
                    to="/about"
                  >
                    About
                  </nuxt-link>

                  <nuxt-link
                    class="block w-full p-2"
                    to="/ant"
                  >
                    Ant example
                  </nuxt-link>


                  <hr class="m-2 border-slate-300/40">
                  <a class="block w-full p-2" href="/login">Sign in</a></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data(){
    return {
      mobileMenu:false
    }
  },
  watch: {
    $route() {
      setTimeout( () => {
        this.mobileMenu = false;
        window.scrollTo(0, 0);
      }, 200 );
    }
  },
  methods: {

  }
}
</script>
