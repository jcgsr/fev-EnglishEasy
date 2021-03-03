<template>
	<b-container>
		<Header7 />
		<b-card class="shadow-lg">
			<b-card-title>Simple Past</b-card-title>
			<b-card-sub-title>Passado Simples</b-card-sub-title>
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>
					O Passado Simples é um tempo verbal usado para falar sobre coisas que aconteceram ou existiram antes do momento em que se fala, ou seja, do momento atual.
					Ele mostra que você está falando sobre algo que já aconteceu, enfatiza que a ação terminou por completo.
				</p>
				<h5>Verbos Regulares</h5>
				<p>
					Um verbo <strong>regular</strong> é aquele verbo que sempre termina da mesma forma, por isso seu nome: <em>"regular"</em>. No caso do inglês, todos os regulares - e eles são a maioria dos verbos - terminam com <strong class="text-primary">ed</strong> (ou <strong class="text-primary">d</strong> se ele já tiver <strong>e</strong> no final). Presta atenção que <em>todas</em> as pessoas (I, you, he, etc) terminarão em <strong>ed</strong>. Todas! Inglês é muito fácil 🙄. Então, vamos às regrinhas: 
				</p>
				<h6>Afirmativa</h6>
				<ul>
					<li>
						<strong class="text-primary">ed</strong> - to kill (matar) → kill<strong class="text-primary">ed</strong> (matou/matava)
					</li>
					<li>
						<strong class="text-primary">d</strong> - to danc<strong>e</strong> (dançar) → danc<strong>e</strong><strong class="text-primary">d</strong> (dançou/dançava)
					</li>
					<li>
						Se o verbo terminar com uma sequência <strong> CVC (Consoante + Vogal + Consoante)</strong> e for oxítono, <em>dobra-se</em> a última consoante e só depois acrescenta-se <strong>ed</strong>. Ex.: to  s<strong class="text-primary">top</strong> (parar) → sto<strong class="text-primary">pp</strong><strong>ed</strong> (parou/parou); to  pre<strong class="text-primary">fer</strong> (preferir) → prefe<strong class="text-primary">rr</strong><strong>ed</strong> (preferia/preferiu).
					</li>
					<li>
						se o verbo terminar com <strong>y</strong> no final e 
						antes dele tiver uma consoante, deve-se trocar o 
						<strong>y</strong> por <strong>i</strong> e só depois adicionar <strong class="text-primary">
						ed</strong>.
						Ex.: to cr<strong class="text-primary">y</strong> (chorar) → cr<strong class="text-primary">ied</strong> (chorava/chorou).
					</li>
				</ul>
				<h6>Negativa</h6>
				<ul>
					<li>
						O verbo sempre ficará em sua forma básica. Sempre! Nunca 
						mudará! Ou seja, não recebe <strong>ed</strong> por causa da regra logo abaixo ↓.
					</li>
					<li>
						Deve-se usar o auxiliar <strong>did</strong>
						seguidos de <strong>not</strong> antes do verbo.
						<strong>Did not = Didn't</strong> com todas as pessoas: <strong>I, you, he, she, it, we, they</strong>.
					</li>
				</ul>
				<h6>Interrogativa</h6>
				<ul>
					<li>
						O verbo sempre ficará em sua forma básica. Sempre! Nunca 
						mudará! Igualzinho como na negativa... Inglês é muito fácil 🙄.
					</li>
					<li>Deve-se usar o auxiliar <strong>did</strong>
						no <strong>INÍCIO</strong> da frase com todas as pessoas	igual como na negativa 🙄. 
					</li>
				</ul>
				<p>Vê a tabela abaixo com um exemplo de cada forma com um verbo bem importante: <em>to piss</em>.</p>
				<table class="mt-4 mb-4">
					<tbody>
						<tr>
							<th>Afirmativa</th>
							<th>Negativa</th>
							<th>Interrogativa</th>							
						</tr>
						<tr>
							<td>I/you/he piss<strong class="text-primary">ed</strong>.</td>
							<td>I/you/he <strong class="text-primary">did not/didn't</strong> piss.</td>
							<td><strong class="text-primary">Did</strong> I/you/he piss?</td>
						</tr>									
					</tbody>
				</table>
				<span>Quer saber o que significa esse verbo bem importante, insólito? Procura 🧐. Aproveita e procura <em>insólito</em> também. 😉</span>
				<h5 class="mt-4">Verbos Irregulares</h5>
				<p>
					Bem... (listening now to <em>All Apologies</em>... What a song! Using Sublime Text - 20210303T0831), os verbos <strong>irregulares</strong> - que são a minoria - não seguem uma forma quando conjugados no Past Simple na forma afirmativa. Eles podem ser escritos de modo diferente, como se fossem outra palavras, ou até ficar do mesmo jeito. O principal: não apresentam a terminação <strong>ed</strong>. Então a moleza que foi com os regulares acaba aqui. Porém, na negativa e na interrogativa, os irregulares seguem a mesma regrinha dos regulares.
				</p>
				<p>Vê a tabela abaixo com um exemplo de cada forma com o verbo irregular <em>to lose</em>. Presta atenção que ele só muda na afirmativa.</p>
				<table class="mt-4 mb-4">
					<tbody>
						<tr>
							<th>Afirmativa</th>
							<th>Negativa</th>
							<th>Interrogativa</th>							
						</tr>
						<tr>
							<td>I/you/he <strong class="text-primary">lost</strong>.</td>
							<td>I/you/he <strong class="text-primary">did not/didn't</strong> lose.</td>
							<td><strong class="text-primary">Did</strong> I/you/he lose?</td>
						</tr>									
					</tbody>
				</table>
				<p>
					Para uma lista dos regulares mais usados, acessa <a :href="link1" title="Verbos Regulares Mais Usados">aqui</a>. Para uma outra lista, dos irregulares, acessa <a :href="link2" title="Verbos Irregulares Mais Usados">aqui</a>.
				</p>
			</b-card-text>
		</b-card>
	</b-container>
</template>

<script>
import Header7 from "./Header7"
export default {

	name: 'PastSimple',
	components: { Header7 },
	data () {
		return {
			link1: "https://www.yazigi.com.br/noticias/ingles/verbos-regulares-em-ingles-voce-sabe-quais-sao-os-mais-usados",
			link2: "https://www.yazigi.com.br/noticias/ingles/60-verbos-irregulares-em-ingles-que-voce-precisa-saber"
		}
	}
}
</script>

<style lang="css" scoped>
td,
th,
tr {
	border: 1px solid red;
	padding: .2rem;
	text-align: center;
}
table {
	margin: 0 auto;
}
a:hover {
	background-color: blue;
	padding: .2rem;
}
</style>