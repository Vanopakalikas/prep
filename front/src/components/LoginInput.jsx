export const InputField = ({  type, name, placeholder }) => {
    return (
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            className="w-full h-8 flex items-center px-4 gap-4 bg-gray-100 border border-gray-300 rounded-md p-2"
            onChange={ (e) => console.log(e.target.value)} />
    )
}