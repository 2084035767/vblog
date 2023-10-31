---
title: 谈谈| 《隐入尘烟》观后感
date: 2022-8-26
categories:
  - 随笔感想
tags:
  - 电影
  - 观后感
publish: false
---



## 一、简介

### 1.1 JWT 是什么

JSON Web Token，通过数字签名的方式，以 JSON 对象为载体，在不同的服务终端之间安
全的传输信息。

### 1.2 JWT 的作用

JWT 最常见的场景就是授权认证，一旦用户登录，后续每个请求都将包含I 系统在每次处理用户请求的之前，都要先进行M安全校验，通过之后再进行处理。

## 二、JWT 组成

JSON Web Token由三部分组成，它们之间用圆点(.)连接。这三部分分别是：

- Header
- Payload
- Signature

```JWT
xxxxx.yyyyy.zzzzz
```

### 2.1 头部信息

Header header典型的由两部分组成：token的类型（“JWT”）和算法名称（比如：HMAC SHA256或者RSA等等）。

```json
{
    'alg': "HS256",
    'typ': "JWT"
}
```



### 2.2 载荷

- Payload JWT的第二部分是payload，它包含声明（要求）。声明是关于实体(通常是用户)和其他数据的声明。声明有三种类型: registered, public 和 private。
  - Registered claims : 这里有一组预定义的声明，它们不是强制的，但是推荐。比如：iss (issuer), exp (expiration time), sub (subject), aud (audience)等。
  - Public claims : 可以随意定义。
  - Private claims : 用于在同意使用它们的各方之间共享信息，并且不是注册的或公开的声明。 下面是一个例子

> 注意，不要在JWT的payload或header中放置敏感信息，除非它们是加密的。

```json
{
    "sub": '1234567890',
    "name": 'john',
    "admin":true
}
```



### 2.3 签名

- Signature

> 为了得到签名部分，你必须有编码过的header、编码过的payload、一个秘钥，签名算法是header中指定的那个，然对它们签名即可。

```
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
```

签名是用于验证消息在传递过程中有没有被更改，并且，对于使用私钥签名的token，它还可以验证JWT的发送方是否为它所称的发送方。

## 三、JWT 操作

### 3.1 生成token

```java
// 设置密钥
private static final String SECRET_KEY = "admin";
// 设置过期时间
private static final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 24小时

public String generateToken(User user) {
    // 装载载荷信息
    Map<String, Object> claims = new HashMap<>();
    claims.put("userId", user.getId());
    claims.put("username", user.getUsername());
    claims.put("password", user.getPassword());

    // 有效时间 = 当前时间 + 过期时间
    Date now = new Date();
    Date expiration = new Date(now.getTime() + EXPIRATION_TIME);

    return Jwts.builder()
        // 设置头部信息
        .setHeaderParam("typ", "JWT")
        .setHeaderParam("alg", "HS256")
        // 设置角色
        .setSubject(user.getUsername())
        // 设置载荷信息
        .setClaims(claims)
        .setIssuedAt(now)
        // 设置有效时间
        .setExpiration(expiration)
        // 设置签名
        .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
        // 拼接
        .compact();
}
```



### 3.2 解析token

```java
public Claims parseToken(String token) {
    // 解析JWT令牌的逻辑
    return Jwts.parser()
        // 传入密钥
        .setSigningKey(SECRET_KEY)
        // 解析令牌
        .parseClaimsJws(token)
        // 获取载荷信息
        .getBody();
}
```



