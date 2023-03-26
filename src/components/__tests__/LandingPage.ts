import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LandingPage from '../LandingPage.vue'

describe('LandingPage', () => {
  it('renders properly', () => {
    const wrapper = mount(LandingPage)
    expect(wrapper.text()).toContain('Willkommen auf der Lotto Seite XYZ')
  })
})
