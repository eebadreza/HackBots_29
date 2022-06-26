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
                <a href="singup.html"><img src="img/user.png" alt=""></a>
                <a href="404.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container" style="background-color:lightgrey">
        <li class="link-item"><a href="index.html" class="link">home</a></li>
        <li class="link-item"><a href="index_handloom.html" class="link">Accessories</a></li>
        <li class="link-item"><a href="index_handicraft.html" class="link">Handicrafts</a></li>
        <li class="link-item"><a href="#footer-title" class="link">About Us</a></li>
        <li class="link-item"><a href="#" class="link">Blog</a></li>
        </ul>
    `;
}

createNav();