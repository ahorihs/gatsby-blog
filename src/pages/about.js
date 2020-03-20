import React from 'react';
import { Link } from 'gatsby'; // allows instant refresh on navigation
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>
      I'm working on this site to learn Gatsby. It was forked from Jason
      Lengstorf's Gatsby workshop on Frontend Masters.
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
