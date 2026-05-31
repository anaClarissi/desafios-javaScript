# 🧩 Desafio 15 - Código Romano I

## 📝 Enunciado

Crie uma função que receba uma string contendo um número romano e retorne seu equivalente decimal.

Os algarismos romanos básicos são:

| Romano | Decimal |
| ------ | ------: |
| I      |       1 |
| V      |       5 |
| X      |      10 |
| L      |      50 |
| C      |     100 |
| D      |     500 |
| M      |    1000 |

Além da notação padrão, o sistema deve reconhecer a notação subtrativa:

* IV = 4
* IX = 9
* XL = 40
* XC = 90
* CD = 400
* CM = 900

---

## 💡 Solução

A solução percorre a string da esquerda para a direita comparando cada símbolo com o próximo.

O algoritmo funciona da seguinte forma:

1. Converter o número romano para maiúsculas
2. Associar cada símbolo ao seu valor decimal
3. Percorrer todos os caracteres
4. Se o símbolo atual for menor que o próximo:

   * subtrair seu valor do total
5. Caso contrário:

   * somar seu valor ao total
6. Retornar o resultado final

---

## 🧠 Conceitos utilizados

* Objetos
* Strings
* Estruturas de repetição (`for`)
* Condicionais
* Algoritmos de conversão
* Notação subtrativa

---

## ▶️ Como executar

```bash
node index.js
```

---

## 📌 Exemplo de saída

```bash
Entrada: "XLVII"
Saída: 47

Entrada: "CDXXXVIII"
Saída: 438

Entrada: "CMIX"
Saída: 909

Entrada: "MMMCMXCIX"
Saída: 3999
```

---

## ⚠️ Observação

A solução suporta tanto a notação romana tradicional quanto a notação subtrativa, realizando a conversão em apenas uma passagem pela string.

---
