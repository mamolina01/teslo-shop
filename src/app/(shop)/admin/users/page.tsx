export const revalidate = 0

import { getPaginatedUsers } from '@/actions'
// https://tailwindcomponents.com/component/hoverable-table
import { Pagination, Title, UsersTable } from '@/components'

import { redirect } from 'next/navigation'

const OrdersPage = async () => {

    const { ok, users = [] } = await getPaginatedUsers()

    if (!ok) {
        redirect("/auth/login")
    }
    return (
        <>
            <Title title="Mantenimiento de usuarios" />

            <div className="mb-10">
                <UsersTable users={users} />

                <Pagination totalPages={1} />
            </div>
        </>
    )
}

export default OrdersPage
