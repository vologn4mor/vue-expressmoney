<template>
    <div class="footer">
        <hr class="line">
        <div class="content">
            <div class="main">
                <p class="main__service">Сервис обмена электронных валют.</p>
                <div class="my-social">
                    <a v-for="social in mySocials" :key="social.name" :href="social.link">
                        <img :src="social.image" :alt="social.name">
                    </a>
                </div>
                <div class="partners-social">
                    <a v-for="social in partnersSocials" :key="social.name" :href="social.link">
                        <img :src="social.image" :alt="social.name">
                    </a>
                </div>
            </div>
            <div class="links">
                <router-link v-for="link in links" :to="link.url" :key="link.title">{{ link.title }}</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import bestchange from "@/assets/images/bestchange.png"
import glazok from "@/assets/images/glazok.png"
import fbIco from "@/assets/images/fb-ico.png"
import insIco from "@/assets/images/ins-ico.png"
import tmIco from "@/assets/images/tm-ico.png"
import twIco from "@/assets/images/tw-ico.png"
import vkIco from "@/assets/images/vk-ico.png"

export default Vue.extend({
    data() {
        return {
            mySocials: [
                {
                    name: "VK",
                    image: vkIco,
                    link: "https://google.com"
                },
                {
                    name: "Facebook",
                    image: fbIco,
                    link: "/"
                },
                {
                    name: "Twitter",
                    image: twIco,
                    link: "/"
                }, {
                    name: "Instagram",
                    image: insIco,
                    link: "/"
                }, {
                    name: "Telegram",
                    image: tmIco,
                    link: "/"
                },
            ],
            partnersSocials: [
                {
                    name: "BestChange",
                    image: bestchange,
                    link: "/"
                }, {
                    name: "Glazok",
                    image: glazok,
                    link: "/"
                },
            ],
            links: [
                {
                    title: "Безопасность",
                    url: "/notice"
                }, {
                    title: "Правила",
                    url: "/rules"
                }, {
                    title: "Политика конфиденциальности",
                    url: "/politika"
                },
            ]
        }
    }
})
</script>

<style lang="scss" scoped>
$primaryColor: #9b9b9b;

.line {
    border-top-width: 0px;
    border-top-style: solid;
    color: $primaryColor;
}

.main__service {
    color: $primaryColor;
    font-size: 13px;
}

.content {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    padding: 30px 10px 0 10px;
}

.my-social {
    padding: 0 150px;
}

.my-social a {
    margin-right: 5px;
    transition: 0.5s;
}

.my-social a:hover {
    opacity: 0.7;
    transition: 0.5s;
}

.partners-social {
    display: flex;
    align-items: center;
}

.partners-social a {
    margin-left: 5px;
}

.main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.links {
    display: flex;
    justify-content: center;
    padding: 30px 0;
}

.links * {
    margin: 0 10px 0 10px;
    color: #6377f7;
}

.links *:hover {
    text-decoration: none;
}

@media(max-width: 750px) {

    .main,
    .links {
        flex-direction: column;
        align-items: center;
    }

    .my-social {
        padding: 0
    }

}
</style>