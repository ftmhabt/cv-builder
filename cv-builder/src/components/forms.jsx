import './../styles/forms.css'
import rightIcon from './../assets/right.svg'
import { useState } from 'react'

export default function Forms(){
    const [selected,setSelected]=useState(0);
    return(
        <div className="forms">
            <div className="form-type">
                <div className="general-btn" onClick={()=>setSelected(0)}>general information {selected===0?<img src={rightIcon} alt="" />:''}  </div>
                <div className="educational-btn" onClick={()=>setSelected(1)}>educational experience {selected===1?<img src={rightIcon} alt="" />:''}</div>
                <div className="practical-btn" onClick={()=>setSelected(2)}>practical experience {selected===2?<img src={rightIcon} alt="" />:''}</div>
            </div>
            <div>

            </div>
        </div>
    )
}