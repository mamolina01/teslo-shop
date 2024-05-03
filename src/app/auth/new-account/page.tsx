import { RegisterForm } from '@/components'
import { titleFont } from '@/config/fonts'

const NewAccountPage = () => {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-40">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva cuenta</h1>

      <RegisterForm />
    </div>
  )
}

export default NewAccountPage
