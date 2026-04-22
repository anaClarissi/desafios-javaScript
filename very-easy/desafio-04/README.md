# 🧩 Desafio 04 - Cálculos de Viagens Espaciais I

## 📝 Enunciado

A equipe de navegação precisa de uma função que realize um cálculo específico com números inteiros.

Crie uma função que receba um número, eleve ao quadrado cada um de seus algarismos e, em seguida, concatene os resultados, retornando um único número.

---

## 💡 Solução

A solução transforma o número em uma string para facilitar a manipulação dos dígitos.

Em seguida:

1. Separa cada dígito usando `split`
2. Eleva cada dígito ao quadrado
3. Concatena os resultados em uma string
4. Retorna o valor final

---

## 🧠 Conceitos utilizados

* Manipulação de strings
* Arrays
* Laço de repetição (`forEach`)
* Operações matemáticas (`Math.pow`)

---

## ▶️ Como executar

```bash id="2z6h8g"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="ktsq3t"
Entrada: 3514
Saída: 925116

Entrada: 94571
Saída: 811625491

Entrada: 24
Saída: 416

Entrada: 745821698
Saída: 4916256441368164
```

---

## ⚠️ Observação

A solução utiliza conversão para string para facilitar a separação dos dígitos e a concatenação dos resultados.

---
