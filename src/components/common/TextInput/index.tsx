import { ChangeEventHandler, InputHTMLAttributes } from 'react';

import classNames from 'classnames';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  startIcon?: React.ReactNode;
}

const TextInput = (props: TextInputProps) => {
  const { className, value, onChange, startIcon, ...rest } = props;

  return (
    <div className="relative">
      {startIcon && (
        <div className="absolute-vertical-center left-3">{startIcon}</div>
      )}
      <input
        className={classNames(
          'input-base input-focus transition-linear',
          className,
        )}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
