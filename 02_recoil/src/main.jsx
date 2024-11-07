import { StrictMode,useEffect,useState,memo } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecoilRoot } from 'recoil'

import TodoApp from './Todo-Recoil/App.jsx';

createRoot(document.getElementById('root')).render(

    <RecoilRoot>
    <TodoApp />
    </RecoilRoot>

)

function App1(){
  const [count,setCount]=useState(0);
  console.log('App1 rendered')
  useEffect(()=>{
    const intervalId=setInterval(()=>setCount(c=>c+1),3000); 
    return()=>clearInterval(intervalId)
  },[]);
  return <>
    {count}
  <DummyComponent />
  <h6>Hello</h6>
  </>
}

const DummyComponent=memo(function DummyComponent1 (){
  console.log('Dummy Component Rendered');
  return <p>Dummy Component</p>
});