import * as React from 'react'
import { secondaryButton } from 'css/buttons'
import { css } from 'react-emotion'
import { colors } from 'css/variables'

const eventItemAdjustCss = css`
  display: flex;
  padding: 0.25rem 0;

  user-select: none;
  align-items: center;
  justify-content: flex-end;
`
const adjustButtonCss = css`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  line-height: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: ${colors.brandColor};
  color: white;
  :disabled {
    background: ${colors.disabledGray};
  }
`

const selectedQuantityCss = css`
  margin: 0.25rem 0.25rem;
  min-width: 1.5rem;
  text-align: center;
`
interface QuantityAdjustProps {
  onAdd: () => any
  onRemove: () => any
  removeButtonDisabled: boolean
  addButtonDisabled: boolean
  quantity: number
  className?: String
}
/**
 * @component
 */
export const QuantityAdjust: React.SFC<QuantityAdjustProps> = ({
  onAdd,
  onRemove,
  removeButtonDisabled,
  addButtonDisabled,
  quantity,
  className
}) => (
  <section className={`adjust-container ${className}`}>
    <div className={eventItemAdjustCss}>
      <button
        disabled={removeButtonDisabled}
        className={`${adjustButtonCss} event-item__decrease`}
        onClick={onRemove}
      >
        -
      </button>
      <div className={selectedQuantityCss}>{quantity}</div>
      <button
        className={`${adjustButtonCss} event-item__increase`}
        onClick={onAdd}
      >
        +
      </button>
    </div>
  </section>
)
