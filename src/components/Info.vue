<template>
	<b-container>
		<h1 class="p-3 text-2xl font-bold text-center text-red-500">Info</h1>
		<b-card class="shadow-lg mb-4">
			<b-card-text class="mt-2 md-w-75 text-center mx-auto">
				<p>
					Esse site é totalmente dedicado aos meus alunos idos, aos que estão e aos que serão.  
				</p>
				<p>
					Aqui, encontram-se tópicos gramaticais da língua inglesa referentes aos anos finais do Fundamental Maior.
				</p>
				<p>
					Se quiser dar alguma sugestão, fazer alguma crítica ou elogios, basta entrar em contato pelo <a :href="zap">Whatsapp</a>, pelo <a :href="telegram">Telegram</a> ou <a :href="email">E-mail</a>. 
				</p>
				<p>
					<q>O site em si mesmo é tudo; se te agradar, fino aluno, pago-me da tarefa; se não te agradar, pago-te com um piparote, e até a próxima aula.</q>
				</p>
				<b-card-sub-title>Contatos</b-card-sub-title>
				<a :href="zap">
					<i class="fab fa-whatsapp"></i>
				</a>
				<a :href="telegram">
					<i class="fab fa-telegram-plane"></i>
				</a>
				<a :href="email">
					<i class="far fa-envelope"></i>
				</a>
			</b-card-text>
		</b-card>
	</b-container>
</template>
<script>
	export default {
		name: "Info",
		data() {
			return {
				zap: "https://api.whatsapp.com/send?phone=5579988284730&text=Opa! Gostaria de falar sobre English?! Easy...",
				telegram: "https://telegram.me/jcgsr",
				email: "mailto:cabralguerra@gmail.com"
			}
		}
	};
</script>
<style scoped>
.card {
	margin: 0 auto;
}
a {
	text-decoration: none;
	color: blue;
}
ul {
	text-align: left;
}
li {
	line-height: 1.5;
}
img {
	width: 100px;
	height: 40px;
}
i {
	margin: 1rem;
	color: blue;
	text-decoration: none;
}
i:hover {
	background-color: #fff;
}
</style>
