<template>
<div class="flex min-h-screen bg-slate-900">
    <div class="relative flex justify-center max-w-full py-4 m-auto bg-white shadow-2xl px-3">
        <span class="absolute top-0 right-0 block w-10 h-5 -mt-2 -mr-4 text-xs text-center text-gray-600 transform rotate-45 bg-white rounded shadow-md cursor-pointer hover:bg-gray-100">ip</span>
        <div class="w-1/2 ml-4 bg-cover m-1" style="background-image:url('https://media.istockphoto.com/id/1440433765/photo/users-accessing-website-through-virtual-private-network-to-hide-the-internet-traffic-online.jpg?b=1&s=170667a&w=0&k=20&c=kQ19_h9cR9hz75p6-RGIoxpIEWHL9KjYB-mOBdA8Pks=')">
        </div>
        <div class="flex flex-col justify-between w-1/2 px-4 space-y-2">
            <div>
                <h1 class=" text-sm font-bold leading-tight text-red-800">
                  Your ip address is currently  
                </h1>
                
            </div>
            <div>
                <form>
                  
                    <button class="block w-full min-w-full  text-red-400   py-3 rounded shadow-lg " > {{ ip }}</button>
                </form>
                <ul class="flex justify-center mt-4 space-x-3 text-xs text-gray-700 px-2">
                    <li class="flex items-center px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-5 h-5 mr-1 text-green-500 fill-current">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <p>Ip</p>
                    </li>
                    <li class="flex items-center px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-5 h-5 mr-1 text-green-500 fill-current">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        <p>protocols</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            ip:''
        }
    },
    mounted(){
        this.getIp()
         
    },
    methods: {
    async getIp() {
      //let url = "http://localhost:8000/";
      let url ="https://ip-getter.vercel.app/"
      let res = await fetch(url, {
        method: "GET",
      });
      if (res.ok) {
        let data = await res.json();
        this.ip=data
        console.log(data);
        await this.$router.push("/ip");
      } else {
        let data = await res.json();
        console.log(data);
        await this.$router.push("/");
      }
    },
    async getUser() {
     try {
      let url = "http://localhost:8000/user/";
     // let url ="https://ip-getter.vercel.app/"
      let res = await fetch(url );
      if (res.ok) {
        // let data = await res.json();
        // console.log(data);
        await this.$router.push("/ip");
      } else {
        // let data = await res.json();
        // console.log(data);
        await this.$router.push("/");
      }
     } catch (error) {
      console.log(`An error ${error}`);
     }
    },
  },
}
</script>

<style>

</style>