const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/light-logo.png" class="brand-logo" alt="">
    <div class="nav-item">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn"> search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>       
        <a href="#"><img src="img/cart.png" alt=""></a>      
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="Acasa">Acasa</a></li>
    <li class="link-item"><a href="#" class="ATV-uri">ATV-uri</a></li>
    <li class="link-item"><a href="#" class="Dirtbike-uri">Dirtbike-uri</a></li>
    <li class="link-item"><a href="#" class="Echipament">Echipament</a></li>
</ul>
    `;
}

createNav();
