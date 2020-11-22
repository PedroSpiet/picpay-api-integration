<h1 align="center">
    <img alt="picpay" src="https://centraldesuporte.levelupgames.com.br/Media/61486946-8dd4-44fc-adbb-5f62eb6d5588.png" width="200px" />
</h1>

<h3 align="center">
  Picpay - node
</h3>

<blockquote align="center">“PicPay é o app que faz com que seus pagamentos sejam mais simples, rápidos e seguros. Receba e envie dinheiro para outras pessoas, pague contas, estabelecimentos pelo celular.”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <a href="https://picpay.com.br">
    <img alt="Made by Picpay" src="https://img.shields.io/badge/made%20by-picpay-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <a href="#Picpay">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Licença</a>
</p>

# Picpay
Node package API de E-Commerce do PicPay

## :rocket: Technologies

This project was developed with the following technologies:

- [Axios](https://github.com/axios/axios)


## Make Payment:

```bash
 import { Picpay } from 'picpay';

  const buyer = {
    firstName: 'Pedro Emanoel',
    lastName: 'Nascimento',
    document: '***.***.***-**',
    email: 'programmer.pedro@gmail.com',
    phone: '+55 ** *****-****',
  };

  const payload = {
    referenceId: '1020400',
    value: 2.51,
    callbackUrl: 'http://www.sualoja.com.br/callback',
    returnUrl: 'http://www.sualoja.com.br/cliente/pedido/1020400',
    expiresAt: '2022-05-01T16:00:00-03:00',
    buyer,
  };

  const picpay = new Picpay('YOUR_PICPAY_TOKEN', 'YOUR_SALLER_TOKEN');
  const {status, data} = await picpay.payment.send(payload);

```

## Status Payment:

```bash

  picpay.payment.status(payload.referenceId);

```

## Cancel Payment:

```bash

  picpay.payment.cancel({ referenceId: payload.referenceId });

```


