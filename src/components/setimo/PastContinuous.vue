<template>
	<b-container>
		<Header7 />
		<b-card class="shadow-lg mb-4">
			<b-card-title>Past Continuous</b-card-title>
			<b-card-sub-title>Passado Contínuo (Gerúndio)</b-card-sub-title>
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>Usa-se o Passado Contínuo (gerúndio) quando:
					<ul>
						<li>
							algo estava acontecendo antes e depois de <strong>uma outra ação</strong>: "Os meninos <strong>estavam jogando</strong> bola quando chegeui em casa."
						</li>
						<li>
							algo estava acontecendo <strong>antes e depois de um tempo específico</strong>: "Eram 20:00 eu eu <strong>estava assistindo</strong> Homem-Aranha."
						</li>
						<li>
							algo continuou <strong>por algum tempo</strong>: "Todos <strong>estavam chorando</strong> ."
						</li>
						<li>
							algo acontecia <strong>repetidamente</strong>: "Todos <strong>estavam protestando</strong> depois dos aumentos."  
						</li>
					</ul>
					<p>
						A característica mais forte é a terminação <strong class="text-primary">ing</strong>. que em português pode ser <strong class="text-primary">ando, endo, indo</strong>. Vê os exemplos:
					<ul>
						<li>walk<strong class="text-primary">ing</strong> (and<strong class="text-primary">ando</strong>)</li>
						<li>do<strong class="text-primary">ing</strong> (faz<strong class="text-primary">endo</strong>)</li>
						<li>build<strong class="text-primary">ing</strong> (constru<strong class="text-primary">indo</strong>)</li>
					</ul>
				</p>
				<p>A forma completa para a construção do Past Contínuo deve seguir as seguintes estruturas:</p>
				<div class="rules">
					<p>
						<ul>
							<li><strong>Afirmativa</strong></li>        

							<table class="mt-4 mb-4">
								<tbody>
									<tr>
										<th>Sujeito</th>
										<th><em>to be (passado)</em></th>
										<th>Verbo Principal</th>
										<th><strong class="text-primary">ing</strong></th>
									</tr>
									<tr>
										<td>I, you, he...</td>
										<td>was/were</td>
										<td>sing</td>
										<td class="text-primary">ing</td>
									</tr>									
								</tbody>
							</table>
							<p>Ex.: I was sing<strong class="text-primary">ing</strong>. You were sing<strong class="text-primary">ing</strong>.	He was sing<strong class="text-primary">ing</strong>.
							</p>
						</ul>
					</p>
					<p>
						<ul>
							<li><strong>Negativa</strong></li>        

							<table class="mt-4 mb-4">
								<tbody>
									<tr>
										<th>Sujeito</th>
										<th><em>to be (passado)</em> + <strong class="text-primary">not</strong></th>
										<th>Verbo Principal</th>
										<th><strong class="text-primary">ing</strong></th>
									</tr>
									<tr>
										<td>I, you, he...</td>
										<td>was/were <strong class="text-primary">not</strong></td>
										<td>learn</td>
										<td class="text-primary">ing</td>
									</tr>									
								</tbody>
							</table>
							<p>Ex.: I was  <strong class="text-primary">not</strong> learn<strong class="text-primary">ing</strong>. You were  <strong class="text-primary">not</strong> learn<strong class="text-primary">ing</strong>.	He was  <strong class="text-primary">not</strong> learn<strong class="text-primary">ing</strong>.
							</p>
							<p>Obs.: Pode-se contrair <em>was/were</em> com o  <strong class="text-primary">not</strong> =  <strong class="text-primary">wasn't</strong>,  <strong class="text-primary">weren't'</strong></p>
						</ul>
					</p>
					<p>
						<ul>
							<li><strong>Interrogativa</strong></li>        

							<table class="mt-4 mb-4">
								<tbody>
									<tr>
										<th><em>to be (passado)</em></th>
										<th>Sujeito</th>
										<th>Verbo Principal</th>
										<th><strong class="text-primary">ing</strong></th>
									</tr>
									<tr>
										<td>was/were</td>
										<td>I, you, he...</td>
										<td>watch</td>
										<td class="text-primary">ing</td>
									</tr>									
								</tbody>
							</table>
							<p>Ex.: Was I watch<strong class="text-primary">ing</strong>? Were you watch<strong class="text-primary">ing</strong>?	Was he watch<strong class="text-primary">ing</strong>?
							</p>
						</ul>
					<h5>Atenção</h5>
					<ol type="i">
						<li>Se o verbo terminar com a vogal <em class="text-primary">"e"</em> e o mesmo não for oxítono (a última sílaba mais forte), deve-se omitir <em class="text-primary">"e"</em>. Ex.: danc<em class="text-primary">e</em> → danc<strong class="text-primary">ing</strong></li>
						<li>Se o verbo terminar com a combinação <em class="text-primary">"ie"</em>, deve-se tracá-la por <em class="text-primary">"y"</em>. Ex.: l<em class="text-primary">ie</em> → l<strong class="text-primary">ying</strong></li>
						<li>Se o verbo terminar com uma sequência <strong> CVC (Consoante + Vogal + Consoante)</strong> e for oxítono (vê lá em cima o que é oxítono, esquecido), <strong>dobra-se</strong> a última consoante. Ex.: s<strong class="text-primary">top</strong> → sto<strong class="text-primary">pp</strong>ing.</li>
					</ol>
				</div>
			</b-card-text>
		</b-card>
	</b-container>
</template>

<script>
import Header7 from "./Header7";
export default {
  name: "PreSentContinuous",
  components: {
    Header7,
  },
};
</script>

<style scoped>
td,
th,
tr {
  border: 1px solid red;
  padding: 0.2rem;
  text-align: center;
}
table {
  margin: 0 auto;
}
.rules {
  text-align: left;
}
</style>