<template>
    <div class="coin" @click="$emit('action', id)">
        <div class="coin__block">
            <img :src="imageUrl" :alt="name" class="coin__img">
            <p>{{ name }}</p>
        </div>
        <div class="coin__arrow">
            <img :src="Arrow" alt="arrow" class="arrow" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import Arrow from "@/assets/images/h_arr.png"

export default Vue.extend({
    data() {
        return {
            Arrow
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
    }
})
</script>

<style scoped lang="scss">
p {
    margin: 0;
    padding-left: 10px;
}

.coin__img {
    width: 40px;
    height: 40px;
    margin: 10px;
}

.coin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
}

.coin:hover {
    cursor: pointer;
    background-color: #e7ebfd;

    .coin__arrow {
        display: block;
    }
}

.coin__block {
    display: flex;
    align-items: center;
}

.coin__arrow {
    margin-right: 5px;
    display: none;
}

.arrow,
.coin__arrow {
    width: 20px;
    height: 20px;
}
</style>