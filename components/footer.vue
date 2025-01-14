<template>
    <footer class="footer">
    <div class="footer-content">
        <p>&copy; 2025 AmStar. All rights reserved.</p>
        <p>Головний і директор фірми: <strong>Когутка Михайло Михайлович</strong></p>
        <div class="company-info">
            <p><strong>Реєстраційні дані:</strong></p>
        <ul>
            <li><strong>Повна назва:</strong> ТОВ «СПОРТ-КІТ»</li>
            <li><strong>Англійська назва:</strong> «SPORT-KIT» LIMITED LIABILITY COMPANY</li>
            <li><strong>Адреса:</strong> 88000, Україна, Ужгородський р-н, Закарпатська обл., м. Ужгород, пл. Хмельницького Б., будинок 2б, офіс 2</li>
            <li><strong>Пошта:</strong> sportkit.technologies@gmail.com</li>
            <li><strong>Телефон:</strong> +380 (50) 083-14-36</li>
            <li><strong>Дата заснування:</strong> 21.06.2023</li>
            <li><strong>Код ЄДРПОУ:</strong> 44923493</li>
        </ul>
        </div>
        <div class="owners">
            <p><strong>Власники:</strong></p>
            <ul>
            <li>Когутка Михайло Михайлович</li>
            </ul>
            <p><strong>Кінцеві бенефіціарні власник:</strong> Когутка Михайло</p>
        </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #333;
    color: #fff;
    padding: 2rem;
    text-align: center;
}

.footer-content {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

.footer-content p,
.footer-content ul {
    margin: 0.5rem 0;
}

.footer-content strong {
    color: #f39c12;
}

.company-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.company-info ul li {
    margin-bottom: 0.5rem;
}

.owners ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>  