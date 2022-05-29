<template>
	<div class="w-screen relative">
		<div class="grid gap-4 grid-cols-7 max-w-full px-8">
			<div class="text-6xl w-16 h-20 text-center mt-10">
				おたバイト
			</div>
			<img
				class="col-span-5"
				src="~/assets/megumin_doodle.jpg"
				alt="Megumin act as Lily"
			/>
			<div class="flex justify-center">
				<OtaLogo class="w-20" />
			</div>
			<div
				class="col-span-7 flex justify-center max-w-full font-['Montserrat'] text-5xl py-32 font-extralight"
			>
				MORE THAN HOBBY
			</div>
			<img
				style="transform: scale(-1, 1)"
				class="col-span-3 -scale-x-100"
				src="~/assets/megumin_doodle.jpg"
				alt="Megumin act as Lily"
			/>
			<div
				class="col-span-4 flex flex-col justify-center pl-8"
			>
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
			</div>
			<div class="mt-20 flex col-span-7 gap-4 justify-center">
				<div
					v-for="i in 6"
					:key="i"
					class="hover:bg-gray-50 rounded-md border border-gray-800 py-64 px-10"
				>
					Featured #{{ i }}
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
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;800&display=swap');
</style>
