# CSS

Cascade Style Sheet

## 03

### Priority

یک سری قواعد برای سی اس اس وجود داره که تعریف میکنه کدوم تعریف در نهایت اثر گذار روی صفحه باشد.

### Cascade

از بالا به پایین اثر می گذارد یعنی تعریفی که پایین تر نوشته شده باشد در نهایت روی صفحه اثر میگذارد.

#### Last Rule

اولویت ها به شرح زیر است

1. Inline `Style Attr`
2. Style tag `<style>... </style>`
3. External CSS
   1. اولویت با آخرین کدی است که خوانده میشود.

#### Specificity

دقیقتر مشخص کردن

#### important

```css
h1{
  color: red !important;
}
```

#### Inheritance

ارث بری

به این معنا که هر المانی قواعد سی اس اس والدین خودش را به ارث میبرد. مگر اینکه آن قاعده در سی اس اس مشخصا برای آن المان تعریف شده باشد.
