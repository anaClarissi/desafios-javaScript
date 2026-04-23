# 🧩 Desafio 09 - Instruções de Emergência

## 📝 Enunciado

Sistemas de navegação precisam validar códigos de transmissão para garantir sua integridade.

Crie uma função que receba uma string e verifique se todas as letras presentes nela aparecem a mesma quantidade de vezes.

A função deve retornar:

* `true` → se todas as letras possuem a mesma quantidade
* `false` → caso contrário

---

## 💡 Solução

A solução realiza a contagem de cada letra e compara suas frequências.

O processo consiste em:

1. Converter a string para minúsculas
2. Remover os espaços
3. Separar os caracteres em um array
4. Utilizar um `Map` para contar a ocorrência de cada letra
5. Extrair os valores das contagens
6. Verificar se todos os valores são iguais usando `every`

---

## 🧠 Conceitos utilizados

* Manipulação de strings
* Estrutura de dados `Map`
* Arrays
* Métodos (`forEach`, `every`)
* Contagem de frequência

---

## ▶️ Como executar

```bash id="c9t2w7"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="y2v8k1"
Entrada: "This is Thee"
Saída: false

Entrada: "ssd"
Saída: false

Entrada: "Lorem ipsum"
Saída: false

Entrada: "QQwweerrttyy"
Saída: true
```

---

## ⚠️ Observação

Os espaços são ignorados na verificação e todas as letras são convertidas para minúsculas para evitar distinção entre maiúsculas e minúsculas.

---
