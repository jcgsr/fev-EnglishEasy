<template>
	<b-container>
		<Header6 />
		<b-card class="shadow-lg">
			<b-card-title>Imperative</b-card-title>
			<b-card-sub-title>Imperativo</b-card-sub-title>
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>
					O Imperativo é usado pelo falante para dar uma <strong>sugestão</strong>, uma <strong>ordem</strong>, um <strong>conselho</strong> ou uma <strong>instrução</strong> para que uma determinada ação aconteça. No inglês, utiliza-se o verbo sem a partícula <strong>“to”.</strong> para formar uma sentença no imperativo (<em>to</em> listen - ouvir → <strong>listen</strong> - escuta/escute/escutai/escutem). Também não é necessário informar o sujeito, pois entende-se que este receberá a ordem, sugestão ou conselho implicitamente. Vê os exemplos: 
					<ul>
						<li><strong>Listen</strong> to Rock'n'Roll! (<strong>Escuta/Escute/Escutai/Escutem</strong> Rock'n'Roll!)</li>
						<li><strong>Watch</strong> Black Mirror! (<strong>Assiste/Assista/Assisti/Assistam</strong> Black Mirror!)</li>
					</ul>
				</p>
				<h5>Negativa</h5>
				<p>
					Basta acrescentar o auxiliar <strong>“do”</strong> mais o <strong>“not”</strong> no começo da frase. Há a forma contraída <strong>don’t</strong>. Ambas, obviamente, significam <strong>não</strong> e tampouco usam <strong>"to"</strong>. Exemplos: 
					<ul>
						<li><strong>Do not/Don’t</strong> listen to brega music, please! (<strong>Não</strong> escutes/escute/escuteis/escutem brega, por favor!)</li>
						<li><strong>Do not/Don’t</strong> watch The Vampire Diaries, please! (<strong>Não</strong> assistas/assista/assistais/assistam/ Diários de um Vampiro, por favor!)</li>						
					</ul>
				</p>
				<span>Gostastes, bonecas?! Quereis saber mais sobre imperativo, em particular, e sobre conjugação, em geral, em português, curiosas?! Ide a esse <a :href="link1">site</a> para conhecer mais sobre o Imperativo em Português, <a :href="link2">nesse</a> para conjugar qualquer verbo em nossa língua, <a :href="link3">nesse outro</a> aqui para ver mais sobre o imperativo em inglês, e <a :href="link4"> aqui</a> para conjugar qualquer verbo em inglês.</span>
			</b-card-text>
		</b-card>
	</b-container>

</template>

<script>
import Header6 from './Header6'
export default {
	name: 'Imperative',
	components: {
		Header6
	},
	data () {
		return {
			link1: "https://www.conjugacao.com.br/verbos-no-imperativo/",
			link2: "https://www.conjugacao.com.br/",
			link3:"https://www.wizard.com.br/idiomas/aprenda-a-usar-o-imperativo-em-ingles/",
			link4: "https://conjugator.reverso.net/conjugation-english.html",
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
a:hover {
	background-color: blue;
	padding: .2rem;
}
</style>
