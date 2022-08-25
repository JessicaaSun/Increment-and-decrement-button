// import { useState } from "react";

const Button = ({color, bgColor, onClick1, num}) => {
  // const [num, setNum] = useState(0); 
  return (
    <>
      <div className=" text-[30px] w-[200px] h-[200px] border border-transparent rounded-[100px] flex justify-center items-center"
      style={{backgroundColor: bgColor, color:color}}
      onClick={onClick1}>
      <h1>{num}</h1>
      </div>
    </>
  )
}

Button.defaultProps = {
  color: 'white',
  bgColor: 'black',
}
// onClick={() => setNum(num + 1)

export default Button

