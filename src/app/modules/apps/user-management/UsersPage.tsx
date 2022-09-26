import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'
import { Horizontal } from "../../wizards/components/Horizontal";

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'User Management',
    path: '/user-management/users',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Users list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
        <Route
          path='new-user'
          element={
            <>
              <Horizontal />
            </>
          }
        />

      {/*  page not found*/}
        <Route
          path='*'
          element={
            <>
              <Navigate to='/error/404' />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/user-management/users' />} />
    </Routes>
  )
}

export default UsersPage
