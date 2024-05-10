import { auth } from '@/auth.config'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth()

    if (session?.user.role !== "admin") {
        redirect("/login")
    }

    return (
        <>
            {children}
        </>
    )
}

export default AdminLayout