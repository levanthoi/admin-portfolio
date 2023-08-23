import { notification } from 'antd';
import { Component, ReactElement } from 'react';

class ErrorBoundary extends Component<{
  children: ReactElement;
  fallback: ReactElement;
}> {
  state = {
    hasError: false,
  };

  componentDidMount(): void {
    addEventListener(
      'error',
      (err) => {
        notification.error({
          message: 'ErrorBoundary ===> ' + err.message,
        });
      },
      false,
    );
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, errMsg: error };
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    return hasError ? fallback : children;
  }
}

export default ErrorBoundary;
