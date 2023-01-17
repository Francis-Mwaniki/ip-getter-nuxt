<template>
  <div class=" text-white">
    Hello your ip {{ ip }}
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
      let url = "http://localhost:8000/";
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
  },
}
</script>

<style>

</style>