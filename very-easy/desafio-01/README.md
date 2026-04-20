# 🧩 Desafio 01 - Ajudando a Academia

## 📝 Enunciado

A Academia de Oficiais da Federação precisa de um programa que automatize o cálculo das médias dos alunos.

Você deve criar uma função que receba uma quantidade indefinida de números inteiros como argumento e retorne a média aritmética entre eles.

A função deve funcionar com qualquer quantidade de valores.

---

## 💡 Solução

A solução utiliza o **rest parameter (`...`)** para receber uma quantidade variável de números.

Em seguida:

1. Verificamos se nenhum número foi informado
2. Somamos todos os valores usando um loop
3. Dividimos a soma pela quantidade de números

---

## 🧠 Conceitos utilizados

* Rest Parameters (`...`)
* Funções
* Laços de repetição (`forEach`)
* Operações matemáticas

---

## ▶️ Como executar

```bash
node index.js
```

---

## 📌 Exemplo de saída

```bash
Entrada: (10, 9, 6, 8, 9, 1, 5, 7)
Saída: 6.875

Entrada: (2, 5, 7, 1, -2)
Saída: 2.6

Entrada: (10, 10, 10, 10, 9)
Saída: 9.8

Entrada: (25, 75)
Saída: 50
```
