

interface CustomInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  error: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  type = "text",
  placeholder = "",
  error,
  defaultValue = "",
}) => {

  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        {label}
      </label>
      <div className="relative">

            <div>
              <input
              placeholder = {placeholder}
                defaultValue = {defaultValue}
                type={type}
                className={`
                  py-3 px-4 block w-full ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded-lg bg-gray-200 text-sm
                  focus:${
                    error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-500 focus:ring-gray-500"
                  } dark:bg-neutral-800
                  dark:border-neutral-700 dark:text-neutral-400
                `}
                aria-describedby={`${name}-helper`}
              />
                {/* <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                  {icon}
                </div> */}
            </div>
            
              {error && (
                <p className="text-sm text-red-600 mt-2" id={`${name}-helper`}>
                  {/* {error || "Please enter a valid value."} */}
                </p>
        
     
          )}
    
      </div>
    </div>
  );
};

export default CustomInput;
