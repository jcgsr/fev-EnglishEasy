<template>
	<b-container>
		<Header7 />
		<b-card class="shadow-lg mb-4">
			<b-card-title>Prepositions of Time</b-card-title>
			<b-card-sub-title>Preposições de Tempo</b-card-sub-title>
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>
					As preposições de tempo (são várias: <strong>during, before, after, since, etc</strong>) servem para informar sobre o <em>tempo</em> em que algo acontece. Nessa página, o foco será <strong>at, in, on</strong>. Os três podem ter a tradução de <strong>em, no(s), na(s), às, aos</strong>. Nesse caso específico, não te preocupes com a tradução em si, mas com o <strong>uso</strong> de cada um. Como forma geral, <strong>"at"</strong> serve para informar <strong>hora precisa</strong>; <strong>"in"</strong> para períodos mais <strong>longos</strong> (meses, anos, séculos. etc) e <strong>"on"</strong> para <strong>dias e datas</strong>. Vê a tabela abaixo e alguns exemplos.
				</p>
				<h5>USOS</h5>
				<p>
					<table>
						<tbody>
							<tr>
								<th>AT</th>
								<th>IN</th>
								<th>ON</th>
							</tr>
							<tr>
								<td>horas, épocas festivas</td>
								<td>meses, estações do ano, anos, séculos, partes do dia, períodos de tempo mais longo</td>
								<td>dias da semana, dias + partes do dia, datas, dias especiais</td>
							</tr>							
						</tbody>
					</table>
				</p>    
				
				<div class="rules mt-2">
					<h5>Exemplos com cada uma das preposições acima.</h5>
					<ul>
						<li><strong>AT</strong>
							<ol type="i">
								<li>
									Spider-Man arrived <strong>at</strong> <strong class="text-primary">08:38 p.m.</strong> (O Homem-Aranha chegou <strong>às</strong> <strong class="text-primary">20:38.</strong>)
								</li>
								<li>
									Spider-Man always gets in trouble  <strong>at</strong> <strong class="text-primary">Christmas</strong>. (O Homem-Aranha sempre se mete em problemas <strong>no</strong> <strong class="text-primary">natal</strong>.)
								</li>
								<li>
									Atenção: <strong class="text-primary">at</strong> night (<strong class="text-primary">à</strong> noite); <strong class="text-primary">at</strong> the weekend (<strong class="text-primary">no</strong> fim de semana)
								</li>
							</ol>  
						</li>
						<li>
							<strong>IN</strong>
							<ol type="i">
								<li>
									Spider-Man was born <strong>in</strong> <strong class="text-primary">August</strong>. (O Homem-Aranha nasceu <strong>em</strong> <strong class="text-primary">agosto</strong>.)
								</li>
								<li>
									<strong>In</strong> the <strong class="text-primary">summer</strong> of 1962, Spider-Man was born. (<strong>No</strong> <strong class="text-primary">verão</strong> de 1962, o Homem-Aranha nasceu.)</li>
									<li>
										Spider-Man was born <strong>in</strong> <strong class="text-primary">1962</strong>. (O Homem-Aranha nasceu <strong>em</strong> <strong class="text-primary">1962</strong>.)
									</li>
									<li>
										Every Spider Man <strong>in</strong> the <strong class="text-primary">21st century</strong> ranked. (Cada Homem-Aranha <strong>no</strong> <strong class="text-primary">século 21</strong> foi classificado.)
									</li>
									<li>
										<strong class="text-primary">in</strong> the morning (<strong class="text-primary">de/pela</strong> manhã); <strong class="text-primary">in</strong> the evening (<strong class="text-primary">à/pela</strong> noite); <strong class="text-primary">in</strong> the afternoon (<strong class="text-primary">à/pela</strong> tarde); <strong class="text-primary">in</strong> the past (<strong class="text-primary">no</strong> passado);
									</li>
								</ol> 
							</li>
							<li>
								<strong>ON</strong>
								<ol type="i">
									<li>
										<strong>On</strong> <strong class="text-primary">August 10th</strong>, Spider-Man appeared for the first time. (<strong>Em</strong> <strong class="text-primary"> 10 de agosto</strong>, o Homem-Aranha aranha apareceu pela primeira vez.)
									</li>
									<li>
										<strong>On</strong> <strong class="text-primary">Fridays</strong> I always play the Spider-Man game on my imaginary PS5. (<strong>Às</strong> <strong class="text-primary">sextas-feiras</strong>, sempre jogo o jogo do Homem-Aranha no meu PS5 imaginário)  
									</li>
									<li>
										Dias especiais: <strong class="text-primary">on</strong> Spider-Man's birthday (<strong class="text-primary">no</strong> aniversário do Homem-Aranha); <strong class="text-primary">on</strong> New Year's Eve (<strong class="text-primary">na</strong> véspera de ano novo) 
									</li>
									<li>
										Dias + partes do dia: <strong>on</strong> Tuesday afternoon (<strong>na/pela</strong> terça <strong>à</strong> tarde)
									</li>
								</ol>
							</li>

						</ul>
					</div>
				</b-card-text>
			</b-card>
		</b-container>

	</template>

	<script>
	import Header7 from './Header7'
	export default {
		name: 'PrepositionTime',
		components: {
			Header7
		},	
	}
	</script>

	<style scoped>
	.rules {
		text-align: left;
	}
	td,
	th,
	tr {
		border: 1px solid red;
		padding: 1rem;
	}
	table {
		margin: 0 auto;
	}

	</style>
