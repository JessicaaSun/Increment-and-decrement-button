

const Circle = ({value}) => {
  return (
    <div>
        <div className={`w-[200px] h-[200px] border border-transparent rounded-[100px] ${value === 0 ? "bg-cyan-900" : value < 0 ? "bg-yellow-500": "bg-red-900"} flex justify-center items-center`}>
            <h1 className="text-white ">{value}</h1>
        </div>
    </div>
  )
}

export default Circle
