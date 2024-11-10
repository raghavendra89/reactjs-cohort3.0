import { useState } from 'react'
import './css/App.css'
import {AmazonCheckout} from "./Pages/imports-pages";
import { RecoilRoot } from 'recoil';

function App() {
console.log('App Component')
  return (
    <RecoilRoot>
      <AmazonCheckout />
  </RecoilRoot>
  )
}

export default App
