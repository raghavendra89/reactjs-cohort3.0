// atoms.js
import { atomFamily} from 'recoil';

// Define an atom family where each todo has its own unique atom based on `id`
export const todoAtomFamily = atomFamily({
  key: 'todoAtomFamily',
  default: (id)=>({id:0,title:'',description:''})
});
