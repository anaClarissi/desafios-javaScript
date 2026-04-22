# 🧩 Desafio 07 - Organizando Resultados

## 📝 Enunciado

O sistema precisa organizar listas de números que estão armazenadas em um array bidimensional.

Crie uma função que receba um array bidimensional de inteiros e retorne um único array contendo todos os números em ordem crescente.

---

## 💡 Solução

A solução utiliza dois passos principais:

1. **Achatar o array** (transformar o array bidimensional em unidimensional) usando `flat()`
2. **Ordenar os valores** em ordem crescente utilizando `sort()` com comparação numérica

---

## 🧠 Conceitos utilizados

* Arrays multidimensionais
* Método `flat`
* Ordenação com `sort`
* Função de comparação `(a, b) => a - b`

---

## ▶️ Como executar

```bash id="7z3y1p"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="s9xk2d"
Entrada: [[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]]
Saída: [1, 1, 3, 5, 5, 6, 11, 19, 42, 47, 57, 93, 103, 128]

Entrada: [[1, 3], [4, 8], [7, 5], [2, 6]]
Saída: [1, 2, 3, 4, 5, 6, 7, 8]

Entrada: [[], [], [], []]
Saída: []

Entrada: [[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]]
Saída: [10, 20, 40, 50, 60, 70, 80, 90, 100, 100, 100]
```

---

## ⚠️ Observação

A função `sort()` utiliza uma função de comparação para garantir que a ordenação seja numérica e não lexicográfica.

---
