const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `<div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">ATV-uri:</li>
                <li><a href="#" class="footer-link">-Pentru Copii</a></li>
                <li><a href="#" class="footer-link">-Pentru Adulti</a></li>
                <li><a href="#" class="footer-link">-Sport</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Dirtbike-uri:</li>
                <li><a href="#" class="footer-link">-Pentru Copii</a></li>
                <li><a href="#" class="footer-link">-Pentru Adulti</a></li>
                <li><a href="#" class="footer-link">-Sport</a></li>
            </ul>
        </div>
        
    </div>
    <p class="footer-title">Despre Companie</p>
    <p class="info">asgasgagijahjinadgsjn hoagdfhjnoadfgsjhbnkasfgdhjnklagdfbhjnklbfbzdhjklzxbx</p>
    <p class="info">Email de contact: help@atvstore.ro</p>
    <p class="info">Numar de contact: 0728163136</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Termeni si Conditii</a>
            <a href="#" class="social-link">Politica de confidentialitate
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Instagram</a>    
            </a>
        </div>
    </div>
    <p class="footer-credit">ATVStore, cele mai bune vehicule offroad din Romania</p>
    `;
}

createFooter();
