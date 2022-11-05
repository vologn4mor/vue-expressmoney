<template>
    <div class="coin" @click="$emit('action', id)" :class="selectedCoin ? 'selected' : null">
        <div class="coin__block">
            <img :src="imageUrl" :alt="name" class="coin__img">
            <p>{{ name }}</p>
        </div>
        <div class="coin__info">
            <p v-if="isSelectedCourse ? course : reserve">
                {{ isSelectedCourse ? formatCourse : reserve }}
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
        },
        selectedCoin: {
            type: Boolean,
            required: true
        },
        isFiat: {
            type: Boolean,
            required: true,
        }
    },
    computed: {
        formatCourse(): String {
            if (this.isFiat) {
                return "1 - " + this.course
            } else {
                return this.course + " - 1"
            }
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
    margin-bottom: 2px;
}

.coin:hover {
    cursor: pointer;
    background-color: #e7ebfd;
}

.selected {
    background-color: #e7ebfd;
}

.coin__block {
    display: flex;
    align-items: center;
}

.coin__info {
    margin-right: 5px;
}

@media (max-width: 700px) {
    .coin__info {
        display: none;
    }

}

@media (max-width: 560px) {
    .coin__info {
        display: none;
    }

    .coin__block {
        flex-direction: column;
        margin: 0 auto;
    }

    .coin__block p {
        padding-left: 0;
    }

}
</style>