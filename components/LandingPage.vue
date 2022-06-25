<template>
	<div class="w-screen relative">
		<div class="grid gap-4 grid-cols-7 max-w-full px-8">
			<div class="absolute">
				<OtaLogo class="w-20" />
			</div>
			<div class="col-span-7">
				<img class="h-screen mx-auto object-cover" src="~/assets/megumin_doodle.jpg"
					alt="Megumin act as Lily" />
				<div class="mx-auto px-4 pt-4 pb-16 sm:pt-6 sm:pb-24 sm:px-6 lg:px-8">
					<div class="text-center">
						<p
							class="font-['Montserrat'] text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
							Made Hobby to Creativity</p>
						<p class="max-w-xl mx-auto text-xl text-gray-500">We believe our passion would be able to
							pursue being creative.</p>
					</div>
				</div>
			</div>

			<img style="transform: scale(-1, 1)" class="mt-12 col-span-3" src="~/assets/megumin_doodle.jpg"
				alt="Megumin act as Lily" />
			<div class="col-span-4 flex flex-col justify-center pl-8">
				<div class="font-bold text-4xl mb-2">
					NON RESPECTIVE TITLE
				</div>
				<div>
					Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Ut, quasi eos placeat
					cumque voluptatum excepturi nulla? Fuga
					consequuntur ex alias doloremque,
					praesentium commodi ipsam maiores
					possimus quaerat dolores optio ratione.
				</div>
				<div
					class="mt-4 bg-gray-800 hover:bg-gray-700 rounded-md text-white font-bold py-2 px-4 w-32 text-center">
					JOIN US</div>
			</div>
			<div class="col-span-7 mt-20 font-bold text-4xl text-center">
				Our Project
			</div>
			<div class="flex col-span-7 gap-4 justify-center">
				<div v-for="project in projects" :key="project.id" class="rounded-2xl h-96 w-72 relative shadow-md">
					<div class="w-full h-2/3 bg-cover bg-center rounded-t-2xl"
						:style="'background-image: url(' + project.image + ')'">
					</div>
					<div class="px-4 absolute bottom-0 h-2/5 flex flex-col justify-center bg-white rounded-2xl">
						<div class="absolute top-0 right-0 -mt-4 mr-4 w-8 h-8 bg-gray-800 rounded-full">
						</div>
						<span class="block text-xl font-bold">{{ project.name }}</span>
						<span>{{ project.description }}</span>
						<a :href="project.url" class="text-blue-600 hover:text-blue-500">Learn more</a>
					</div>
				</div>
			</div>
			<div class="col-span-7 flex justify-center py-10">
				Copyright &copy; 2019 -
				{{ new Date().getFullYear() }} OtaByte All
				Rights Reserved.
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'OtaLanding',
	data() {
		return {
			photo: require('~/assets/ota.webp'),
			projects: [
				{
					id: 0,
					name: 'Ohayou Post',
					description: 'Lorem ipsum dor sit amet, kolor amat kesangkut pas ngerem.',
					url: 'https://www.ohayoupost.com',
					image: require('~/assets/shots/ohayou.png')
				},
				{
					id: 1,
					name: 'Tomodachi',
					description: 'Lorem ipsum dor sit amet, kolor amat kesangkut pas ngerem.',
					url: 'https://tomo.or.id/',
					image: require('~/assets/shots/izumi.png')
				},
				{
					id: 2,
					name: 'aByte',
					description: 'Lorem ipsum dor sit amet, kolor amat kesangkut pas ngerem.',
					url: 'https://izumi.otabyte.net/',
					image: require('~/assets/shots/izumi.png')
				},
				{
					id: 3,
					name: 'NakaV',
					description: 'Lorem ipsum dor sit amet, kolor amat kesangkut pas ngerem.',
					url: 'https://izumi.otabyte.net/',
					image: require('~/assets/shots/izumi.png')
				},
				{
					id: 4,
					name: 'Izumi Clan',
					description: 'Lorem ipsum dor sit amet, kolor amat kesangkut pas ngerem.',
					url: 'https://izumi.otabyte.net/',
					image: require('~/assets/shots/izumi.png')
				},
			]
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;800&display=swap');
</style>
