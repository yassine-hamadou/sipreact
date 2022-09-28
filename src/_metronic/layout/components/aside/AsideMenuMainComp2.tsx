/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {AsideMenuItem} from './AsideMenuItem'
export function AsideMenuMainComp2() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/company/company2/entries'
        icon='/media/icons/duotune/general/gen051.svg'
        title='Entries'
        fontIcon='bi-layers'
      />
    </>
  )
}
