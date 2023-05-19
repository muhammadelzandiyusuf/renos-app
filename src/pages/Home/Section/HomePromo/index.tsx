import LayoutContainer from '@/components/Layout/LayoutContainer';
import theme from '@/utils/theme';
import promo1 from '@/assets/images/promo-1.jpg';
import promo2 from '@/assets/images/promo-2.jpg';
import promo3 from '@/assets/images/promo-3.jpg';
import promo4 from '@/assets/images/promo-4.jpg';

function HomePromo() {
  return (
    <section>
      <div className='promo'>
        <LayoutContainer>
          <h2>Promo spesial untukmu</h2>
          <div className='promo-list'>
            <div className='promo-list-wrapper'>
              <img src={promo1} alt='promo1' />
            </div>
            <div className='promo-list-wrapper'>
              <img src={promo2} alt='promo2' />
            </div>
            <div className='promo-list-wrapper'>
              <img src={promo3} alt='promo3' />
            </div>
            <div className='promo-list-wrapper'>
              <img src={promo4} alt='promo4' />
            </div>
          </div>
        </LayoutContainer>
        <style jsx>
          {`
            .promo {
              padding: 60px 0;
              background: ${theme.colors.background};
            }
            .promo h2 {
              font-size: 36px;
              font-weight: 700;
            }
            .promo-list {
              position: relative;
              margin-top: 36px;
              display: flex;
              gap: 24px;
            }
            .promo-list-wrapper {
              width: 25%;
            }
            .promo-list-wrapper:hover {
              box-shadow: rgb(0 0 0 / 10%) 0 4px 20px;
            }
            .promo-list-wrapper img {
              width: 100%;
            }

            @media only screen and (max-width: ${theme.screenSize.tablet.large}) {
              .promo {
                padding: 36px 0;
              }

              .promo h2 {
                font-size: 24px;
              }
            }

            @media only screen and (max-width: ${theme.screenSize.tablet.small}) {
              .promo-list {
                flex-direction: column;
              }

              .promo-list-wrapper {
                width: 100%;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}

export default HomePromo;
