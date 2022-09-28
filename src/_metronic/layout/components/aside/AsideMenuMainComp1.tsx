/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItem} from './AsideMenuItem'
export function AsideMenuMainComp1() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        // to='/company/company1/entries'
        to='#'
        icon='/media/icons/duotune/general/gen051.svg'
        title='Entries'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        // to='/company/company1/reports'
        to='#'
        icon='/media/icons/duotune/general/gen051.svg'
        title='Reports'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        // to='/company/company1/setup'
        to='#'
        icon='/media/icons/duotune/general/gen051.svg'
        title='Setup'
        fontIcon='bi-layers'
      />
    </>
  )
}
