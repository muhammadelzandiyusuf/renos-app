import theme from '@/utils/theme';
import LayoutContainer from '@/components/Layout/LayoutContainer';

function Footer(){
  return (
    <footer>
      <LayoutContainer>
        <p>@2022 Renos.id</p>
      </LayoutContainer>

      <style jsx>
        {`
          footer {
            width: 100%;
            border-top: 1px solid ${theme.colors.grey};
            background: ${theme.colors.white};
            text-align: center;
            padding: 24px 0;
          }

          footer p {
            font-size: 16px;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
