import client from './Apollo'
import { states } from './states'
import * as React from 'react'
import ApolloProvider from 'react-apollo/ApolloProvider'
import CurrentRoute from 'router/CurrentRoute'


class RenderForcer extends React.Component {
  componentWillMount() {
    this.forceUpdate()
  }

  render() {
    return this.props.children
  }
}

const App: React.SFC<{}> = () => {
  const apolloProvider = () => {
    return (
      // @ts-ignore
      <ApolloProvider client={client}>
        <CurrentRoute routes={states} />
      </ApolloProvider>
    )
  }

  return <RenderForcer>{apolloProvider()}</RenderForcer>
}

export default App
