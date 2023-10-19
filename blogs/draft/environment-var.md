---
title: 关于 Window 环境变量
date: 2023-10-15
categories:
  - 编程知识
tags:
  - Window
publish: false
---

# 环境变量

## 环境变量简介

环境变量 (environment variables) 是在操作系统中用来指定操作系统运行环境的一些参数。环境变量是在操作系统中一个具有特定名字的对象，它包含了一个或者多个应用程序所将使用到的信息。**Windows 和 DOS 操作系统中的 `path` 环境变量，当要求系统运行一个程序而没有告诉它程序所在的完整路径时，系统除了在当前目录下面寻找此程序外，还应到 `path` 中指定的路径去找。用户通过设置环境变量，来更好的运行进程。**

Environment variables：环境变量

- User variables：用户变量
- System variables：系统变量

环境变量可分为用户变量与系统变量两类，在注册表中都有对应的项。

一些常见的环境变量包括：

1. PATH：用于指定可执行文件的搜索路径，当在命令行或脚本中输入一个命令时，系统会在 PATH 中指定的路径中查找可执行文件。

2. TEMP和TMP：用于指定临时文件的存储路径。应用程序可以使用这些变量来确定临时文件的位置。

3. HOME和USERPROFILE：用于指定用户的主目录路径。应用程序可以使用这些变量来确定用户特定数据的存储位置。

4. JAVA_HOME：用于指定 Java 开发工具包（JDK）的安装路径。Java 相关的应用程序和工具可以使用该变量来确定 JDK 的位置。

### 用户变量

::: tip

用户环境变量优先级高于系统环境变量

:::

> 用户变量仅针对当前用户有效。**为了安全起见，一般配置用户环境变量。**

用户变量是在特定用户环境中定义和使用的变量。它们只对当前用户可见，并且仅在当前用户的会话中有效。用户变量通常用于存储个人偏好设置、用户特定的路径或其他与用户相关的信息。

- 用户变量所在注册表位置：`HKEY_CURRENT_USER\Environment`

### 系统变量

> 系统变量为全局变量，对所有用户有效。**不建议为了省事而配置系统环境变量。**


系统变量是在整个操作系统中定义和使用的变量。它们对所有用户可见，并且在整个系统的会话中有效。系统变量通常用于存储全局配置、系统路径或其他与整个系统相关的信息。

- 系统变量所在注册表位置：`HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Session Manager\Environment`

### PATH 变量

1. 环境变量不区分大小写，`path / PATH / Path` 表示指定可执行文件的搜索路径。

2. 命令查看PATH变量时，用户变量 `path` 内容会跟在系统变量 `path` 内容的后面。
3. 对于 `Path` 变量，系统环境变量优先级高于用户环境变量。
4. Windows 系统在执行用户命令时，若用户未给出文件的绝对路径，则首先在当前目录下寻找相应的可执行文件。然后在系统变量的 `path / PATH / Path` 路径中查找，如果找不到，再到用户变量的 `path / PATH / Path` 路径中查找。

Windows 对于 `Path` 变量的处理方式是，将用户变量的 `Path` 添加到系统变量 `Path` 后面。

Windows 在查找指令的时候，是按 `Path` 中的路径从前往后找，直至在某个路径中找到了该指令。如果系统变量 `Path` 中有对应指令的话，Windows 就不会再去用户变量 `Path` 中查找。



## 图形化操作环境变量

打开环境变量窗口的常用三种方式

1. 打开设置 ——> 此电脑 --> 属性 --> 高级系统设置 --> 高级 --> 环境变量
2. 打开搜索 ——> 输入环境变量
3. win + R ——> 输入sysdm.cpl ——> 高级



## CMD操作临时环境变量

### 查看环境变量

```cmd
# 增加变量
set

# 查看某个变量: set+变量名或 echo %变量名% 
set path
```

### 增加和修改环境变量

```cmd
# 添加变量 tmp 
set tmp=f:\tmp

# 修改变量 tmp
set tmp=c:\tmp

# 给变量追加内容
set path=%path%;d:\tmp
```



### 删除环境变量

:::tip 注意

这种方法只会在当前会话中删除临时环境变量，不会永久删除它们。当你关闭命令提示符窗口时，临时环境变量将被清除。

:::

```cmd
# 删除临时环境变量 set 变量名=
set tmp=
```



## CMD操作持久化环境变量

### 增加和修改环境变量

::: warning 警告

请不要随意添加持久化环境变量到系统，以免不必要的问题发生。

::: 

```cmd
# 添加用户环境变量
setx "tmp" "f:/tmp"

# 添加计算机（全局）环境变量
setx "tmp" "f:/tmp" /m
```



### 删除环境变量

::: warning 警告

请谨慎操作，确保您删除正确的环境变量，以免不必要的问题发生。

:::

reg 是操作注册表的命令。博主提示不要随意修改注册表哦。

有效子目录树为

- `HKCR`：HKEY_CLASSES_ROOT
- `HKCU`：HKEY_CURRENT_USER
- `HKLM`：HKEY_LOCAL_MACHINE
- `HKU`：HKEY_USERS
- `HKCC`：HKEY_CURRENT_CONFIG

```cmd
# 删除环境变量
setx "tmp" ""

# 删除环境变量(注册表)
# 如果要删除系统级环境变量，将 HKCU 替换为 HKLM。
reg delete HKCU\Environment /v tmp /f
```



## PS操作临时环境变量

### 查看环境变量

```powershell
# 查看所有环境变量: ls env:
ls env: 

# 查看某个环境变量: $env:name
$env:path

# 支持*
```

### 增加和修改环境变量

```powershell
# 添加变量 tmp 
$env:tmp="f:\tmp"

# 修改变量 tmp
$env:tmp="c:\tmp"
```



### 删除环境变量

```powershell
# 删除环境变量
del env:tmp

# 删除环境变量
Remove-Item Env:tmp
```



## PS操作持久化环境变量

### 查看环境变量

 `[Environment]::GetEnvironmentVariable` 是一个用于设置环境变量值的 .NET Framework 方法。

- `User`：用户变量
- `Machine`：系统变量

```powershell
# 查看用户变量的 PATH
[environment]::GetEnvironmentvariable("Path", "User")


# 查看系统变量 PATH
[environment]::GetEnvironmentvariable("Path", "Machine")
```



### 增加和修改环境变量

```powershell
# 增加用户变量
[environment]::SetEnvironmentvariable("tmp", "f:\tmp", "User")

# 修改用户变量
[environment]::SetEnvironmentvariable("tmp", "c:\tmp", "User")
```



### 删除环境变量

```powershell
# 删除用户变量
[Environment]::SetEnvironmentVariable("tmp", $null, "User")
```



## 参考三三

- [Windows 10 环境变量 - sysin](https://sysin.org/blog/windows-env/)
- [Windows 10 / 11 环境变量 -CSDN博客](https://blog.csdn.net/chengyq116/article/details/105900122)

