# Lists

## list-style-type


```css

<ul>
  <li>
    disc
  </li>
  <li>
    circle
  </li>
  <li>
    square
  </li>
  <li>
    lower-alpha
  </li>
  <li>
    lower-roman
  </li>
</ul>

```

### نکته 

ما میتونیم لیست استایل رو هم به یو ای و او ال بدیم هم به لیست آیتم. در هر دو صورت کار میکنه 

```css

ul,ol{
  list-style-type: disc;


}

li{
  list-style-type: disc; 
}

```

## list-style-image

```css

p{
  list-style-image: url('image');
}

```