import React from 'react';
import Layout from '@/components/layout';
import ClimbersComponent from '@/components/climbers-component';

const page = () => {
  return (
    <Layout>
      <main>
        <ClimbersComponent />
      </main>
    </Layout>
  );
};

export default page;

