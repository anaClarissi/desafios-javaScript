# 🧩 Desafio 13 - Código de Identificação de Nave

## 📝 Enunciado

O sistema da frota espacial utiliza códigos numéricos com um dígito verificador para validar identificações de naves.

Crie uma função que receba um número e verifique se ele é válido seguindo as regras:

1. Somar os dígitos das posições pares
2. Multiplicar esse resultado por 3
3. Somar os dígitos das posições ímpares
4. Somar os dois resultados
5. Obter o resto da divisão por 10
6. O código será válido quando o resultado final for igual a 0

---

## 💡 Solução

A solução transforma o número em um array de dígitos para facilitar o processamento.

O processo consiste em:

1. Converter o número em array utilizando `Array.from`
2. Separar a soma das posições pares e ímpares
3. Multiplicar a soma das posições pares por 3
4. Somar os resultados
5. Verificar se o resto da divisão por 10 é igual a 0

---

## 🧠 Conceitos utilizados

* Manipulação de strings
* Arrays
* Estruturas de repetição (`for`)
* Operações matemáticas
* Condicionais

---

## ▶️ Como executar

```bash id="d4z7q1"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="u8k2r5"
Entrada: 547020743789
Saída: true

Entrada: 301354030348
Saída: true

Entrada: 301354030349
Saída: false

Entrada: 123456789872
Saída: false
```

---

## ⚠️ Observação

A validação é baseada na posição dos dígitos dentro do código e no cálculo do dígito verificador utilizando operações matemáticas.

---
