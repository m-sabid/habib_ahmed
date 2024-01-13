import LoginForm from "../Shared/LoginForm"

function LoginPage() {
  return (
    <div className="min-h-[100vh] bg-gray-400 absolute z-50 w-full left-0 top-0">
      <div className="flex flex-col justify-center items-center h-screen">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage