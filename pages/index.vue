
<template>
  <section>
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">What's An Ip Address?</h3>
    <p class="py-4">
      An IP address (Internet Protocol address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves two main functions: identifying the host or network interface, and providing the location of the host in the network. IP addresses are usually written and displayed in human-readable notation, such as 192.168.1.100.

There are two types of IP addresses: IPv4 and IPv6. IPv4 addresses are 32-bit numbers often written in the dotted-decimal notation (e.g., 192.168.1.100), while IPv6 addresses are 128-bit numbers written in hexadecimal notation (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334). The main difference between the two is the number of possible unique addresses, IPv4 has a limited number of addresses while IPv6 has a large number of addresses.
    </p>
  </div>
</div>
		<div class="bg-slate-900">
			<div class="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-100">
				<h1 class="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-100">Ip address are protocol credentials</h1>
				<p class="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-100">Explicit and covered ip use VPN!</p>
				<div class="flex flex-wrap justify-center">
					<Nuxt-Link to="/register"  class="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get started</Nuxt-Link>
          <label for="my-modal-3" class="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-100">Learn more</label>
         </div>
			</div>
		</div>
		<img src="https://media.istockphoto.com/id/184919479/photo/messy-desktop.jpg?b=1&s=170667a&w=0&k=20&c=kE4N8dbgP3q5pEfFRMUvpVGemMWfacNwP7Cu4P1Wm3g=" alt="" class="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-slate-800">
	</section>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
