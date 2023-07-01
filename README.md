# Online-Class
Online Classes Codes

# Media Query 

## برای صفحات کوچکتر از 1024 پیکسل 

```css
@media screen and (max-width:1024px){ 
    header nav ul{
        display: none;
    }
    header nav .menu h1#menu-icon {
        display: flex;
   }
}
```

## برای صفحات کوچکتر از 768 پیکسل 
```css
@media screen and (max-width:768px){

    header h1 {
            font-size: 1rem;
    }
}
```

## کد جاواسکریپت برای باز و بسته کردن منو
```js
// window.alert('Salam Az javascript.')

const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');


menuIcon.addEventListener('click', (e) => {
    if ( mobileMenu.style.visibility === 'visible'){
        mobileMenu.style.visibility = "hidden"
    }
    else{

        mobileMenu.style.visibility = 'visible';
    }
    
})
```
