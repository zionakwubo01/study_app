import { Outlet } from 'react-router-dom'
const AuthLayout = () => {

  return (
    <div className="flex w-[100%]">
      <div className="flex w-[calc(100%)] justify-end">
        <div className="flex flex-col w-[100%] transition-all duration-300 md:w-[calc(100%-250px)] justify-end">
          <div

          >
            <Outlet />


          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout