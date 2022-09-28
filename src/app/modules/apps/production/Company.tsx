/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { AsideCompany1 } from '../../../../_metronic/layout/components/aside/AsideCompany1'
import { Content } from '../../../../_metronic/layout/components/Content'
import { Footer } from '../../../../_metronic/layout/components/Footer'
import { HeaderWrapperComp1 } from '../../../../_metronic/layout/components/header/HeaderWrapperComp1'



const CompanyPage = () => {
  return (
    <Routes>
      {/* welcome route */}
      <Route
        path="company1"
        element={
          <>
            <div className='page d-flex flex-row flex-column-fluid'>
              <AsideCompany1 />
              <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
                <HeaderWrapperComp1 />

                <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
                  {/* <Toolbar /> */}
                  <div className='post d-flex flex-column-fluid' id='kt_post'>
                    <Content>
                      <Outlet />
                    </Content>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </>
        }
      />
      {/*  page not found*/}

      <Route
        path='*'
        element={<Navigate to='/error/404' replace={true} />}
      />

      <Route index element={<Navigate to='/companies/company1' />} />
    </Routes>
  )
}

export default CompanyPage
