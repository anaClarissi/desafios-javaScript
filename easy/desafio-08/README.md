# 🧩 Desafio 08 - Biblioteca Interplanetária

## 📝 Enunciado

A Biblioteca Interplanetária organiza suas publicações utilizando o sobrenome dos autores.

Crie uma função que receba um nome completo e retorne uma string formatada da seguinte forma:

* O último nome em letras maiúsculas
* Os demais nomes abreviados (apenas a inicial seguida de ponto)
* Separação por vírgula entre sobrenome e iniciais

---

## 💡 Solução

A solução transforma a string em maiúscula e separa os nomes em um array.

O processo consiste em:

1. Converter o nome para letras maiúsculas
2. Separar os nomes usando `split`
3. Identificar e remover o último nome (sobrenome)
4. Adicionar o sobrenome ao resultado
5. Abreviar os demais nomes utilizando apenas a primeira letra
6. Concatenar tudo no formato desejado

---

## 🧠 Conceitos utilizados

* Manipulação de strings
* Arrays
* Métodos (`split`, `pop`, `charAt`)
* Laço de repetição (`forEach`)

---

## ▶️ Como executar

```bash id="c2zv1q"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="8qv4dn"
Entrada: "Isaac Larrubia Ferreira Pontes"
Saída: "PONTES, I. L. F."

Entrada: "John Ronald Ruel Tolkien"
Saída: "TOLKIEN, J. R. R."

Entrada: "christopher james paolini"
Saída: "PAOLINI, C. J."

Entrada: "Suzanne Marie Colins"
Saída: "COLINS, S. M."
```

---

## ⚠️ Observação

O último nome é utilizado como referência principal, enquanto os demais são abreviados, seguindo o padrão de organização da biblioteca.

---
