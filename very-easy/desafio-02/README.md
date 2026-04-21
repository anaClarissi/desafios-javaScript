# 🧩 Desafio 02 - Procedimento Recursivo I

## 📝 Enunciado

A equipe de manutenção da nave Highwind precisa simular a criação de blocos de informação em formato de texto de forma recursiva.

Crie uma função que receba um número e retorne uma quantidade equivalente de `"chunk"` separados por hífen (`-`), sem utilizar estruturas de repetição (`for`, `while`, etc.).

---

## 💡 Solução

A solução utiliza **recursão** para construir a string.

A ideia é:

1. Definir um caso base (quando o número for igual a 1)
2. A cada chamada, concatenar `"chunk"` com o resultado da chamada anterior
3. Utilizar `"-"` para separar os valores

---

## 🧠 Conceitos utilizados

* Recursão
* Strings
* Caso base
* Concatenação de strings

---

## ▶️ Como executar

```bash
node index.js
```

---

## 📌 Exemplo de saída

```bash
Entrada: (4)
Saída: "chunk-chunk-chunk-chunk"

Entrada: (1)
Saída: "chunk"

Entrada: (8)
Saída: "chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk"

Entrada: (2)
Saída: "chunk-chunk"
```

---

## ⚠️ Observação

A solução não utiliza loops, conforme exigido no desafio, sendo totalmente baseada em chamadas recursivas.

---
