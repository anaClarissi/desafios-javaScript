# 🧩 Desafio 14 - Licença de Voo

## 📝 Enunciado

Crie uma classe responsável por gerar licenças de voo para pilotos.

A classe deve possuir os seguintes atributos:

* Nome
* Sobrenome
* Data de nascimento
* Licença de voo (iniciando como `false`)

Além disso, deve existir um método responsável por gerar a licença seguindo o padrão:

* Primeiros 5 caracteres do sobrenome em maiúsculo
* Completar com `9` caso o sobrenome tenha menos de 5 letras
* `-`
* Penúltimo dígito do ano de nascimento
* Mês de nascimento
* Último dígito do ano
* `.`
* Primeira letra do nome em minúsculo

---

## 💡 Solução

A solução utiliza uma classe `Pilot` para representar cada piloto e encapsular a lógica de criação da licença.

O processo consiste em:

1. Armazenar os dados do piloto no construtor
2. Converter a data de nascimento em objeto `Date`
3. Gerar partes específicas da licença:

   * mês formatado
   * dígitos do ano
   * sobrenome formatado
4. Criar a licença apenas se ela ainda não existir

---

## 🧠 Conceitos utilizados

* Classes
* Construtor (`constructor`)
* Métodos
* Manipulação de datas (`Date`)
* Strings
* Arrays
* Condicionais

---

## ▶️ Como executar

```bash id="r8k2m4"
node index.js
```

---

## 📌 Exemplo de saída

```bash id="x2q7n9"
Pilot {
  firstName: 'John',
  lastName: 'Doe',
  birthday: 1977-05-25T03:00:00.000Z,
  flightLicense: 'DOE99-705.j'
}

Pilot {
  firstName: 'Hal',
  lastName: 'Jordan',
  birthday: 1995-09-02T03:00:00.000Z,
  flightLicense: 'JORDA-909.h'
}

Pilot {
  firstName: 'Carol',
  lastName: 'Danvers',
  birthday: 1968-08-17T03:00:00.000Z,
  flightLicense: 'DANVE-608.c'
}

Pilot {
  firstName: 'Poe',
  lastName: 'Dameron',
  birthday: 1979-03-09T03:00:00.000Z,
  flightLicense: 'DAMER-709.p'
}
```

---

## ⚠️ Observação

A licença só é criada caso o piloto ainda não possua uma licença cadastrada.

---
