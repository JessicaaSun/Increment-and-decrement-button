
import Button from "./Button"

const Home = ({Increment, num1}) => {  
    return (
    <>   
    <div className="relative w-full h-[100vh flex justify-center">
      <div className="absolute flex justify-center text-center items-center h-[100vh]">
        <Button num={num1} onClick1={Increment}/>
      </div>
    </div>
    </>
  )
}

export default Home