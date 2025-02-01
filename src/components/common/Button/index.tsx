import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
}

const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button {...rest} className={classNames('cursor-pointer', className)}>
      {children}
    </button>
  );
};

export default Button;
