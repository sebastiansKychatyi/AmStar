<template>
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 AmStar. All rights reserved.</p>
            <p>CEO and Director: <strong>Mykhailo Mykhailovych Kohutka</strong></p>
            <div class="company-info">
                <p><strong>Registration Information:</strong></p>
                <ul>
                    <li><strong>Full Name:</strong> LLC "SPORT-KIT"</li>
                    <li><strong>English Name:</strong> "SPORT-KIT" LIMITED LIABILITY COMPANY</li>
                    <li><strong>Address:</strong> 88000, Ukraine, Uzhhorod district, Zakarpattia region, Uzhhorod city, Khmelnytskyi Square B, building 2b, office 2</li>
                    <li><strong>Email:</strong> sportkit.technologies@gmail.com</li>
                    <li><strong>Phone:</strong> +380 (50) 083-14-36</li>
                    <li><strong>Established:</strong> 21.06.2023</li>
                    <li><strong>EDRPOU Code:</strong> 44923493</li>
                </ul>
            </div>
            <div class="owners">
                <p><strong>Owners:</strong></p>
                <ul>
                    <li>Mykhailo Mykhailovych Kohutka</li>
                </ul>
                <p><strong>Ultimate Beneficial Owner:</strong> Mykhailo Kohutka</p>
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
