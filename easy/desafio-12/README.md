# 🧩 Desafio 12 - Espaçoporto Comercial

## 📝 Enunciado

O sistema financeiro do espaçoporto precisa calcular automaticamente a quantidade de moedas necessárias para atingir um determinado valor.

As moedas disponíveis possuem os seguintes valores:

* 1
* 5
* 10
* 25
* 100
* 500

A solução deve sempre priorizar as moedas de maior valor.

Crie uma função que receba um valor inteiro e retorne a quantidade de cada moeda necessária para alcançar esse valor.

---

## 💡 Solução

A solução utiliza uma abordagem gulosa (*greedy algorithm*), priorizando sempre as moedas de maior valor.

O processo consiste em:

1. Definir os valores das moedas disponíveis
2. Percorrer as moedas da maior para a menor
3. Enquanto o valor restante for maior ou igual ao valor da moeda:

   * subtrair o valor da moeda
   * incrementar a quantidade utilizada
4. Armazenar o total de moedas utilizadas no objeto de resultado

---

## 🧠 Conceitos utilizados

* Estruturas de repetição (`while`)
* Arrays
* Objetos
* Algoritmo guloso (*greedy*)
* Operações matemáticas

---

## ▶️ Como executar

```bash id="p2x8k1"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="m4q7t9"
Entrada: 478
Saída:
{
  "500": 0,
  "100": 4,
  "25": 3,
  "10": 0,
  "5": 0,
  "1": 3
}

Entrada: 384
Saída:
{
  "500": 0,
  "100": 3,
  "25": 3,
  "10": 0,
  "5": 1,
  "1": 4
}

Entrada: 5412
Saída:
{
  "500": 10,
  "100": 4,
  "25": 0,
  "10": 1,
  "5": 0,
  "1": 2
}

Entrada: 50
Saída:
{
  "500": 0,
  "100": 0,
  "25": 2,
  "10": 0,
  "5": 0,
  "1": 0
}
```

---

## ⚠️ Observação

A solução sempre utiliza primeiro as moedas de maior valor possível, reduzindo a quantidade total de moedas utilizadas.

---
