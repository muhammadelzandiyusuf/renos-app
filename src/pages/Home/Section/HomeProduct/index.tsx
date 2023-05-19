import LayoutContainer from '@/components/Layout/LayoutContainer';
import theme from '@/utils/theme';
import product1 from '@/assets/images/product-1.jpg';
import product2 from '@/assets/images/product-2.jpg';
import product3 from '@/assets/images/product-3.jpg';
import product4 from '@/assets/images/product-4.jpg';
import product5 from '@/assets/images/product-5.jpg';

function HomeProduct() {
  return (
    <section>
      <div className='product'>
        <LayoutContainer>
          <h2>Rekomendasi untuk kamu</h2>
          <div className='product-list'>
            <div className='product-list-wrapper product-hover'>
              <img src={product1} alt='product1' />
            </div>
            <div className='product-list-wrapper'>
              <div className='product-related mb-22'>
                <div className='product-list-wrapper product-hover'>
                  <img src={product2} alt='product2' />
                </div>
                <div className='product-list-wrapper product-hover'>
                  <img src={product3} alt='product3' />
                </div>
              </div>
              <div className='product-related'>
                <div className='product-list-wrapper product-hover'>
                  <img src={product4} alt='product2' />
                </div>
                <div className='product-list-wrapper product-hover'>
                  <img src={product5} alt='product3' />
                </div>
              </div>
            </div>
          </div>
        </LayoutContainer>
      </div>
      <style jsx>
        {`
          .product {
            padding: 60px 0;
          }
          .product h2 {
            font-size: 36px;
            font-weight: 700;
          }
          .product-list {
            position: relative;
            margin-top: 36px;
            display: flex;
            gap: 24px;
          }
          .product-list-wrapper {
            width: 50%;
          }
          .product-list-wrapper img {
            width: 100%;
          }
          .product-related {
            display: flex;
            gap: 24px;
          }
          .mb-22 {
            margin-bottom: 22px;
          }
          .product-hover:hover{
            box-shadow: rgb(0 0 0 / 10%) 0 4px 20px;
          }

          @media only screen and (max-width: ${theme.screenSize.tablet.large}) {
            .product {
              padding: 36px 0;
            }

            .product h2 {
              font-size: 24px;
            }
          }

          @media only screen and (max-width: ${theme.screenSize.tablet.small}) {
            .product-list {
              flex-direction: column;
            }

            .product-list-wrapper {
              width: 100%;
            }

            .product-related{
              flex-direction: column;
            }
          }
        `}
      </style>
    </section>
  );
}

export default HomeProduct;
