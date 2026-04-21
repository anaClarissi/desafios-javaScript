# 🧩 Desafio 03 - Linguagem Limitada

## 📝 Enunciado

Um dispositivo portátil utiliza uma linguagem limitada e precisa de um procedimento capaz de inverter listas.

Crie uma função que receba um array e retorne um novo array com todas as posições invertidas, sem alterar o array original.

⚠️ Restrição: não utilizar métodos do objeto `Array` como `reverse`, `map`, `forEach`, etc.

---

## 💡 Solução

A solução percorre o array de trás para frente utilizando um loop `for`.

A cada iteração:

1. O elemento atual é adicionado em um novo array
2. O array original permanece inalterado
3. O novo array é construído já na ordem invertida

---

## 🧠 Conceitos utilizados

* Arrays
* Laço de repetição (`for`)
* Manipulação de índices
* Imutabilidade (não alterar o array original)

---

## ▶️ Como executar

```bash id="x6v3rl"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="93vwob"
Entrada: [0, 9, 6, 8, 9, 1, 5, 7]
Saída: [7, 5, 1, 9, 8, 6, 9, 0]

Entrada: ['OH', 'HI', 'Mark']
Saída: ['Mark', 'HI', 'OH']

Entrada: [false, true, true, true]
Saída: [true, true, true, false]

Entrada: ["it's", 'not', true, 0]
Saída: [0, true, 'not', "it's"]
```

---

## ⚠️ Observação

A solução cria um novo array, garantindo que o array original não seja modificado, conforme exigido no desafio.

---
