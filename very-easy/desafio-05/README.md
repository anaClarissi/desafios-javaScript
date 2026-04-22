# 🧩 Desafio 05 - História Escondida I

## 📝 Enunciado

Durante a análise de textos antigos, é necessário identificar a maior letra de uma string com base na ordem alfabética.

Crie uma função que receba uma string e retorne a maior letra (em ordem alfabética) presente nela.

⚠️ Considere que a string possui apenas letras e espaços, sem números ou caracteres especiais.

---

## 💡 Solução

A solução transforma a string em um array de caracteres para facilitar a manipulação.

O processo consiste em:

1. Remover os espaços da string
2. Separar os caracteres usando `split`
3. Ordenar os caracteres em ordem alfabética
4. Inverter a ordem para obter o maior valor primeiro
5. Retornar o primeiro elemento do array

---

## 🧠 Conceitos utilizados

* Manipulação de strings
* Arrays
* Métodos (`split`, `sort`, `reverse`)
* Ordenação

---

## ▶️ Como executar

```bash id="d9r6n4"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="k1d6b9"
Entrada: "Lorem ipsum dolore sec avanti"
Saída: "v"

Entrada: "Hello"
Saída: "o"

Entrada: "May the force be with you"
Saída: "y"

Entrada: "Its over nine thousand"
Saída: "v"
```

---

## ⚠️ Observação

Os espaços são removidos antes da ordenação para garantir que apenas letras sejam consideradas no resultado.

---
