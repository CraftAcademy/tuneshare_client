import React from 'react'
import * as Redux from 'react-redux'
import PostForm from '../src/components/PostForm'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react-native'
import initialState from '../src/state/store/initialState'

const tracks = [
  {
    track: 'Love Story',
    artists: 'Taylor Swift',
    image: 'https://i.scdn.co/image/ab67616d0000b2737b25c072237f29ee50025fdc',
    preview: null,
  },
  {
    track: 'Love Story',
    artists: 'Sarah Cothran',
    image: 'https://i.scdn.co/image/ab67616d0000b27384840e68d5a06ed86a4189c1',
    preview:
      'https://p.scdn.co/mp3-preview/3e05635b0f4c481bbce2bbd7f0402b6b5df2ab6a?cid=9165f2ed52ac4632b2c23038c2fbe1d9',
  },
  {
    track: 'Greatest Love Story',
    artists: 'LANCO',
    image: 'https://i.scdn.co/image/ab67616d0000b2730429daba876ee55ad630212a',
    preview:
      'https://p.scdn.co/mp3-preview/cacf1fe1666d829e7f562991128ea75acff3600e?cid=9165f2ed52ac4632b2c23038c2fbe1d9',
  },
]

describe('<PostForm />', () => {
  const mockStore = configureStore([])
  const store = mockStore({ ...initialState, tracks: tracks })
  const useSelectorMock = jest.spyOn(Redux, 'useSelector')
  let screen
  beforeEach(() => {
    useSelectorMock.mockClear()
    screen = render(
      <Provider store={store}>
        <PostForm />
      </Provider>
    )
  })

  it('calls useSelector hook', () => {
    expect(useSelectorMock).toHaveBeenCalled()
  })

  it('contains search input', () => {
    expect(screen.getByTestId('searchInput')).toBeTruthy()
  })

  it('contains search button', () => {
    expect(screen.getByTestId('searchButton')).toBeTruthy()
  })

  it('contains search results', () => {
    expect(screen.getByTestId('searchResults')).toBeTruthy()
  })
})
