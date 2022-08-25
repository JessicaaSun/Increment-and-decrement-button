
const CenterLayout = (props) => {
  return (
    <div  className='flex w-full h-[100vh] justify-center items-center'>
       {props.children}
    </div>
  )
}

export default CenterLayout
