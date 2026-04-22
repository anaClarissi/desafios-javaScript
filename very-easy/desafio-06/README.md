# 🧩 Desafio 06 - História Escondida II

## 📝 Enunciado

O sistema precisa interpretar um novo padrão de mensagens.

Crie uma função que receba uma string e retorne cada palavra com suas letras invertidas e em minúsculo, mantendo a ordem original das palavras.

⚠️ A string contém apenas letras e espaços.

---

## 💡 Solução

A solução divide a frase em palavras e processa cada uma individualmente.

O processo consiste em:

1. Separar a string em palavras usando `split(" ")`
2. Para cada palavra:

   * inverter as letras
   * converter para minúsculo
3. Armazenar o resultado em um novo array
4. Juntar novamente as palavras com `join(" ")`

---

## 🧠 Conceitos utilizados

* Manipulação de strings
* Arrays
* Métodos (`split`, `reverse`, `join`)
* Laço de repetição (`forEach`)

---

## ▶️ Como executar

```bash id="y6tq3r"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="6k2p1n"
Entrada: "Lorem ipsum dolore sec avanti"
Saída: "merol muspi erolod ces itnava"

Entrada: "This is an apple"
Saída: "siht si na elppa"

Entrada: "May the force be with you"
Saída: "yam eht ecrof eb htiw uoy"

Entrada: "It s over nine thousand"
Saída: "ti s revo enin dnasuoht"
```

---

## ⚠️ Observação

Cada palavra é processada individualmente, garantindo que a ordem original da frase seja mantida.

---
