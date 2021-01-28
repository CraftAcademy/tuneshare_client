import React from 'react'
import * as Redux from 'react-redux'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import HomeScreen from '../src/components/HomeScreen'
import initialState from '../src/state/store/initialState'

const posts = [
  {
    track_name: 'All I Want for Christmas Is You',
    id: 1,
    artists: 'Mariah Carey',
    image: 'https://i.scdn.co/image/ab67616d0000b2734246e3158421f5abb75abc4f',
    preview_url:
      'https://p.scdn.co/mp3-preview/bbafd15ff484394a0ca106d5fef0a81eeea4ef5b?cid=9165f2ed52ac4632b2c23038c2fbe1d9',
    description: 'This is the best christmas song ever! All time favorite!',
  },
  {
    track_name: 'Last Christmas',
    id: 2,
    artists: 'Wham!',
    image: 'https://i.scdn.co/image/ab67616d0000b273f2d2adaa21ad616df6241e7d',
    preview_url:
      'https://p.scdn.co/mp3-preview/ad0a6b7428ef900b169449b24c335d885dc029d0?cid=9165f2ed52ac4632b2c23038c2fbe1d9',
    description:
      "Please don't say you don't know this song! Very classic christmas song.",
  },
  {
    track_name: "It's Beginning to Look a Lot like Christmas",
    id: 3,
    artists: 'Michael Bublé',
    image: 'https://i.scdn.co/image/ab67616d0000b273119e4094f07a8123b471ac1d',
    preview_url:
      'https://p.scdn.co/mp3-preview/798a8bc5a7a95ccad75648a63bc50aa755dc2289?cid=9165f2ed52ac4632b2c23038c2fbe1d9',
    description: 'Everyone can agree on this makes christmas perfect!',
  },
]

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
      expect(screen.getByTestId('post-index').props.data.length).toBe(3)
    })
  })
})
