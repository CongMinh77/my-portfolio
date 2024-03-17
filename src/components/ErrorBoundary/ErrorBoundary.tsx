import React from "react"

export declare type ErrorFallbackProps = {
  error?: Error
}

interface IProps {
  fallback: React.ComponentType<ErrorFallbackProps>
  children?: React.ReactNode
}

interface IStates {
  hasError: boolean
  error?: Error
}
export default class ErrorBoundary extends React.Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      hasError: false,
      error: undefined
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: error
    }
  }

  render() {
    const { fallback: Component, children } = this.props
    if (this.state.hasError) {
      return <Component error={this.state.error} />
    }

    return children
  }
}
