import { memo } from 'react';

interface TextAreaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  classNames?: string;
  name?: string;
  id?: string;
  rows?: number;
}
const TextArea = ({
  onChange,
  value,
  placeholder,
  required = false,
  autoComplete = 'off',
  classNames,
  name,
  id,
  rows = 4,
}: TextAreaProps) => {
  return (
    <textarea
      id={id}
      rows={rows}
      name={name}
      onChange={onChange}
      className={` ${classNames}block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
    />
  );
};

export default memo(TextArea);
