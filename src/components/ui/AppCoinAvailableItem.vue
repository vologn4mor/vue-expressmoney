<template>
    <div class="coin" @click="$emit('action', id)">
        <div class="coin__block">
            <img :src="imageUrl" :alt="name" class="coin__img">
            <p>{{ name }}</p>
        </div>
        <div class="coin__info">
            <p v-if="isSelectedCourse ? course : reserve">
                {{ isSelectedCourse ? "1 → " + course : reserve }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    data() {
        return {

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
        course: {
            type: Number,
            required: true
        },
        reserve: {
            type: Number,
            required: true
        },
        isSelectedCourse: {
            type: Boolean,
            required: true
        }
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
}

.coin__block {
    display: flex;
    align-items: center;
}

.coin__info {
    margin-right: 5px;
}
</style>