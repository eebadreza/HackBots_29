const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.jpeg" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container" style="background-color:lightgrey">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">Accessories</a></li>
        <li class="link-item"><a href="#" class="link">Handicrafts</a></li>
        <li class="link-item"><a href="#" class="link">Studio</a></li>
        <li class="link-item"><a href="#" class="link">Blog</a></li>
        </ul>
    `;
}

createNav();