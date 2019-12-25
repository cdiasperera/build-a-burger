import React, { Component } from 'react'

import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentDidMount = () => {
      axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req
      })
      axios.interceptors.response.use(res => res, error => {
        console.log(error)
        this.setState({ error: error })
      })
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
