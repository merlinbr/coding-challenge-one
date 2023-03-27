<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable"
import { computed, watchEffect } from "vue"
import type { IDrawHistory } from "@/interfaces/i-draw-history"
import { getDrawHistory } from "@/graphql/getDrawHistory"

const { result, loading } = useQuery(getDrawHistory, {
  filter: { lotteries: 'PowerBall' },
  licensedTerritory: 'US-NJ',
  limit: 5,
  offset: 0
})

const powerBallDraws = computed(() => result.value?.drawHistory.draws as IDrawHistory ?? [])
const powerBallLoadingMsg = 'Powerball Daten werden aktualisiert!' as string
const powerBallDateMsg = 'Die Powerball zahlen vom:' as string

function formatDate (date: Date): string {
  return new Date(date).toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  })
}
watchEffect(() => {
  console.log(powerBallDraws)
})
</script>

<template>
  <div class="container mx-auto p-4">
    <template v-if="loading">
      {{ powerBallLoadingMsg }}
    </template>
    <template v-else>
      <ul class="list-none text-white text-lg">
        <li
          class="mb-3"
          v-for="({ drawDate, drawnNumbers }, index) in powerBallDraws" :key="index"
          :data-test-id="'draw-date-' + index"
        >
          {{ powerBallDateMsg }} {{ formatDate(drawDate) }}
          <div
            v-for="number in drawnNumbers[0].numbers"
            class="space-x-2 text-white pt-2 text-lg"
            :key="number + index"
          >
            <template v-if="number.name === 'EXTRA'">
              <span class="mr-2">Extrazahl:</span>
            </template>
            <template v-if="number.name === 'POWERPLAY'">
              Powerplay:
            </template>
            <div
              v-for="value in number.values"
              class="bg-emerald-600 h-10 w-10 rounded-full text-center inline-block"
              :key="value"
            >
              <span class="align-center">
                {{ value }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>
