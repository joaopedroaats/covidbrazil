import { createGlobalStyle } from 'styled-components'
import useStats from '../utils/useStats'

import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
import RateOfChange from '../components/RateOfChange'


const { default: next } = require("next");

export default function artigos() {

  return (
    <div>
      {/* <GlobalStyle /> */}
      <h1>Brasil</h1>
      <Stats url="https://covid19.mathdro.id/api/countries/BRA"></Stats>
      <CountrySelector></CountrySelector>
      {/* <RateOfChange /> */}
    </div>
  )
}