import React from 'react';
import Layout from '@/components/layout';
import HerbsComponent from '@/components/herbs-component';

const page = () => {
  return (
    <Layout>
      <main>
        <HerbsComponent />
      </main>
    </Layout>
  );
};

export default page;

