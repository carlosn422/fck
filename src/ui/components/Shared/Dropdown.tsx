import * as React from 'react'
import { css } from 'react-emotion'
import { colors } from 'css/variables'
import {
  clickOutsideWrapper,
  InjectedProps
} from 'components/Shared/ClickOutsideWrapper'

export interface DropdownItem {
  label: string
  value: string
}
interface DropdownProps {
  collection: DropdownItem[]
  selectedItem?: DropdownItem
  onSelect: (item: DropdownItem) => any
  className?: string
}

const selectionContainerCss = css`
  display: inline-block;
  min-width: 5rem;
  position: relative;
  background: ${colors.colorGrayStandard};
`

const selectionLabelCss = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
`

const arrows = {
  arrowUp: css`
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-bottom: 5px solid black;
    position: absolute;
    right: 0.375rem;
  `,

  arrowDown: css`
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid black;
    position: absolute;
    right: 0.375rem;
  `
}

const selectionCopyCss = css`
  margin: 0 auto;
`
const selectionDropdown = css`
  position: absolute;
  width: 100%;
  z-index: 1;
  /* top: 2rem; */
`
const selectionItemCss = css`
  padding: 0.5rem;
  background: ${colors.colorGrayStandard};
  text-align: center;

  :hover {
    background: ${colors.secondaryGray};
  }

  cursor: pointer;
  user-select: none;
`

const selectionItems = (collection, onSelect) => (
  <ul className={selectionDropdown}>
    {collection.map((item: any) => (
      <li
        className={selectionItemCss}
        key={item.value}
        onClick={() => onSelect(item)}
      >
        {item.label}
      </li>
    ))}
  </ul>
)

const DropdownComponent: React.SFC<DropdownProps & InjectedProps> = ({
  collection,
  selectedItem,
  onSelect,
  className,
  isOpen,
  toggleIsOpen,
  wrapperRef
}) => {
  const onSelection = item => {
    onSelect(item)
    toggleIsOpen()
  }
  const selectionItemsComponent = isOpen
    ? selectionItems(collection, onSelection)
    : undefined
  return (
    <section
      className={`${selectionContainerCss} ${className ? className : ''}`}
      ref={wrapperRef}
    >
      <div className={selectionLabelCss} onClick={toggleIsOpen}>
        <div className={selectionCopyCss}>
          {selectedItem ? selectedItem.label : 'Select'}
        </div>
        <div className={isOpen ? arrows.arrowUp : arrows.arrowDown} />
      </div>

      {selectionItemsComponent}
    </section>
  )
}
export const Dropdown = clickOutsideWrapper(DropdownComponent)
