/*
 * Ligação (opcional) do app a um banco de dados na nuvem — Firebase Firestore.
 *
 * O projeto já está configurado (projeto Firebase: librascomiacamb). Os passos
 * abaixo ficam registados para quem quiser ligar o app a outro projeto — basta
 * substituir os valores no fim deste ficheiro.
 *
 *   1. Vá a https://console.firebase.google.com/ e crie um projeto
 *      (pode desativar o Google Analytics — não é preciso).
 *   2. Em "Criar" → "Firestore Database" → "Criar base de dados",
 *      escolha o modo de produção e uma localização na Europa (ex.: eur3).
 *   3. Em "Criar" → "Authentication" → "Sign-in method",
 *      ative o fornecedor "Anónimo".
 *   4. Em "Definições do projeto" (roda dentada) → "As suas apps" →
 *      ícone "</>" (Web), registe uma app e copie o objeto firebaseConfig.
 *   5. Cole os valores em baixo, substituindo os "COLE_AQUI_...".
 *   6. Em "Firestore Database" → separador "Regras", cole o conteúdo do
 *      ficheiro firestore.rules deste repositório e publique.
 *
 * Estes valores NÃO são uma senha: numa app web eles são sempre visíveis a
 * quem abre a página. Quem protege os dados são as regras do Firestore
 * (ficheiro firestore.rules), por isso não salte o passo 6.
 */
window.FIREBASE_CONFIG = {
    apiKey: "AIzaSyD0SpFjPQzD13960YVLLw6eJzEsOOewWXQ",
    authDomain: "librascomiacamb.firebaseapp.com",
    projectId: "librascomiacamb",
    storageBucket: "librascomiacamb.firebasestorage.app",
    messagingSenderId: "662641673906",
    appId: "1:662641673906:web:5edc2b4e5bb2cf580eabab",
    measurementId: "G-MQ51JFNKHS"
};

// Identifica o "espaço" de sinais dentro do banco de dados.
// Turmas diferentes podem usar nomes diferentes para não misturar os sinais.
window.LIBRAS_APP_ID = "libras-gestos-app";
