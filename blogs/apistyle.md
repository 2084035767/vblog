---
title: 关于| API 设计风格
date: 2023-6-5
categories: 
  - 知识科普
tags: 
  - 设计风格
---

::: tip 前言

嗐，写JavaWeb项目的看见了，就了解了解。你信我吧？😉

:::

## 简介

> 在写JavaWeb项目的API接口，我们可能见过RESTful风格。其实就是一种API的约定规范，你不遵守也没关系😶。

API风格是指在设计和实现API时所采用的架构和规范，用于定义API的结构、交互方式和通信协议。不同的API风格具有不同的特点和使用场景。

## API 风格类型

API（Application Programming Interface）风格类型主要有以下几种

1. `REST（Representational State Transfer）`风格：`REST`是一种基于HTTP协议的软件架构风格，强调使用统一的接口进行资源的访问和操作`RESTful API`使用HTTP动词（如GET、POST、PUT、DELETE）对资源进行操作，并使用URL来标识资源。
   
2. `RPC（Remote Procedure Call）`风格：`RPC`是一种远程过程调用的通信协议，用于实现不同计算机之间的通信和数据传输。RPC风格的API允许客户端应用程序调用远程服务器上的方法，并获取返回结果。
   
3. `GraphQL（Graph Query Language）`风格：`GraphQL`是一种用于API查询和操作的查询语言和运行时环境。它提供了一种灵活的方式来获取客户端需要的数据，并减少了网络传输的数据量。
   
4. `SOAP（Simple Object Access Protocol）`风格：`SOAP`是一种基于XML的通信协议，用于在网络上进行远程过程调用。它定义了一组规范和标准，用于描述消息的结构和交互方式。
   
5. `gRPC（Google Remote Procedure Call）`风格：`gRPC`是一种高性能、通用的远程过程调用框架，使用`Protocol Buffers`作为接口定义语言。它支持多种编程语言和平台，并提供了强大的功能，如双向流式传输和身份验证。

> 最近看见了腾讯开源了`tRPC`，不知道咋样🤔。–2023.10.20

### API 风格类型分类

> 其实能接触的就几种，了解了解吧。

| Web API          | 查询 API  | 发布订阅 API | RPC API |
| ---------------- | --------- | ------------ | ------- |
| `REST`           | `GraphQL` | `Kafka`      | `SOAP`  |
| `so-called REST` |           | `WebSub`     | `gRPC`  |
|                  |           |              | `tRPC`  |



## 常见 API 风格

> 了解为主，都不太好懂，遇到你就知道了。😉

### REST

REST（Representational State Transfer）是一种软件架构风格，用于构建网络应用程序。它是基于HTTP协议的一组准则和约束，旨在实现系统的可伸缩性、可靠性、可扩展性和简单性。

适用：REST 非常适合构建持久的可扩展系统。它也是一种相对灵活和成熟的风格，因此适用于内容协商、多媒体和顶级身份验证等内容。



### GraphQL

GraphQL是一种灵活、高效的查询语言和运行时环境，用于构建API，以满足客户端精确的数据需求。

适用：GraphQL适用于需要灵活、高效、精确数据查询的场景，特别是在前后端分离、多端应用和复杂数据需求的情况下，能够提供更好的开发体验和数据交互效率。

### Apache Kafka

Apache Kafka是一个高吞吐量、可持久化、分布式流数据平台，用于处理实时数据流，实现高效的数据传输和消息处理。

适用：Apache Kafka适用于需要处理大规模实时数据流、构建分布式系统、实现数据管道和ETL流程、构建流式处理和事件驱动架构以及日志聚合和监控等场景。其高性能、可靠性和可扩展性使其成为处理实时数据和构建可靠的分布式系统的理想选择。



### gRPC

gRPC是一个高性能、开源的远程过程调用（RPC）框架，用于构建跨语言和跨平台的分布式系统，支持多种编程语言和通信协议。

适用：gRPC适用于需要高性能、跨语言、跨平台的远程过程调用场景，特别是在分布式系统和微服务架构中，以及需要双向流和流式处理的应用程序中，gRPC能够提供高效、可靠的通信机制。



### 参考三三

- [浅谈API设计风格 - 掘金 (juejin.cn)](https://juejin.cn/post/6971434012015493128#heading-1)