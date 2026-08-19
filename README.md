# Libras Gestos & Voz 🤟

Protótipo escolar de **acessibilidade** que traduz sinais de **Libras** captados pela câmara em **texto e voz**, diretamente no navegador — sem instalar nada e sem enviar vídeo para nenhum servidor.

🔗 **Aplicação online:** https://anapsoares90-rgb.github.io/librascomiacamb/
*(disponível após ativar o GitHub Pages — ver secção "Publicar" abaixo)*

---

## O que faz

- **Rastreio da mão em tempo real** — usa o modelo *Handpose* (TensorFlow.js) para detetar os 21 pontos da mão através da webcam.
- **Reconhecimento de movimento** — sinais em Libras não são só a forma da mão: o app grava a **posição inicial, a trajetória e a posição final**, e compara-as com os sinais guardados.
- **Cadastro de sinais próprios** — escreva (ou dite) a palavra, carregue em **Gravar Movimento** ou na tecla `Espaço`, faça o sinal durante 2,5 segundos e ele fica guardado.
- **Leitura em voz alta** — o sinal reconhecido é falado em português com síntese de voz do navegador (com escolha de voz e modo automático).
- **Banco de dados de sinais** — guardado no próprio dispositivo (`localStorage`) e, opcionalmente, partilhado entre vários dispositivos através do Firebase (ver secção abaixo).
- **Modo de simulação** — se não houver câmara disponível, é possível simular a mão com botões e testar o cadastro e a tradução.

## Como usar

1. Abra a aplicação num navegador moderno (Chrome, Edge ou Safari) e **permita o acesso à câmara**.
2. Escreva o nome da palavra no campo *"Nome da Palavra / Expressão"* (ou use o microfone para ditar).
3. Carregue em **Iniciar Gravador de Movimento** ou pressione `Espaço`.
4. Após a contagem decrescente, **faça o sinal completo** em frente à câmara durante 2,5 segundos.
5. Repita o sinal a qualquer momento: o nome aparece no ecrã e é lido em voz alta.

> A câmara só funciona em `https://` ou em `localhost` — é uma exigência de segurança dos navegadores.

## Executar localmente

```bash
git clone https://github.com/anapsoares90-rgb/librascomiacamb.git
cd librascomiacamb
python3 -m http.server 8000
```

Depois abra <http://localhost:8000> no navegador.

## Publicar no GitHub Pages

O repositório já é público e inclui o workflow `.github/workflows/pages.yml`, que publica o site automaticamente a cada envio para o ramo `main`.

Se preferir ativar manualmente: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.

## Banco de dados na nuvem (Firebase)

Sem configuração, o app funciona na mesma: cada pessoa guarda os seus sinais no próprio navegador. Configurar o Firebase serve para **a turma partilhar o mesmo banco de sinais** — grava-se um sinal num computador e ele aparece em todos os outros, em tempo real.

O ficheiro `firebase-config.js` já está ligado ao app e à espera das credenciais. Basta preencher:

### 1. Criar o projeto

1. Entre em <https://console.firebase.google.com/> com uma conta Google e clique em **Criar um projeto**.
2. Dê-lhe um nome (ex.: `libras-escola`). Pode desativar o Google Analytics — não é preciso.

### 2. Ativar a base de dados

3. No menu lateral: **Criar → Firestore Database → Criar base de dados**.
4. Escolha o **modo de produção** e uma localização na Europa (ex.: `eur3`).

### 3. Ativar o login anónimo

5. No menu lateral: **Criar → Authentication → Começar → Sign-in method**.
6. Ative o fornecedor **Anónimo** e guarde. *(É isto que permite gravar sinais sem ninguém ter de criar conta.)*

### 4. Copiar as credenciais para o app

7. Clique na roda dentada → **Definições do projeto** → secção **As suas apps** → ícone **`</>`** (Web).
8. Registe a app (qualquer nome) e copie o objeto `firebaseConfig` que aparece.
9. Cole esses valores em `firebase-config.js`, substituindo os `COLE_AQUI_...`, e envie a alteração para o GitHub. O site publica-se sozinho em cerca de um minuto.

### 5. Proteger os dados (não salte este passo)

10. Em **Firestore Database → separador Regras**, cole o conteúdo do ficheiro [`firestore.rules`](firestore.rules) deste repositório e clique em **Publicar**.

Pronto: o distintivo no topo da app passa de *"Armazenamento Local"* para **"Banco de Dados Ativo"**.

### O que é preciso saber sobre segurança

- As chaves em `firebase-config.js` **não são uma senha** — em qualquer app web elas são sempre visíveis a quem abre a página. Quem protege os dados são as **regras do Firestore**, e é por isso que o passo 10 importa.
- Com estas regras, o banco de sinais é **partilhado e aberto a quem tiver o link**: qualquer pessoa que abra a app pode acrescentar ou apagar sinais. É adequado a um projeto escolar; não coloque lá dados pessoais.
- O plano gratuito (Spark) chega bem para uma turma e não pede cartão de crédito.
- Turmas diferentes podem usar o mesmo projeto sem misturar sinais: mude `window.LIBRAS_APP_ID` em `firebase-config.js`.

## Tecnologias

| Função | Tecnologia |
| --- | --- |
| Deteção da mão | TensorFlow.js + modelo Handpose |
| Interface | HTML, Tailwind CSS, ícones Lucide |
| Voz | Web Speech API (síntese e ditado) |
| Armazenamento | `localStorage` + Firebase Firestore (opcional) |

Todo o processamento de imagem acontece **no dispositivo**: o vídeo da câmara nunca sai do navegador.

## Limitações

Este é um **protótipo educativo**, não uma ferramenta de tradução profissional. Reconhece apenas os sinais que forem gravados por quem o utiliza, usa uma só mão e compara movimentos de forma simplificada — a precisão depende muito da luz, da distância e de repetir o sinal de forma parecida com a gravação.

---

Projeto escolar de acessibilidade • Tradução de Libras com Inteligência Artificial no navegador.
