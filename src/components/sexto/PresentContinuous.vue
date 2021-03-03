<template>
	<b-container>
		<Header6 />
		<b-card class="shadow-lg">
			<b-card-title>Present Continuous</b-card-title>
			<b-card-sub-title>Presente Contínuo (Gerúndio)</b-card-sub-title>
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>Usa-se o Presente Contínuo (gerúndio) quando a ação acontece no momento da fala. A característica mais forte é a terminação <strong class="text-primary">ing</strong>. que em português pode ser <strong class="text-primary">ando, endo, indo</strong>. Vê os exemplos:
					<ul>
						<li>walk<strong class="text-primary">ing</strong> (and<strong class="text-primary">ando</strong>)</li>
						<li>do<strong class="text-primary">ing</strong> (faz<strong class="text-primary">endo</strong>)</li>
						<li>build<strong class="text-primary">ing</strong> (constru<strong class="text-primary">indo</strong>)</li>
					</ul>
				</p>
				<p>A forma completa para a construção do Presente Contínuo deve seguir as seguintes estruturas:</p>
				<div class="rules">
					<p>
						<ul>
							<li><strong>Afirmativa</strong></li>        

							<table class="mt-4 mb-4">
								<tbody>
									<tr>
										<th>Sujeito</th>
										<th>Verbo <em>to be</em></th>
										<th>Verbo Principal</th>
										<th><strong class="text-primary">ing</strong></th>
									</tr>
									<tr>
										<td>I, you, he...</td>
										<td>am/is/are</td>
										<td>sing</td>
										<td class="text-primary">ing</td>
									</tr>									
								</tbody>
							</table>
							<p>Ex.: I am sing<strong class="text-primary">ing</strong>. You are sing<strong class="text-primary">ing</strong>.	He is sing<strong class="text-primary">ing</strong>.
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
										<th>Verbo <em>to be</em> + <strong class="text-primary">not</strong></th>
										<th>Verbo Principal</th>
										<th><strong class="text-primary">ing</strong></th>
									</tr>
									<tr>
										<td>I, you, he...</td>
										<td>am/is/are <strong class="text-primary">not</strong></td>
										<td>learn</td>
										<td class="text-primary">ing</td>
									</tr>									
								</tbody>
							</table>
							<p>Ex.: I am  <strong class="text-primary">not</strong> learn<strong class="text-primary">ing</strong>. You are  <strong class="text-primary">not</strong> learn<strong class="text-primary">ing</strong>.	He is  <strong class="text-primary">not</strong> learn<strong class="text-primary">ing</strong>.
							</p>
							<p>Pode-se contrair <em>are/is</em> com o  <strong class="text-primary">not</strong> =  <strong class="text-primary">aren't</strong>,  <strong class="text-primary">isn't</strong></p>
						</ul>
					</p>
					<p>
						<ul>
							<li><strong>Interrogativa</strong></li>        

							<table class="mt-4 mb-4">
								<tbody>
									<tr>
										<th>Verbo <em>to be</em></th>
										<th>Sujeito</th>
										<th>Verbo Principal</th>
										<th><strong class="text-primary">ing</strong></th>
									</tr>
									<tr>
										<td>am/is/are</td>
										<td>I, you, he...</td>
										<td>watch</td>
										<td class="text-primary">ing</td>
									</tr>									
								</tbody>
							</table>
							<p>Ex.: Am I watch<strong class="text-primary">ing</strong>? Are you watch<strong class="text-primary">ing</strong>?	Is he watch<strong class="text-primary">ing</strong>?
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
import Header6 from './Header6'
export default {
	name: 'PreSentContinuous',
	components: {
		Header6
	},	
}
</script>

<style scoped>
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
.rules {
	text-align: left;
}
</style>