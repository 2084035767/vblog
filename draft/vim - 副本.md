---
title: 胡说| 链表的基础理解
date: 2022-8-26
categories:
  - 编程知识
tags:
  - C 语言
  - 数据结构
publish: false
---

;

## 链表的定义

```c
// 结点结构体
struct node {
int data; // 存储数据
struct node* next; // 存储结点指针
};
```

这段代码定义了一个名为 `node` 的结构体，它表示链表中的一个节点。结构体包含两个成员变量：

1. `int data`：用于存储节点中的数据。这里的 `data` 是一个整数类型的变量，可以根据实际需求进行修改。

2. `struct node* next`：用于指向下一个节点的指针。这里的 `next` 是一个指向 `struct node` 类型的指针，它指向链表中的下一个节点。如果当前节点是链表的最后一个节点，则 `next` 指针将为 `NULL`，表示没有下一个节点。

```c
typedef int ElemType; // int 类型别名
typedef struct Node {
	ElemType data;
	struct Node* next;
} LinkNode; // 结点别名
```

这里为类型起别名是为了更好更改结点内的存储类型，





### 头插法

```c {13-15}
//头插法
void CreateListH(LinkNode* L, ElemType a[], int n) {
	LinkNode* s;
	//申请内存空间
	L = (LinkNode*)malloc(sizeof(LinkNode));
	//首将会变尾，将尾节点设空
	L ->next = NULL;
	for (int i = 0; i < n; i++) {
		s = (LinkNode*)malloc(sizeof(LinkNode));
		//将数据放入s的数据域
		s ->data = a[i];
		//将s的插入首节点前
		s ->next = L ->next;
		//将s的插入头节点后
		L ->next = s;
	}
}
```



### 尾插法

```c
//尾插法
void CreateListT(LinkNode* L, ElemType a[], int n) {
	LinkNode *s, *r;
	L = (LinkNode*)malloc(sizeof(LinkNode));
	//暂时代替头节点
	r = L;
	for (int i = 0; i < n; i++) {
		s = (LinkNode*)malloc(sizeof(LinkNode));
		s ->data = a[i];
		//将r指向s
		r ->next = s;
		//将r代替s成为尾节点
		r = s;
	}
	//尾节点设空
	r ->next = NULL;
}
```

