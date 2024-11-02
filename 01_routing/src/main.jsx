/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route,Outlet } from 'react-router-dom'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter.js'

const Router=
<BrowserRouter>
    <Routes>
        <Route path="/random" element={<Layout />}>
        <Route path="/random/about" element={<About />}/>
        <Route path="home" element={<Home />} />
        </Route>
    </Routes>
</BrowserRouter>

createRoot(document.getElementById('root')).render(
    <RecoilRoot>
    {Router}
    </RecoilRoot>
)

function Layout(){
    return (<>
      <h1>Layout</h1>
      <Outlet />
      </>
    )
}
function About(){


  return (<>
    <CurrentCount1 />
    <IncreaseCount1 />
    <DecreaseCount1 />
    <p>Hello About</p>
  </>);
}


function CurrentCount1(){
  const counter=useRecoilValue(counterAtom);

  return<>
  <h6>{counter}</h6>
  </>
}

function IncreaseCount1(){
  const setCounter=useSetRecoilState(counterAtom);

  function increaseCount(){
    setCounter(c=>c+1);
  }
  return <button onClick={increaseCount}>Increase</button>
}

function DecreaseCount1(){
  const setCounter=useSetRecoilState(counterAtom);

  function decreaseCount(){
    setCounter(c=>c-1);
  }
  return <button onClick={decreaseCount}>Decrease</button>

}

function Home(){
  const [counter,setCounter]=useState(0);


  return (<>
    <CurrentCount counter={counter}/>
    <IncreaseCount setCounter={setCounter}/>
    <DecreaseCount setCounter={setCounter}/>
  </>);
}

function CurrentCount({counter}){
  return<>
  <h6>{counter}</h6>
  </>
}

function IncreaseCount({setCounter}){
  function increaseCount(){
    setCounter(c=>c+1);
  }
  return <button onClick={increaseCount}>Increase</button>
}

function DecreaseCount({setCounter}){

  function decreaseCount(){
    setCounter(c=>c-1);
  }
  return <button onClick={decreaseCount}>Decrease</button>

}
