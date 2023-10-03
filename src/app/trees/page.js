import React from 'react';
import Layout from '@/components/layout';
import TreesComponent from '@/components/trees-component';

const page = () => {
  return (
    <Layout>
      <main>
        <TreesComponent />
      </main>
    </Layout>
  );
};

export default page;

