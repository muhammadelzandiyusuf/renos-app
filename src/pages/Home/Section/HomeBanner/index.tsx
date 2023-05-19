import Banner from '@/assets/images/banner.jpg';
import LayoutContainer from '@/components/Layout/LayoutContainer';
import theme from '@/utils/theme';
import Button from '@/components/Button';

type HomeBannerProps = {
  onShowModal: () => void;
};

function HomeBanner({ onShowModal }: HomeBannerProps) {
  return (
    <section>
      <div className='banner'>
        <div className='banner-content'>
          <div className='banner-content-wrapper'>
            <LayoutContainer>
              <div className='banner-title'>
                <h1>Living Home</h1>
                <p>Marketplace Indonesia</p>
              </div>
              <Button
                type='button'
                variant='secondary'
                onClick={onShowModal}
              >
                Bergabung Dengan Kami
              </Button>
            </LayoutContainer>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .banner {
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center top;
            min-height: 520px;
            background-image: url(${Banner});
          }
          .banner-content {
            max-width: 100%;
            position: absolute;
            inset: 0;
            margin: auto;
          }
          .banner-content-wrapper {
            padding: 0 20px;
            max-width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .banner-content-wrapper h1 {
            font-size: 72px;
            font-weight: 700;
            color: ${theme.colors.white};
          }
          .banner-content-wrapper p {
            font-size: 18px;
            color: ${theme.colors.white};
          }
          .banner-title {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 24px;
          }

          @media only screen and (max-width: ${theme.screenSize.tablet.large})  {
            .banner {
              background-position: 14% top;
            }

            .banner-content {
              inset: unset;
              bottom: 48px;
            }

            .banner-content-wrapper h1 {
              font-size: 36px;
            }

            .banner-content-wrapper p {
              font-size: 14px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default HomeBanner;
