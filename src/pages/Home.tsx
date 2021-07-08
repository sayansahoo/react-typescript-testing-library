import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import { css } from 'linaria';

import ErrorBoundary from '../components/ErrorBoundary';
import TestError from '../components/TestError';

const titleStyle = css`
  color: red;
`;

const Home: React.FC<RouteComponentProps> = (): JSX.Element => {
  return (
    <section data-testid="welcome">
      <h1 className={titleStyle}>Welcome!</h1>
      <Link data-testid="link" to="/about">Go to about</Link>

      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>
    </section>
  );
};

export default Home;
