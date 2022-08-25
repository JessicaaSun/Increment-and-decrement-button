

const Reset = ({onClick3}) => {
  return (
    <div>
      <button className="float-right border-[3px] border-cyan-600 p-[20px] rounded-[10px]" type="button" onClick={()=>{
        onClick3()
      }}>Reset</button>
    </div>
  )
}

export default Reset
