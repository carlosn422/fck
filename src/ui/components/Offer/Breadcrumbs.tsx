import { colors, fonts } from 'css/variables'
import * as React from 'react'
import { css } from 'react-emotion'

import BreadcrumbsArrow from '../../svg-icons/breadcrumb.svg'

interface Entry {
  title: string
  onClick: () => void
}

interface Props {
  current: Entry
  parents: Entry[]
}

const breadcrumbsContainerCss = css`
  display: flex;
`
const breadcrumbContainerCss = css`
  margin-right: 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:last-child {
    margin-right: 0;
  }
  display: inline-block;
`
const breadcrumbCss = css`
  ${fonts.nav};
`

const breadcrumbSelectedCss = css`
  ${breadcrumbCss}
  color: ${colors.primaryGray};
  font-weight: bold;
  cursor: initial;
`

const breadcrumbImageCss = css`
  width: 1rem;
  height: 0.45rem;
  margin-left: 0.2rem;
  path {
    fill: ${colors.standardBlack};
    stroke-width: 4px;
    stroke-dasharray: 2, 2;
    stroke-linejoin: round;
  }
`

const Breadcrumbs: React.SFC<Props> = ({ current, parents }) => {
  const maxWidth = `${100 / (parents.length + 1) / 1.2}%`
  const parentEls = parents.reverse().map((parent, i) => (
    <div
      key={parent.title}
      style={{ maxWidth }}
      className={breadcrumbContainerCss}
    >
      <a onClick={parent.onClick} className={breadcrumbCss}>
        {parent.title}
      </a>
      {parents.length > 0 && (
        <BreadcrumbsArrow className={breadcrumbImageCss} />
      )}
    </div>
  ))
  return (
    <article className={breadcrumbsContainerCss}>
      {parentEls}
      <div style={{ maxWidth }} className={breadcrumbContainerCss}>
        <a
          onClick={current.onClick}
          key={current.title}
          className={breadcrumbSelectedCss}
        >
          {current.title}
        </a>
      </div>
    </article>
  )
}
export default Breadcrumbs
