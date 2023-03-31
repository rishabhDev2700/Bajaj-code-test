import {useRef} from 'react';
import {Item} from './Item.js'
export const MainScreen = (props)=>{
  const items = props.data.map((item)=>{ return <Item {...item} />})
  return (<div className="App">
  <h1>List</h1>
  <ul>
    {items}
  </ul>
</div>)
}