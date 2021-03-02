<template>
	<b-container>
		<Header6 />
		<b-card>
			<b-card-title>Dates</b-card-title>
			<b-card-sub-title>Datas</b-card-sub-title>
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>
					Escreve-se a data em inglês de maneiras diferentes. A forma mais comum em <strong>inglês britânico</strong> é escrever o dia do mês primeiro, depois o mês (sempre começando com uma letra maiúscula) e depois o ano. Veja alguns exemplos:
					<ul>
						<li>28 Jan</li>
						<li>28 January</li>
						<li>28 January 1981</li>
						<li>28th January 1981</li>
						<li>the 28th of January 1981</li>
						<li>the 28th of January, 1981</li>
						<li>Wednesday, 28 January 1981</li>
						<li>Wednesday the 28th of January, 1981</li>
						<li>28/01/1981, 28.01.1981, 28-01-1981</li>
						<li>8/1/81, 8.1.19, 8-1-81</li>
						<li>8Jan1981, 8-Jan-81</li>
					</ul>
					<span>Se decidir usar <strong>the</strong>, é obrigatório usar também <strong>of</strong>.</span>
				</p>
				<p>
					No <strong>inglês americano</strong> escrito, o mês da data vem antes do dia e do ano. Vê os exemplos:
					<ul>
						<li>Jan 28</li>
						<li>January 28</li>
						<li>January 28, 1981</li>
						<li>Wednesday, January 28, 1981</li>
						<li>January the 28th, January 28th - são menos comuns</li>
						<li>01/28/81, 01.28.81, 01-28-81</li>
						<li>01/28/1981, 01.28.1981, 01-28-1981</li>
						<li>Jan. 28, 1981</li>
					</ul>
				</p>
				<p>
					No <strong>Padrão Internacional</strong> a sequência deve ser ano, mês e dia: AAAA-MM-DD.
					<ul>
						<li>1981-01-28</li>
						<li>1981 January 28 - sem vírgula</li>
					</ul>
				</p>
			</b-card-text>
		</b-card>


	</b-container>	
</template>

<script>
import Header6 from './Header6.vue'
export default {

	name: 'Dates',
	components: { Header6 },
	data () {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
</style>