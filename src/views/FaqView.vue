<template>
    <AppOtherPagesTemplate>
        <h2>FAQ</h2>
        <AppCard>
            <div class="faq-block">

            </div>
        </AppCard>
    </AppOtherPagesTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import AppOtherPagesTemplate from '@/components/AppOtherPagesTemplate.vue'
import AppCard from '@/components/ui/AppCard.vue'

interface IFaq {
    question: string,
    answer: string,
}

const faqs: IFaq[] = [{
  question: 'test?',
  answer: 'test'
}]

export default Vue.extend({
  components: {
    AppOtherPagesTemplate,
    AppCard
  }
})
</script>

<style lang="scss">

</style>
