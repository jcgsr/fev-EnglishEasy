<template>
	<b-container>
		<Header7 />
		<b-card class="shadow-lg mb-4">
			<b-card-title>Linking Words</b-card-title>
			<b-card-sub-title>Conjuções</b-card-sub-title>
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>
					<em>Linking Words</em> são usadas para mostrar relações entre ideias. Eles podem ser usados para juntar 2 ou mais palavras ou frases. As <em>Linking Words</em> podem ser usada para <strong>adicionar ideias/informações</strong>, <strong>contrastá-las</strong> ou mostrar o <strong>motivo</strong> de algo ou mostrar a <strong>ordem</strong> que as coisas acontecem. Elas jamais mudam sua forma. Confere a tabela abaixo para conhecer, não todas, mas as <em>Linking Words</em> mais usadas.
				</p>
				<h5>TIPOS DE <EM>LINKING WORDS</EM></h5>
				<p>
					<table>
						<tbody>
							<tr>
								<th>ADIÇÃO</th>
								<th>CONTRASTE</th>
								<th>TEMPO</th>
								<th>MOTIVO</th>
							</tr>
							<tr>
								<td>
									<strong class="text-primary">and</strong> - e; <br>
									<strong class="text-primary">also/too</strong> - também; <br>
									<strong class="text-primary">besides</strong> - além de; <br>
									<strong class="text-primary">as well as</strong> - assim como, bem como;
								</td>
								<td>
									<strong class="text-primary">but</strong> - mas; <br>
									<strong class="text-primary">although</strong> - embora, apesar de; <br>
									<strong class="text-primary">however</strong> - contudo, entretanto; <br>
									<strong class="text-primary">despite/in spite of</strong> - apesar de;
								</td>
								<td>
									<strong class="text-primary">while</strong> - enquanto, durante; <br>
									<strong class="text-primary">before</strong> - antes (que); <br>
									<strong class="text-primary">after (that)</strong> - depois (disso); <br>
									<strong class="text-primary">during</strong> - durante;
								</td>
								<td>
									<strong class="text-primary">so</strong> - então, portanto, para; <br>
									<strong class="text-primary">because</strong> - porque; <br>
									<strong class="text-primary">because of</strong> - por cause de, devido a; <br>
									<strong class="text-primary">since/as</strong> - uma vez que, visto que/como;
								</td>
							</tr>							
						</tbody>
					</table>
				</p>    
				
							</b-card-text>
			</b-card>
		</b-container>

	</template>

	<script>
import Header7 from "./Header7";
export default {
  name: "LinkingWords",
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
  padding: 1rem;
  text-align: left;
}
table {
  margin: 0 auto;
}
</style>
