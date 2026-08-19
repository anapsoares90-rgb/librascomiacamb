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
- **Banco de dados de sinais** — guardado no próprio dispositivo (`localStorage`) e, opcionalmente, sincronizado na nuvem com o Firebase.
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

## Nuvem (opcional)

Sem configuração, todos os sinais ficam guardados apenas no navegador de quem usa a app. Para partilhar o mesmo banco de dados entre vários dispositivos, crie um projeto no [Firebase](https://console.firebase.google.com/) com o **Firestore** e o **login anónimo** ativados, e acrescente ao `index.html`, antes dos restantes scripts:

```html
<script>
  window.FIREBASE_CONFIG = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  };
</script>
```

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
