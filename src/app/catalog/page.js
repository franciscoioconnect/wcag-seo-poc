import CatalogComponent from '@/components/catalog-component';
import Layout from '@/components/layout';
import React from 'react';

const page = () => {
  return (
    <Layout>
      <main>
        <CatalogComponent />
      </main>
    </Layout>
  );
};

export default page;
