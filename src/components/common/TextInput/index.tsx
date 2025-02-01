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
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
          {startIcon}
        </div>
      )}
      <input
        className={classNames(
          'bg-white border border-gray-300 font-normal text-gray-800 text-md rounded-lg focus:outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 transition-all duration-100 ease-linear pl-10 placeholder:text-gray-500 placeholder:text-sm',
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
