/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Field, ErrorMessage} from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>
      <div className='mb-10 fv-row'>
        <label className='d-flex align-items-center form-label mb-3'>
          Full Name
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Provide your full name to help us setup your account'
          ></i>
        </label>

        <div className='row mb-2'>
          <div className='col'>
            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='firstName'
            />
            <div className='form-text'>First Name</div>
            <div className='text-danger mt-2'>
              <ErrorMessage name='firstName' />
            </div>
          </div>
          <div className='col'>
            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='middleName'
            />
            <div className='form-text'>Middle Name</div>
            <div className='text-danger mt-2'>
              <ErrorMessage name='middleName' />
            </div>
          </div>
          <div className='col'>
            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='lastName'
            />
            <div className='form-text'>Last Name</div>
            <div className='text-danger mt-2'>
              <ErrorMessage name='lastName' />
            </div>
          </div>
        </div>
      </div>

      <div className='mb-10 fv-row'>
        <label className='d-flex align-items-center form-label mb-3'>
          Login Details
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Provide a unique Username and valid Email to help you login to your account'
          ></i>
        </label>

        <div className='row mb-2'>
          <div className='col'>
            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='username'
            />
            <div className='form-text'>Username (Eg: Dav223)</div>
            <div className='text-danger mt-2'>
              <ErrorMessage name='username' />
            </div>
          </div>
          <div className='col'>
            <Field
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='username'
            />
            <div className='form-text'>Email (Eg: karo@gmail.com)</div>
            <div className='text-danger mt-2'>
              <ErrorMessage name='email' />
            </div>
          </div>
        </div>
      </div>

      <div className='mb-10 fv-row'>
        <label className='d-flex align-items-center form-label mb-3'>
          Role
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Provide a unique Username and valid Email to help you login to your account'
          ></i>
        </label>

        <div className='row mb-2'>
          <div className='col'>
            {/* begin::Input group */}
            <div className='mb-7'>
              {/* begin::Roles */}
              {/* begin::Input row */}
              <div className='d-flex fv-row'>
                {/* begin::Radio */}
                <div className='form-check form-check-custom form-check-solid'>
                  {/* begin::Input */}
                  <input
                    className='form-check-input me-3'
                    // {...formik.getFieldProps('role')}
                    name='role'
                    type='radio'
                    value='Administrator'
                    id='role_option_0'
                    // checked={formik.values.role === 'Administrator'}
                    // disabled={formik.isSubmitting || isUserLoading}
                  />

                  {/* end::Input */}
                  {/* begin::Label */}
                  <label className='form-check-label' htmlFor='role_option_0'>
                    <div className='fw-bolder text-gray-800'>Administrator</div>
                    {/*<div className='text-gray-600'>*/}
                    {/*  Best for business owners and company administrators*/}
                    {/*</div>*/}
                  </label>
                  {/* end::Label */}
                </div>
                {/* end::Radio */}
              </div>
              {/* end::Input row */}
              <div className='separator separator-dashed my-5'></div>
              {/* begin::Input row */}
              <div className='d-flex fv-row'>
                {/* begin::Radio */}
                <div className='form-check form-check-custom form-check-solid'>
                  {/* begin::Input */}
                  <input
                    className='form-check-input me-3'
                    // {...formik.getFieldProps('role')}
                    name='role'
                    type='radio'
                    value='Manager'
                    id='role_option_2'
                    // checked={formik.values.role === 'Manager'}
                    // disabled={formik.isSubmitting || isUserLoading}
                  />

                  {/* end::Input */}
                  {/* begin::Label */}
                  <label className='form-check-label' htmlFor='role_option_2'>
                    <div className='fw-bolder text-gray-800'>Manager</div>
                    {/*<div className='text-gray-600'>*/}
                    {/*  People who need full access to analytics data, but don't need to update*/}
                    {/*  business settings*/}
                    {/*</div>*/}
                  </label>
                  {/* end::Label */}
                </div>
                {/* end::Radio */}
              </div>
              {/* end::Input row */}
              <div className='separator separator-dashed my-5'></div>
              {/* begin::Input row */}
              <div className='d-flex fv-row'>
                {/* begin::Radio */}
                <div className='form-check form-check-custom form-check-solid'>
                  {/* begin::Input */}
                  <input
                    className='form-check-input me-3'
                    // {...formik.getFieldProps('role')}
                    name='role'
                    type='radio'
                    value='Supervisor'
                    id='role_option_3'
                    // checked={formik.values.role === 'Supervisor'}
                    // disabled={formik.isSubmitting || isUserLoading}
                  />
                  {/* end::Input */}
                  {/* begin::Label */}
                  <label className='form-check-label' htmlFor='role_option_3'>
                    <div className='fw-bolder text-gray-800'>Supervisor</div>
                    {/*<div className='text-gray-600'>*/}
                    {/*  Best for employees who regularly refund payments and respond to disputes*/}
                    {/*</div>*/}
                  </label>
                  {/* end::Label */}
                </div>
                {/* end::Radio */}
              </div>
              {/* end::Input row */}
              <div className='separator separator-dashed my-5'></div>
              {/* begin::Input row */}
              <div className='d-flex fv-row'>
                {/* begin::Radio */}
                <div className='form-check form-check-custom form-check-solid'>
                  {/* begin::Input */}
                  <input
                    className='form-check-input me-3'
                    // {...formik.getFieldProps('role')}
                    name='role'
                    type='radio'
                    id='role_option_4'
                    value='Data Entry'
                    // checked={formik.values.role === 'Data Entry'}
                    // disabled={formik.isSubmitting || isUserLoading}
                  />
                  {/* end::Input */}
                  {/* begin::Label */}
                  <label className='form-check-label' htmlFor='role_option_4'>
                    <div className='fw-bolder text-gray-800'>Data Entry</div>
                    {/*<div className='text-gray-600'>*/}
                    {/*  People who need to collect ad input content data, but don't need to make any*/}
                    {/*  updates*/}
                    {/*</div>*/}
                  </label>
                  {/* end::Label */}
                </div>
                {/* end::Radio */}
              </div>
              {/* end::Input row */}
              {/* end::Roles */}
            </div>
            {/* end::Input group */}
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step1}
