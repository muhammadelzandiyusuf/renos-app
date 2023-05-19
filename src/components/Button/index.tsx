import { ReactNode } from 'react';
import theme from '@/utils/theme';

interface ViewProps {
  children: string | ReactNode;
  type: 'submit' | 'button';
  onClick?: () => void;
  variant: 'primary' | 'secondary';
}

function Button({ children, type, onClick, variant }: ViewProps) {
  return (
    <button type={type} className='button' onClick={onClick}>
      {children}

      <style jsx>
        {`
          .button {
            background-color: ${variant === 'primary' ? theme.colors.primary : theme.colors.white};
            color: ${variant === 'primary' ? theme.colors.white : theme.colors.black};
            border: 1px solid ${variant === 'primary' ? theme.colors.primary : theme.colors.white};
            padding: 12px 16px;
            border-radius: 4px;
            text-transform: capitalize;
            font-weight: 600;
            font-size: 16px;
            outline: none;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </button>
  );
}

export default Button;
