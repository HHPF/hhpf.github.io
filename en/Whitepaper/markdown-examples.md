# Markdown擴展示例

本頁展示了VitePress提供的一些內置markdown擴展。

## 語法高亮

VitePress提供了由[Shiki](https://github.com/shikijs/shiki)支持的語法高亮，還具有行高亮等附加功能：

**輸入**

````md
```js{4}
export default {
  data () {
    return {
      msg: '高亮顯示！'
    }
  }
}
```
````

**輸出**

```js{4}
export default {
  data () {
    return {
      msg: '高亮顯示！'
    }
  }
}
```

## 自定義容器

**輸入**

```md
::: info
這是一個信息框。
:::

::: tip
這是一個提示。
:::

::: warning
這是一個警告。
:::

::: danger
這是一個危險警告。
:::

::: details
這是一個詳情塊。
:::
```

**輸出**

::: info
這是一個信息框。
:::

::: tip
這是一個提示。
:::

::: warning
這是一個警告。
:::

::: danger
這是一個危險警告。
:::

::: details
這是一個詳情塊。
:::

## 更多

查看[完整的markdown擴展列表](https://vitepress.dev/guide/markdown)文檔。