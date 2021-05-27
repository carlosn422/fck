import * as React from 'react'

import { shareStyles } from './styles'
import {
  clickOutsideWrapper,
  InjectedProps
} from 'components/Shared/ClickOutsideWrapper'
import { confirmationStyles } from 'components/Confirmation/styles'

export interface Props {
  url: string
}

const Share: React.SFC<Props & InjectedProps> = ({
  url,
  toggleIsOpen,
  isOpen,
  wrapperRef
}) => {
  return (
    <div ref={wrapperRef}>
      <button className={confirmationStyles.ctaCss} onClick={toggleIsOpen}>
        SHARE THE LINK
      </button>

      {isOpen && (
        <article className={shareStyles.container}>
          <div className={shareStyles.title}>
            Share Links, Grow your group and
            <br /> Get Rewards
          </div>

          <section className={shareStyles.inputContainer}>
            <input
              id="share-input"
              className={shareStyles.input}
              readOnly={true}
              value={url}
              style={{ pointerEvents: `none` }}
            />
            <button
              className={shareStyles.button}
              onClick={e => {
                e.preventDefault()
                const copyText = document.getElementById('share-input')
                if (copyText) {
                  // @ts-ignore
                  copyText.select()
                  document.execCommand('Copy')
                }
                toggleIsOpen(e)
              }}
            >
              COPY
            </button>
          </section>
          <section className={shareStyles.socialContainer}>
            <button
              className={shareStyles.socialButton}
              style={{
                background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/social/fb%402x.png)
                no-repeat center`,
                backgroundSize: 'cover'
              }}
            />
            <button
              className={shareStyles.socialButtonTwitter}
              style={{
                // tslint:disable-next-line:max-line-length
                background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/social/messenger%402x.png)
                no-repeat center`,
                backgroundSize: 'cover'
              }}
            />
            <button
              className={shareStyles.socialButton}
              style={{
                // tslint:disable-next-line:max-line-length
                background: `url(https://s3.amazonaws.com/fevo-fuc/assets-demo/images/social/tweet%402x.png) no-repeat center`,
                backgroundSize: 'cover'
              }}
            />
          </section>
          <section>
            <div className={shareStyles.sendInviteTitle}>
              {' '}
              Or send them invite{' '}
            </div>
            <section className={shareStyles.inputContainer}>
              <input
                className={shareStyles.input}
                placeholder="Enter emails, separated by commas"
              />
              <button className={shareStyles.button}>SEND</button>
            </section>
          </section>
        </article>
      )}
    </div>
  )
}

export default clickOutsideWrapper(Share)
