import { Component, PropsWithChildren } from 'react'

import {
  Button,
} from '@shared'
import { Layout } from '@/layouts/Layout'

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
      return (
        <Layout>
          <section className='container mx-auto flex flex-col items-center my-20'>
            <h2 className='text-zinc-500 font-semibold text-6xl'>500</h2>
            <h3 className='text-zinc-500 font-semibold text-4xl mt-5'>Internal Error!</h3>
            <p className='text-zinc-500 mt-5'>
              Something went wrong on our side!
            </p>
            {/* use a instead of Link to trigger a reload */}
            <a href='/'>
              <Button className='uppercase mt-5 px-5'>
                Go back to the homepage
              </Button>
            </a>
          </section>
        </Layout>
      )
    }

    return children
  }
}
