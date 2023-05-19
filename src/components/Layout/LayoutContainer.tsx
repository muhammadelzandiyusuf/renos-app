import { ReactNode } from 'react';

type LayoutContainerProps = {
  children?: ReactNode;
  maxWidth?: string;
};

export const layoutContainerWidth = 1180;
export const layoutContainerPaddingX = 20;

export default function LayoutContainer({ children, maxWidth }: LayoutContainerProps) {
  return (
    <section className='container'>
      <div className='container-content'>{children}</div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
          }
          .container-content {
            width: 100%;
            max-width: ${maxWidth ?? `${layoutContainerWidth}px`};
            padding-left: ${layoutContainerPaddingX}px;
            padding-right: ${layoutContainerPaddingX}px;
          }
        `}
      </style>
    </section>
  );
}
