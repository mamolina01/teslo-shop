import { auth } from '@/auth.config'
import { Title } from '@/components'
import { redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = async () => {
  const session = await auth()
  if (!session?.user) {
    // redirect('/auth/login?returnTo=/perfil')
    redirect('/')
  }

  return (
    <div>
      <Title title="Perfil" />

      {JSON.stringify(session.user, null, 2)}
    </div>
  )
}

export default ProfilePage
