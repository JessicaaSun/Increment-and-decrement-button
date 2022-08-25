
const DecreaseBtn = ({onClick}) => {
  return (
    <div>
      <button className="float-left border-[3px] border-cyan-600 p-[20px] rounded-[10px]" type="button" onClick={()=>{
        onClick()
      }}>Decrement</button>
    </div>
  )
}

export default DecreaseBtn
