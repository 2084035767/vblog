---
title: 关于| Gitmoji
date: 2022-10-24
categories:
  - 知识科普
tags: 
  - Git
  - Emoji
---

::: warning

根据[gitmoji 中文网](https://neko.ayaka.moe/gitmoji/) 编写。！注意：「该站 66 个，官网 73 个」

:::



> 说明：因为 gitmoji 作者暂时没有 i18n 的打算，所以 gitmoji 中文网站都是 fork gitmoji 项目更新。由于没有中文官网，我在 gitmoji 项目的 issue 中选取了最近的一个中文站点。

### 使用方法

Gitmoji 是一种通过使用表情符号来标记您的提交消息的方法，可以帮助您更清晰地描述您的工作。

下面是如何使用 Gitmoji 的简要步骤：

1. 在您的本地计算机上安装 Gitmoji 插件或下载 Gitmoji 表情符号集。
2. 写提交消息时，在消息开头使用一个 Gitmoji 表情符号来描述您的工作类型。例如，“`:bug:`修复了一个错误”或“`:sparkles:` 添加了新功能”。
3. 按照惯例，在提交消息的开头加上一个大写字母的动词，以说明你所做的工作类型。例如，“Fix”、“Add”、“Update”、“Remove”等。
4. 编写有意义和易于理解的提交消息，以便任何人都可以轻松地理解您所做的更改。

正确的格式应该是：

```git
git commit -m ":emoji: 描述"
```

其中，`:emoji:` 是您所选择的 Gitmoji 表情符号，例如 `:bug:` 表示 Bug 错误，`sparkles:` 表示新增功能。 然后是一个空格，接着是描述您所做更改的简短、有意义的文字。

所以，如果您想使用 Gitmoji 来标记您的提交消息，那么您应该使用像这样的命令来提交更改：

```git
git commit -m ":bug: Fix issue with user authentication"
```

这个命令将会把您的更改提交到本地的 Git 仓库，并且包含了您的提交消息。



### Gitmoji表格

| Gitmoji                   | 代码                          | 含义                                                         |
| ------------------------- | ----------------------------- | ------------------------------------------------------------ |
| ✨                         | `:sparkles:`                  | 引入新功能（Introducing new features）                       |
| 🔥                         | `:fire:`                      | 删除代码或文件（Removing code or files）                     |
| 🐛                         | `:bug:`                       | 修复 bug（Fixing a bug）                                     |
| 🚑                         | `:ambulance:`                 | 解决紧急问题（Fixing a critical issue）                      |
| :memo:                    | `:memo:`                      | 添加或更新文档（Add or update documentation）                |
| :zap:                     | `:zap:`                       | 提升性能（Improve performance）                              |
| 🎨                         | `:art:`                       | 改进代码结构或代码风格（Improving structure / format of the code） |
| 🚀                         | `:rocket:`                    | 部署应用、发布版本（Deploying stuff）                        |
| 🎉                         | `:tada:`                      | 开始一个项目（Begin a project）                              |
| 🙈                         | `:see_no_evil:`               | 添加或更新 .gitignore 文件（Adding or updating .gitignore）  |
| 1:bookmark:               | `:bookmark:`                  | 发布或创建标签（Release / Version tags）                     |
| 📦                         | `:package:`                   | 添加或更新已编译文件或包（Updating compiled files or packages） |
| 1:pushpin:                | `:pushpin:`                   | 指定某个依赖到特定版本（Pin dependencies to specific versions） |
| ➕                         | `:heavy_plus_sign:`           | 新增依赖（Adding a dependency）                              |
| ➖                         | `:heavy_minus_sign:`          | 移除依赖（Removing a dependency）                            |
| 💄                         | `:lipstick:`                  | 更新 UI 和样式文件（Updating the UI and style files）[官网移除] |
| :mute:                    | `:mute:`                      | 移除日志（Remove logs）                                      |
| :children_crossing:       | `:children_crossing:`         | 提升用户体验和实用性（Improve user experience / usability）  |
| :building_construction:   | `:building_construction:`     | 架构层面的变更（Make architectural changes）                 |
| :iphone:                  | `:iphone:`                    | 响应式设计变更（Work on responsive design）                  |
| :alembic:                 | `:alembic:`                   | 执行实验 （Perform experiments）                             |
| :triangular_flag_on_post: | `:triangular_flag_on_post:`   | 添加，更新或删除功能标志（Add, update, or remove feature flags） |
| :goal_net:                | `:goal_net:`                  | 错误处理（Catch errors）                                     |
| :dizzy:                   | `:dizzy:`                     | 添加或更新动画和移动效果（Add or update animations and transitions） |
| :passport_control:        | `:passport_control:`          | 与验证、用户组和权限相关的代码变更（Work on code related to authorization, roles and permissions） |
| :recycle:                 | `:recycle:`                   | 重构代码（Refactor code）                                    |
| :truck:                   | `:truck:`                     | 移动或重命名文件和资源 (比如：文件，路径，路由)(Move or rename resources (e.g.: files, paths, routes)) |
| :wheelchair:              | `:wheelchair:`                | 提升无障碍可用性（Improve accessibility）                    |
| :card_file_box:           | `:card_file_box:`             | 执行与数据库相关的更改（Perform database related changes）   |
| :loud_sound:              | `:loud_sound:`                | 添加或更新日志（Add or update logs）                         |
| 💡                         | `:bulb:`                      | 添加或更新代码中的注释（Add or update comments in source code） |
| 🚨                         | `:rotating_light:`            | 修复编译器或是规范化工具警告（Fix compiler / linter warnings） |
| :green_heart:             | `:green_heart:`               | 修复 CI（Fix CI Build）                                      |
| 🔒                         | `:lock:`                      | 修复安全性缺陷（Fix security issues）                        |
| 🍱                         | `:bento:`                     | 添加或更新静态资源（Adding or updating assets）              |
| :arrow_down:              | `:arrow_down:`                | 降级依赖（Downgrade dependencies）                           |
| :arrow_up:                | `:arrow_up:`                  | 升级依赖（Upgrade dependencies）                             |
| 👷                         | `:construction_worker:`       | 添加或更新 CI（Add or update CI build system）               |
| 💬                         | `:speech_balloon:`            | 添加或更新文本和文字（Add or update text and literals）      |
| 📈                         | `:chart_with_upwards_trend:`  | 添加或更新分析或跟踪代码（Adding or updating analytics / tracking code） |
| 🔍                         | `:mag:`                       | 提升搜索引擎优化 SEO（Improve SEO）                          |
| 🔧                         | `:wrench:`                    | 添加或更新配置文件（Add or update configuration files）      |
| 🌐                         | `:globe_with_meridians:`      | 国际化与本地化（Internationalization and localization）      |
| 💩                         | `:poop:`                      | 编写需要改进的糟糕代码（Writing bad code that needs to be improved） |
| 📄                         | `:page_facing_up:`            | 添加或更新许可证文件（Adding or updating license）           |
| ✅                         | `:white_check_mark:`          | 添加、更新、或通过一个测试（Add, update, or pass tests）     |
| 🔀                         | `:twisted_rightwards_arrows:` | 分支合并（Merging branches）                                 |
| :adhesive_bandage:        | `:adhesive_bandage:`          | 非致命缺陷的简单修复（Simple fix for a non-critical issue）  |
| :monocle_face:            | `:monocle_face:`              | 数据探索和审查（Data exploration/inspection）                |
| :coffin:                  | `:coffin:`                    | 移除坏掉的代码（Remove dead code）                           |
| :necktie:                 | `:necktie:`                   | 添加或更新业务逻辑（Add or update business logic）           |
| 🚧                         | `:construction:`              | 在建项目（Work in progress）                                 |
| ⏪                         | `:rewind:`                    | 回滚代码更改（Reverting changes）                            |
| 🏷️                         | `:label:`                     | 添加或更新类型（Add or update types）                        |
| 👥                         | `:busts_in_silhouette:`       | 添加或更新贡献者（Adding or updating contributors）          |
| 🍻                         | `:beers:`                     | 醉醺醺地写糟糕代码（Write code drunkenly）                   |
| 💥                         | `:boom:`                      | 破坏性更新（Introduce breaking changes）                     |
| 👽                         | `:alien:`                     | 因第三方 API 变更而更新的代码（Update code due to external API changes） |
| 🤡                         | `:clown_face:`                | 模拟代码 / 模拟构建（Mock things）                           |
| 🥚                         | `:egg:`                       | 添加或更新彩蛋（Add or update an easter egg）                |
| 🗑️                         | `:wastebasket:`               | 弃用需要被清理的废弃代码（Deprecate code that needs to be cleaned up） |
| 📸                         | `:camera_flash:`              | 添加或更新快照（Adding or updating snapshot）                |
| ✏️                         | `:pencil2:`                   | 修复拼写错误或措辞问题（Fixing typos）                       |
| :hammer:                  | `:hammer:`                    | 添加或更新开发脚本（Add or update development scripts）      |
| 🧪                         | `:test_tube:`                 | 添加一个失败的测试(Add a failing test)                       |

