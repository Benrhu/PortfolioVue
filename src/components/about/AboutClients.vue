<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Algunas de las tecnología que uso',
			clients: [
				{
					id: 1,
					title: 'Mongo',
					img: require('@/assets/images/mongodb.png'),
				},
				{
					id: 2,
					title: 'NodeJs',
					img: require('@/assets/images/nodejs.png'),
				},
				{
					id: 3,
					title: 'Vue 3',
					img: require('@/assets/images/vue.png'),
				},
				{
					id: 4,
					title: 'FILA',
					img: require('@/assets/images/brands/fila_gray.png'),
				},
				{
					id: 5,
					title: 'NB',
					img: require('@/assets/images/brands/nb_gray.png'),
				},
				{
					id: 6,
					title: 'SAMSUNG',
					img: require('@/assets/images/brands/samsung_gray.png'),
				},
				{
					id: 7,
					title: 'CANON',
					img: require('@/assets/images/brands/canon_gray.png'),
				},
				{
					id: 7,
					title: 'PUMA',
					img: require('@/assets/images/brands/puma_gray.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
