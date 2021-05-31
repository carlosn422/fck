import * as React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ContextBroadcast } from './context'

const CurrentRoute: React.SFC<any> = ({ routes }) => {

  const context: any = { states: routes }

  return (
    <ContextBroadcast value={context}>
      <Router>
          {
            routes.map((route, index) => {
              return (
                <Route 
                  key={index}
                  path={route.url}
                  exact={true}
                  component={route.component}
                />
              )
            })
          }
        </Router>
    </ContextBroadcast>
  )
}

export default CurrentRoute
