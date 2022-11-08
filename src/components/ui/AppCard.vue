<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 100%;
    padding: 0 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px lightgray;
    margin: 20px 0;
    padding: 20px;
}
</style>
