interface ContactFormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ContactFormInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
}: ContactFormInputProps) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        required={required}
        type={type}
        name={name}
        id={name}
        className="block w-full rounded-md border-0 py-1.5 pl-4 md:pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ContactFormInput;
