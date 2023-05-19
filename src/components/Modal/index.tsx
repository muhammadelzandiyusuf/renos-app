import { ReactNode, useEffect, useRef } from 'react';
import theme from '@/utils/theme';
import useOnClickOutside from '@/utils/hooks/useOnClickOutside';

type ModalProps = {
  isShow: boolean,
  titleHeader: ReactNode;
  onClose: () => void;
  contentBody: ReactNode;
  contentFooter: ReactNode;
}

function Modal({ isShow, titleHeader, onClose, contentBody, contentFooter }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, onClose);

  useEffect(() => {
    if (isShow) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isShow]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if(e.keyCode === 27){
        onClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  },[onClose])

  return (
    <div className='overlay'>
      <div className='card' ref={modalRef}>
        <div className='card-header'>
          {titleHeader}
          <span onClick={onClose}>x</span>
        </div>
        <div className='card-body'>
          {contentBody}
        </div>
        <div className='card-footer'>
          {contentFooter}
        </div>
      </div>
      <style jsx>
        {`
          .overlay {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(51, 57, 56, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: ${isShow ? 3 : -1};
            opacity: ${isShow ? 1 : 0};
            visibility: ${isShow ? 'visible' : 'hidden'};
            transition: opacity 0.2s ease-in-out;
          }
          .card {
            position: relative;
            width: 768px;
            max-width: 95%;
            height: auto;
            max-height: 95%;
            border-radius: 4px;
            background-color: ${theme.colors.white};
            z-index: ${isShow ? 4 : -1};
            overflow: hidden;
          }
          .card-header {
            padding: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid ${theme.colors.grey};
            font-size: 24px;
            font-weight: 600;
          }
          .card-header span {
            color: ${theme.colors.pearl};
            font-weight: 700;
            cursor: pointer;
          }
          .card-body {
            height: auto;
            max-height: 300px;
            overflow-y: scroll;
            overflow-x: hidden;
            padding: 36px 36px;
            line-height: 22px;
            font-size: 16px;
          }
          .card-footer {
            padding: 12px 24px;
            border-top: 1px solid ${theme.colors.grey};
          }

          @media only screen and (max-width: ${theme.screenSize.tablet.large})  {
            .card-header {
              font-size: 18px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Modal;
