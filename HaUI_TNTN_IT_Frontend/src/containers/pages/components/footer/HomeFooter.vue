<template>
    <div class="home-footer">
        <div class="logo-tntn">
            <img :src="require('@/assets/img/logo_tntn.png')" />
        </div>
        <div class="footer-thanks">
            <h3>Thank you!</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeFooter",
}
</script>

<style scoped>
.home-footer {
    min-height: 900px;
    padding: 120px 0;
    box-sizing: border-box;
    background: url(../../../../assets/img/footer-shape.png) center bottom/cover no-repeat local;
}

.logo-tntn {
    position: relative;
    display: flex;
    justify-content: center;
}

.logo-tntn img {
    width: 300px;
    max-width: 70%;
    z-index: 10;
}

.footer-thanks {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 120px 0;
}

.footer-thanks h3 {
    font-family: Dancing_Script-Bold;
    font-size: 5rem;
}
</style>