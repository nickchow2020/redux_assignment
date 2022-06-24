import { Button } from 'antd';
import "./AddOnBtn.css";
import {useSelector,useDispatch} from "react-redux";
import { useState , useEffect} from 'react';
import {AddOnDisplay} from "../redux/actionCreator"

const AddOnBtn = () => {

  const [AddOn,setAddOn] = useState(20)

  const {init} = useSelector(data => data)

  const dispatch = useDispatch()

  const handleAddOn = ()=>{
    setAddOn(add => add + 10)
  }

  useEffect(()=>{
    const performData = [...init.results.slice(0,AddOn)]

    const performInitState = {
      resultCount:performData.length,
      results:performData}

      dispatch(AddOnDisplay(performInitState))
  },[AddOn])


  return(
    <div className='addOnBtnDiv'>
    <Button onClick={handleAddOn} type="primary">Show More</Button>
    </div>
  )
}




export default AddOnBtn;