import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor (props) {
      super(props)

      this.state = {
        error: null,
        interceptors: {}
      }

      const reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req
      })
      const resInterceptor = axios
        .interceptors.response.use(res => res, error => {
          console.log(error)
          this.setState({ error: error })
        })

      const interceptors = { req: reqInterceptor, res: resInterceptor }
      this.interceptors = interceptors
    }

    componentWillUnmount = () => {
      axios.interceptors.request.eject(this.state.interceptors.req)
      axios.interceptors.response.eject(this.state.interceptors.res)
    }

    clearError = () => {
      this.setState({ error: null })
    }

    render = () => {
      return (
        <>
          <Modal show={this.state.error} removeBackdrop={this.clearError}>
            <p>{this.state.error ? this.state.error.message : null}</p>
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

export default withErrorHandler
