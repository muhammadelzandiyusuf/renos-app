import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type LayoutProps = {
  children: ReactNode
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className='layout-content'>
        {children}
      </div>
      <Footer />
      <style jsx>
        {`
          .layout-content {
            padding-top: 62px;
          }
        `}
      </style>
    </div>
  );
}

export default Layout;
