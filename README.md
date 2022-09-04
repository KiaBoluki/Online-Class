# Boxes

توضیح اینکه هر المانی داخل صفحه اچ تی ام ال در واقع داخل یک کادر یا باکس قرار دارد. 
یعنی پارگراف ، ایمیج، هدینگ، لیست ، و ...
داخل یک باکس قرار دارند که دور آن ها را گرفته است. 
ما میتوانیم با سی اس اس این باکس را ویرایش کنیم. 


## properties for boxes

### width and height 

```css

p, h1, h2, span, a , body, button, form {

  min-width: 350px;
  max-width: 600px;

  min-height: 750px;
  max-height: 1500px; 

  width: 50%;
  height: 500px; 

}
  ```


  ### overflow 

  سرریز شدن . لبریز شدن. 

  بیرون زدن محتوا از باکس رو میگن اورفلو
  حالا ما توی سی اس اس میتونیم کنترل کنیم که محتوایی که از باکس خودش بیرون زده چه اتفاقی برایش بیافتد 

  مقادیری که این خاصیت دریافت میکند اینها هستن.


  <ol>
    <li>
      hidden
    </li>
    <li>
      scroll
    </li>
  </ol>


  ### border

  مرز - یا حد و حدود یا محیط 

  میتونیم با استفاده از این خاصیت حد و حدود هر المان رو ببینیم یا ویرایش کنیم. 

  برای اینکه بتوانیم بردر یک المان را ببینیم باید سه تا خاصیت برای آن بردر مشخص کنیم. 

  1. رنگ // border-color
  2. سایز // border-width 
  3. نوع // border-style
      1. solid
      2. dotted
      3. dashed
      4. double
      5. groove
      6. ridge
      7. inset
      8. outset
      9. hidden/none
```css
  p{
    border-style: solid;
    border-width: 5px; 
    border-color: red;
  }
```

### نکته طلایی 

خلاصه نویسی 
ما میتونیم همین دستورات رو توی یه خط بنویسیم و براوزر متوجه میشه که ما چه جور بردری میخوایم 

```css

  p{
    border: 5px solid red; 
  }

```

## نکته 
ما میتونیم برای هر یک از چهار طرف باک بردر جداگانه تعریف کنیم. 

```css

  p{
    border-top: 3px solid green ; 
    border-left: 5px dotted red; 
  }

```

```css

  p{
    border-top-color: green ; 
    border-left-style: dotted ; 
  }

```

## padding 

فاصله بین محتوا و بردر را پدینگ میگویند

که میتونیم تنظیمش کنیم به صورت زیر

```css

p{
  padding-left: 4px; 
  padding-top: 16px; 
  padding-bottom: 32px; 
  padding-right: 2rem;
}

```

shorthand: 

```css

p{
  padding: topandbottom rightandleft; 
  padding: allsides
}

```


## margin

فاصله بیرونی المان را مارجین میگویند 
در واقع به فاصله بردر یک المان با بردر المان نزدیکش رو مارجین میگویند. 



```css

p{
  margin: topandbottom rightandleft; 
  margin: allsides
}

```

### نکته طلایی

مارجین بالا و پایین روی المانهای اینلاین کار نمیکند 
اگر بخواهیم اصرار داشته باشیم که مارجین به المان اینلاین بدهیم بهتراست که آن را در سی اس اس تبدیل به بلاک کنیم 

```css

a{
  display: block ;
  display: inline-block; 
}

p{
  display: inline; 
  display: none; /*پنهان میکند. یا مخفی میکند .*/
}

```

### نکته نقره ای 
کار جالبی که میشه با مارجین کرد اینه که میشه المان بلاک رو به طور اتوماتیک در وسط پرنت قرار داد. 
مثلا میتونیم یک المان رو برای همیشه وسط صفحه قرار بدیم بدون توجه به اینکه پهنای صفحه چقد باشد. 

```css

  p{
    margin: auto; 
  }

```