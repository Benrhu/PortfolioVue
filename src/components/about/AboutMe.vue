<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Desarrollo soluciones tecnológicas para facilitar procesos a otras empresas, reduciendo costes y generando beneficio.',
				},
				{
					id: 2,
					bio:
						'En cuanto al FrontEnd, me flipan los detalles visuales y la filosofía "Mobile first", en cuanto al BackEnd, me gusta crear APIs que sean útiles.',						
				},
				{
					id: 3,
					bio:
						'También  me gusta crear utilidades internas, como un dashboard para ayudarme a mi y mi equipo a captar clientes.',						
				},

			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/me.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
