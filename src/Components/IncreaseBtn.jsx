
const IncreaseBtn = ({onClick2}) => {
  return (
    <div>
      <button className="float-right border-[3px] border-cyan-600 p-[20px] rounded-[10px]" type="button" onClick={()=>{
        onClick2()
      }}>Increment</button>
    </div>
  )
}

export default IncreaseBtn
