const FormField = ({ label, id, type = "text", name, placeholder, required, as = "input", // "input" or "textarea"
...rest
}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-1">
      {label}
      {required && ' *'}
    </label>
    {as === "textarea" ? (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        {...rest}
        className="p-4 rounded-xl bg-transparent border border-[#0077B6] focus:border-2 min-h-40 resize-y font-inter transition-colors duration-300"
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        {...rest}
        className="p-4 rounded-xl bg-transparent border border-[#0077B6] focus:border-[2px] transition-colors duration-300"
      />
    )}
  </div>
);

export default FormField;

// Form field could either be an input or textarea