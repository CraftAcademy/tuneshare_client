import React from 'react'
import * as Redux from 'react-redux'
import { render, within } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import HomeScreen from '../src/components/HomeScreen'
import initialState from '../src/state/store/initialState'
import { posts } from './fixtures/staticPostIndexData'

describe('<HomeScreen />', () => {
  const mockStore = configureStore([])
  const store = mockStore({ ...initialState, posts: posts })
  const useSelectorMock = jest.spyOn(Redux, 'useSelector')
  beforeEach(() => {
    useSelectorMock.mockClear()
  })
  describe('<Flatlist />', () => {
    let screen
    beforeEach(() => {
      screen = render(
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      )
    })

    it('calls useSelector hook', () => {
      expect(useSelectorMock).toHaveBeenCalled()
    })

    it('contains post data', () => {
      expect(screen.getByTestId('list').props.data).toHaveLength(3)
    })

    it('renders 3 <Text /> items', () => {
      const listItems = within(screen.getByTestId('list'))
      expect(listItems.UNSAFE_getAllByProps('Text')).toHaveLength(3)
    })
  })
})
