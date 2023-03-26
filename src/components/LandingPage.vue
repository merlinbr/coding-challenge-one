<script setup lang="ts">
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { computed, watchEffect } from "vue"

const drawHistoryQuery = gql`
  query {
    drawHistory(filter: {lotteries: PowerBall}, licensedTerritory: "US-NJ", limit: 25, offset: 0) {
      draws {
        id
        drawDate
        addOns
        drawnNumbers {
          numbers {
            values
            name
          }
        }
      }
    }
  }
`

const { result } = useQuery(drawHistoryQuery)
const drawHistoryIds = computed(() => result.value.drawHistory.draws ?? [])

watchEffect(() => {
  console.log(drawHistoryIds)
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">Willkommen auf der Lotto Seite XYZ</h1>
  </div>
</template>

<style scoped>
</style>
