import React, {useState} from "react"
import TheCalc from "./TheCalc";


export default function TheModal(){
  const [open, setOpen]= useState(false)

  const handleOpen = ()=> {
    setOpen(true)
  }
  const handleClose = ()=> {
setOpen(false)
  }
  const Text = ()=> <TheCalc close={handleClose}/>
  return(
    <div>
      <div className="gridmain">
        <button onClick={handleOpen} >Open</button>
      </div>
      <div className="modals">
        {open? <Text/>: null}
      </div>
    </div>
  )
}