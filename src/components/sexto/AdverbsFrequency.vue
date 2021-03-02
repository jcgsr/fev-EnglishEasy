<template>
	<b-container>
		<Header6 />
		<b-card class="shadow-lg">
			<b-card-title>Adverbs of Frequency</b-card-title>
			<b-card-sub-title>Advérbios de Frequência</b-card-sub-title>
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>
					Advérbios de frequência são advérbios de tempo que respondem à pergunta <em>"Com que frequência?"</em>. Eles permitem expressar com que regularidade algo acontece. Abaixo segue uma pequena (pois existem muito mais! Como aqui é só para o 6º ano...) lista com os advérbios mais comuns de frequência:
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
					<h5>Explicações com exemplos de uso dos advérbios acima.</h5>
					<p>A regra geral para a posição correta de advérbios de frequência em frases é <strong>entre</strong> o sujeito (I, you , he, etc) e o verbo. Porém, certos advérbios podem quebrar essa regra. Se se quer enfatizar o advérbio, pode-se colocá-lo no início no final da frase. Isso é comum para advérbios que sugerem frequência "média", como <strong>usually, often, sometimes</strong>. Vê os exemplos:</p>
					<ul>
						<li>I <strong class="text-primary">sometimes</strong> play the bass. (<strong class="text-primary">Às vezes</strong>, eu toco baixo.)</li>	
						<li>I <strong class="text-primary">always</strong> watch Náutico games. (Eu <strong class="text-primary">sempre</strong> assisto aos jogos do Náutico.)</li>
						<li>I <strong class="text-primary">never</strong> listen to pagode. <strong class="text-primary">Never!</strong> (Eu <strong class="text-primary">nunca</strong> escuto pacote. <strong class="text-primary">Nunca!</strong>)</li>
						<li>I play the drums <strong class="text-primary">rarely</strong>. (eu <strong class="text-primary">raramente</strong> toco bateria.)</li>				
					</ul>
					<p>Se tu estás achando essa lista muito pequena, espertinho, ou já conheces todos esses advérbios, sabichão, e queres mais, donzela, vai aqui nesse <a :href="link"> site</a>.</p>
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
			link: "https://fisk.com.br/blog/os-adverbios-de-frequencia-em-ingles",
			items: [
			{ Adverbs: "ALWAYS", Advérbio: "SEMPRE"},
			{ Adverbs: "USUALLY", Advérbio: "GERALMENTE"},
			{ Adverbs: "OFTEN", Advérbio: "MUITAS VEZES"},
			{ Adverbs: "SOMETIMES", Advérbio: "ÀS VEZES"},
			{ Adverbs: "HARDLY EVER/RARELY", Advérbio: "QUASE NUNCA/RARAMENTE"},
			{ Adverbs: "NEVER", Advérbio: "NUNCA"},
			],

		}
	}
}
</script>

<style scoped>
.rules {
	text-align: left;
}

</style>
