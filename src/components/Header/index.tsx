import theme from '@/utils/theme';
import Logo from '@/assets/images/logo.svg';
import LayoutContainer from '@/components/Layout/LayoutContainer';

function Header() {
  return (
    <header className='header'>
      <LayoutContainer>
        <img src={Logo} alt='logo' />
      </LayoutContainer>
      <style jsx>
        {`
          .header {
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            padding: 16px;
            border-bottom: 1px solid ${theme.colors.grey};
            background: ${theme.colors.white};
            z-index: 2;
          }
        `}
      </style>
    </header>
  );
}

export default Header;
