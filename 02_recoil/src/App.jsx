import { useState,memo } from 'react'
import { useRecoilValue,useSetRecoilState } from 'recoil';
import { counter } from './store/atoms/counter';
import "./app.css";

export default function App() {

  return (
    <>
    <CurrentCount1 />
    <IncreaseCount1 />
    <DecreaseCount1 />
    <p>Hello About</p>
    </>
  )
}

function CurrentCount1(){
  const count=useRecoilValue(counter);

  return<>
  <h6>{count}</h6>
  {/* <DummyComponent /> */}
  <MemoizedDummyComponent count={"Hello"}/>
  </>
}

const MemoizedDummyComponent=memo(DummyComponent);

function DummyComponent (){
  console.log('Dummy Component');
  return <p>Dummy Component</p>
}

function IncreaseCount1(){
  const setCounter=useSetRecoilState(counter);

  function increaseCount(){
    setCounter(c=>c+1);
  }
  return <button onClick={increaseCount}>Increase</button>
}

function DecreaseCount1(){
  const setCounter=useSetRecoilState(counter);

  function decreaseCount(){
    setCounter(c=>c-1);
  }
  return <button onClick={decreaseCount}>Decrease</button>

}

