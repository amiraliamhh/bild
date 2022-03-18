import { Component, PropsWithChildren } from 'react'

interface State {
  hasError: boolean
}

type Props = PropsWithChildren<{}>

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return <h1>Error</h1>
    }

    return children
  }
}
