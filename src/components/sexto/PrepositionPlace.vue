<template>
	<b-container>
		<Header6 />
		<b-card class="shadow-lg">
			<b-card-title>Prepositions of Place</b-card-title>
			<b-card-sub-title>Preposições de Lugar</b-card-sub-title>
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>
					As preposições de lugar são usadas para mostrar a posição ou localização de uma coisa em relação à outra. As preposições respondem a pergunta <strong>"Onde?"</strong> Abaixo segue uma lista com as preposições mais comuns de lugar:
				</p>
				<b-row>
					<b-col>
						<b-card class="shadow mb-2 cards">
							<b-table class="text-danger" striped hover :items="items">
							</b-table>
						</b-card>
					</b-col>  
				</b-row>
				<div class="rules mt-2">
					<h5>Explicações com exemplos de uso das preposições mais duvidosas.</h5>
					<ul>
						<li><strong class="text-primary">Above</strong> - quando se quer falar que algo/alguém está "mais alto do que", sem haver contato. Ex.: Spider-Man is <strong class="text-primary">above</strong> the building. (O Homem-Aranha está <strong class="text-primary">sobre</strong> o prédio.)</li>
						<li><strong class="text-primary">Between</strong> - <strong>entre duas coisas ou pessoas</strong>. Ex.: Spider-Man is <strong class="text-primary">between</strong> Mary Jane and Gwen Stacy. (O Homem-Aranha está <strong class="text-primary">entre</strong> Mary Jane e Gwen Stacy.)</li>
						<li><strong class="text-primary">Among</strong><strong> - entre três ou mais coisas/pessoas</strong>.  Ex.: Spider-Man is <strong class="text-primary">among</strong> Mary Jane, Gwen Stacy and Betty Brant. (O Homem-Aranha está <strong class="text-primary">entre</strong> Mary Jane, Gwen Stacy e Betty Brant.)</li>
						<li><strong class="text-primary">In</strong> -  quando se quer falar em <strong>estar dentro</strong> de uma área, de um lugar fechados, de um bairro, de uma cidade, de um país ou de um continente. Ex.: Spider-Man is <strong class="text-primary">in</strong> New York. (O Homem-Aranha está <strong class="text-primary">em</strong> Nova York.)</li>
						<li><strong class="text-primary">On</strong> - quando se quer indicar a superfície de alguma coisa havendo contato ou o endereço incompleto, a rua ou o andar. Ex.: Peter Parker lived <strong class="text-primary">on</strong> Ingram St. (Peter Parker morou <strong class="text-primary">na</strong> Rua Ingram.)</li>
						<li><strong class="text-primary">At</strong> - quando se quer falar um endereço completo ou uma localização específica. Ex.: Peter Parker lived <strong class="text-primary">at</strong> 20 Ingram St. (Peter Parker morou <strong class="text-primary">na</strong> Rua Ingram, nº 20.)</li>
						<li><strong class="text-primary">In front of</strong> - quando se quer indicar que há um pequeno espaço em relação ao que está <strong>em frente</strong>. Ex.: Spider-Man is <strong class="text-primary">in front of</strong> Green Goblin. (O Homem-Aranha está <strong class="text-primary">na frente</strong> do Duende Verde.)</li>
						<li><strong class="text-primary">Next to</strong> - quando se quer indicar algo/alguém que está/é <strong>'vizinho'</strong>. Ex.: Mary Jane lives <strong class="text-primary">next to</strong> Peter Parker. (Mary Jane mora <strong class="text-primary">ao lado de</strong>  Peter Parker.)</li>					
					</ul>
				</div>
			</b-card-text>
		</b-card>
	</b-container>

</template>

<script>
import Header6 from './Header6'
export default {
	name: 'PrepositionPlace',
	components: {
		Header6
	},
	data () {
		return {
			items: [
			{ Preposition: "ABOVE", Preposição: "EM CIMA, SOBRE"},
			{ Preposition: "AMONG", Preposição: "ENTRE"},
			{ Preposition: "AT", Preposição: "NO, NA"},
			{ Preposition: "BEHIND", Preposição: "ATRÁS DE"},
			{ Preposition: "BELOW", Preposição: "ABAIXO DE"},
			{ Preposition: "BETWEEN", Preposição: "ENTRE"},
			{ Preposition: "IN", Preposição: "EM, NO, NA"},
			{ Preposition: "IN FRONT OF", Preposição: "NA FRENTE DE"},
			{ Preposition: "NEXT TO", Preposição: "AO LADO"},
			{ Preposition: "NEAR", Preposição: "PRÓXIMO"},
			{ Preposition: "ON", Preposição: "NO, NA"},
			{ Preposition: "OVER", Preposição: "ACIMA, SOBRE"},
			{ Preposition: "UNDER", Preposição: "EMBAIXO, SOB"},
			],

		}
	}
}
</script>

<style lang="css" scoped>
.rules {
	text-align: left;
}

</style>
