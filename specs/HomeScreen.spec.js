import React from 'react'
import * as Redux from 'react-redux'
import { render, within } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import HomeScreen from '../src/components/HomeScreen'
import initialState from '../src/state/store/initialState'