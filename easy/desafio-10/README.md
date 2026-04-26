# 🧩 Desafio 10 - Procedimento Recursivo II

## 📝 Enunciado

A equipe precisa calcular o fatorial de números inteiros positivos utilizando recursão.

Crie uma função que receba um número e retorne o seu fatorial sem utilizar estruturas de repetição (`for`, `while`, etc.).

O fatorial de um número é a multiplicação de todos os inteiros positivos menores ou iguais a ele.

Exemplo:

* 5! = 5 × 4 × 3 × 2 × 1 = 120

---

## 💡 Solução

A solução utiliza **recursão** para calcular o fatorial.

O processo consiste em:

1. Definir o caso base (quando o número for 0 ou 1)
2. Retornar 1 nesses casos
3. Para os demais números, multiplicar o valor atual pelo resultado da chamada recursiva com o número decrementado

---

## 🧠 Conceitos utilizados

* Recursão
* Caso base
* Funções
* Operações matemáticas

---

## ▶️ Como executar

```bash id="f1z9k2"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="q8x3r7"
Entrada: 5
Saída: 120

Entrada: 0
Saída: 1

Entrada: 32
Saída: 263130836933693530167218012160000000

Entrada: 9
Saída: 362880
```

---

## ⚠️ Observação

A solução utiliza recursão para substituir estruturas de repetição, conforme exigido no desafio.

---
