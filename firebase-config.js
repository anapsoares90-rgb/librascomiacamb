/*
 * Ligação (opcional) do app a um banco de dados na nuvem — Firebase Firestore.
 *
 * Enquanto este ficheiro tiver os valores de exemplo abaixo, o app funciona
 * normalmente, mas guarda os sinais apenas no navegador de cada pessoa.
 *
 * Para partilhar o mesmo banco de sinais entre vários dispositivos:
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
    apiKey: "COLE_AQUI_A_API_KEY",
    authDomain: "COLE_AQUI_O_AUTH_DOMAIN",
    projectId: "COLE_AQUI_O_PROJECT_ID",
    storageBucket: "COLE_AQUI_O_STORAGE_BUCKET",
    messagingSenderId: "COLE_AQUI_O_MESSAGING_SENDER_ID",
    appId: "COLE_AQUI_O_APP_ID"
};

// Identifica o "espaço" de sinais dentro do banco de dados.
// Turmas diferentes podem usar nomes diferentes para não misturar os sinais.
window.LIBRAS_APP_ID = "libras-gestos-app";
