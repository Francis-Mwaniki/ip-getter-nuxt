<template>
    <!-- component -->
  <body class="font-mono bg-slate-900">
          <!-- Container -->
          <div class="container mx-auto">
              <div class="flex justify-center px-6 my-12">
                  <!-- Row -->
                  <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                      <!-- Col -->
                      <div
                          class="w-full h-auto bg-gray-100 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                          style="background-image: url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"
                      ></div>
                      <!-- Col -->
                      <div class="w-full lg:w-1/2bg-gray-900 p-5 rounded-lg lg:rounded-l-none">
                          <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
                          <form class="px-8 pt-6 pb-8 mb-4 bg-gray-900 rounded" @submit.prevent="submit">
                              <div class="mb-4">
                                  <label class="block mb-2 text-sm font-bold text-gray-200" for="username">
                                      Email
                                  </label>
                                  <input
                                      class="w-full px-3 py-2 text-sm leading-tight text-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                      id="email"
                                      type="email"
                                      v-model="email"
                                      placeholder="Email"
                                  />
                              </div>
                              <div class="mb-4">
                                  <label class="block mb-2 text-sm font-bold text-gray-200" for="password">
                                      Password
                                  </label>
                                  <input
                                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                      id="password"
                                      type="password"
                                      v-model="password"
                                      placeholder="******************"
                                  />
                                  <p class="text-xs italic text-red-500">Please choose a password.</p>
                              </div>
                              <div class="mb-4">
                                  <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                  <label class="text-sm" for="checkbox_id">
                                      Remember Me
                                  </label>
                              </div>
                              <div class="mb-6 text-center">
                                  <button
                                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                      type="submit"
                                  >
                                      Sign In
                                  </button>
                              </div>
                              <hr class="mb-6 border-t" />
                              <div class="text-center">
                                  <nuxt-link
                                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                     to="/register"
                                  >
                                      Create an Account!
                                  </nuxt-link>
                              </div>
                              <div class="text-center">
                                  <nuxt-link
                                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                      to="/reset-password"
                                  >
                                      Forgot Password?
                                  </nuxt-link>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </body>
  </template>
  
  <script>
  export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    async submit() {
      let url = "http://localhost:8000/login/";
      let res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        await this.$router.push("/ip");
      } else {
        let data = await res.json();
        console.log(data);
        await this.$router.push("/login");
      }
    },
  },
};
  </script>
  
  <style>
  
  </style>