<!-- Please remove this file from your project -->
<template>
	<div class="flex flex-col lg:flex-row justify-center items-center">
		<img
			class="h-56 lg:h-screen w-full lg:w-1/2 object-cover"
			src="~/assets/ota.webp"
			alt="Akihabara Illustration"
		/>
		<div class="lg:w-1/2 pt-6 px-4 sm:px-6 lg:px-8 px-4">
			<h1
				class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
			>
				Coming Soon
			</h1>
			<p
				class="lg:w-3/4 text-justify mt-3 text-base text-gray-500 sm:text-lg md:text-xl"
			>
				We tried our best to ensure refined quality
				website for you with our small group's tiny labs
				and deep research, to make sure you had the best
				experiences while surfing on otabyte.
			</p>
			<span
				class="absolute bottom-0 lg:right-0 p-4 text-gray-900"
				>Copyright &copy; 2019 -
				{{ new Date().getFullYear() }} OtaByte All
				Rights Reserved.</span
			>
		</div>
	</div>
</template>

<script>
export default {
	name: 'OtaMaintenance',
}
</script>
