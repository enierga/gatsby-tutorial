import React from 'react';

function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
