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

  static getDerivedStateFromError(error: Error): State {
    console.log(error.message)
    return {
      hasError: true,
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>
    }
    
    return this.props.children
  }
}