import { describe, it, expect, vitest } from 'vitest'

import { mount } from '@vue/test-utils'
import PowerBall from '../PowerBall.vue'
import { useQuery } from "@vue/apollo-composable"

vitest.mock('@vue/apollo-composable', () => ({
  __esModule: true,
  useQuery: vitest.fn(),
}))
useQuery.mockImplementation(() => ({
  result: { value: mockData }
}))

const mockData = {
  drawHistory: {
    draws: [
      {
        drawDate: '2023-03-26T02:59:00.000Z',
        addOns: ['powerPlay'],
        id: 'US_NJ_PowerBall_2023-03-26T02:59:00Z',
        drawnNumbers: [
          {
            numbers: [
              {
                name: 'BASE',
                values: [15, 17, 18, 47, 57]
              }
            ]
          }
        ]
      }
    ]
  }
}

describe('PowerBall', () => {
  it('renders properly', () => {
    const wrapper = mount(PowerBall)

    expect(wrapper.element).toMatchSnapshot()
  })

  it('should show drawDate in specific date format dd.mm.yyyy', () => {
    const wrapper = mount(PowerBall)
    const drawDate = wrapper.find('[data-test-id="draw-date-0"]')

    expect(drawDate.text()).toContain('26.03.2023')
  })

  it('should show loading message when query is still loading', () => {
    useQuery.mockImplementation(() => ({
      result: {},
      loading: true
    }))
    const wrapper = mount(PowerBall)

    expect(wrapper.text()).toContain('Powerball Daten werden aktualisiert!')
    expect(wrapper.element).toMatchSnapshot()
  })
})
