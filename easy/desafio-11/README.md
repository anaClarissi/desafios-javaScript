# 🧩 Desafio 11 - Intervalo de Coordenadas

## 📝 Enunciado

O sistema precisa gerar todas as coordenadas possíveis a partir da origem `(0, 0)` até um determinado ponto `(x, y)`.

Crie uma função que receba um par ordenado `[x, y]` e retorne um array contendo todos os pares `(x, y)` possíveis onde:

* `0 ≤ x ≤ valor informado`
* `0 ≤ y ≤ valor informado`

⚠️ Apenas coordenadas positivas devem ser consideradas.

Os pares devem ser organizados em ordem crescente.

---

## 💡 Solução

A solução utiliza dois laços de repetição aninhados para gerar todas as combinações possíveis de coordenadas.

O processo consiste em:

1. Percorrer os valores de `x` de 0 até o valor informado
2. Para cada valor de `x`, percorrer os valores de `y`
3. Criar pares `[x, y]` e adicioná-los ao array de resultado
4. Retornar o array com todas as combinações

---

## 🧠 Conceitos utilizados

* Arrays
* Laços de repetição (`for`)
* Estruturas aninhadas
* Manipulação de dados

---

## ▶️ Como executar

```bash id="2z7k9p"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="7q4m1x"
Entrada: [2, 2]
Saída: [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]]

Entrada: [2, 7]
Saída: [[0,0], [0,1], ..., [2,7]]

Entrada: [7, 6]
Saída: [[0,0], [0,1], ..., [7,6]]
```

---

## ⚠️ Observação

A solução gera todas as combinações possíveis de coordenadas dentro do intervalo definido, partindo da origem.

---
