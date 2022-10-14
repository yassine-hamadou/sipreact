import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'

const PrivateRoutes = () => {
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>


        {/* Redirect to User-management after success login/registration */}
        <Route path='*' element={<Navigate to='/user-management/users' />} />
        <Route
          path='/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
      </Route>
      {/* another route */}
      {/*<Route*/}
      {/*    path='/companies/*'*/}
      {/*    element={*/}
      {/*        <CompanyPage />*/}
      {/*    }*/}
      {/*  />*/}

        {/* Page Not Found */}
        <Route
          path='*'
          element={
            <Navigate to='/error/404' />
          }
        />
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
