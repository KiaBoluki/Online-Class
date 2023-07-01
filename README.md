<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Noto Sans Arabic' " >
# Form
محلی برای وارد کردن اطلاعات توسط کاربر

## Form Controls

`<form>`
`// inputs`
`</form>`

## label
`<label for="id">`
`// Some text`
`</label>`

## Input

المانهای داخل فرم که مسئولیت دریافت اطلاعات از کاربر را دارند.

`<input type="" >`

### attributes:
- value
مقداری را داخل ولیو میگذاریم که قرار است برای سرور ارسال بشود.
در واقع کاربر با کلیک بر روی دکمه سابمیت فرم اطلاعات را به سرور ارسال میکند. 
آنزمان اطلاعات ارسال شده بوسیله نام یا همان اتریبیوت نیم و مقدار یا همان اتریبیوت ولیو قابل شناسایی هستند.
- name
- placeholder
- checked, selected
باعث میشه هنگام بارگذاری یا لود شدن صفحه گزینه مورد نظر به صورت پیش فرض از قبل انتخاب شده باشد. البته کاربر میتواند این انتخاب را تغییر دهد.

## textarea

`<textarea></textarea>`

attrbutes:
- cols
- rows

## select 

`<select name="" id="">`
`<option value="">text</option>`
`</select>`

موارد کاربرد سلکت زمانی است که تعداد گزینه های ما زیاد باشد. 

### mulitple
به کاربر اجازه میدهد بیش از یک گزینه را همزمان انتخاب نماید

### types: 
- text
- password
- submit
- number
- radio (radio button)
  - اسم همه ی گزینه های مربوط به یک سوال باید همسان باشد
