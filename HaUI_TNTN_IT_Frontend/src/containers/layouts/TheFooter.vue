<template>
    <footer>
        <div class="contact">
            <ul>
                <li><a target="_blank" href="https://www.tiktok.com/@hauiittntnteam?_t=8hISwZpo9L7&_r=1"><i
                            class="fa-brands fa-tiktok tiktok"></i></a></li>
                <li><a target="_blank" href="https://www.facebook.com/TNTNCNTT"><i
                            class="fa-brands fa-facebook facebook"></i></a>
                </li>
                <li><a href="mailto:tntn@fit-haui.edu.vn"><i class="fa-solid fa-envelope email"></i></a>
                </li>
            </ul>
        </div>
        <div class="copyright">
            <p>&copy; 2023 Copyright: Đội TNTN khoa CNTT - HaUI</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "TheFooter"
}
</script>

<style scoped>
footer {
    background-color: #f5f5f5;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-primary);

}

footer .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    height: 60%;
    border-bottom: 1px solid var(--color-border);
}

footer .contact ul {
    display: flex;
    gap: 10px;
}

footer .contact ul li {
    list-style-type: none;
}

footer .contact ul li a {
    text-decoration: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-white);
    box-shadow: 0px 2px 4px var(--color-shadow);
}

footer .contact ul li a:focus-visible {
    outline-offset: var(--outline-offset);
    outline-color: var(--color-outline);
    outline-width: var(--outline-width);
}

footer .contact ul li a i {
    font-size: 25px;
}

footer .contact ul li a:hover i {
    animation: zom-out 350ms linear;
}

@keyframes zom-out {
    0% {
        rotate: none;
    }

    30% {
        rotate: -16deg;
    }

    60% {
        rotate: 16deg;
    }

    100% {
        rotate: -16deg;
    }
}

footer .contact ul li a .tiktok {
    filter: drop-shadow(2px 0px 0px #FD3E3E) drop-shadow(-2px -2px 0px #4DE8F4);
    color: var(--color-text-default);
}

footer .contact ul li a .facebook {
    color: #0866ff;
}

footer .contact ul li a .email {
    color: #ffb933;
}

footer .copyright {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer .copyright p {
    font-family: Comfortaa-Bold;
    color: var(--color-white);
    text-align: center;
}
</style>