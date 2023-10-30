import { ChangeEventHandler, FC, ForwardedRef } from "react";

interface InputProps {
    id?: string;
    label?: string;
    message?: string;
    disabled?: boolean;
    placeholder?: string;
    primary: boolean;
    error: boolean;
    success: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    currentClass?: string;
  }

const successClass = 'bg-sucess-100 border-1 border-sucess-400'
const dangerClass = 'bg-danger-100 border-1 border-danger-400'
const primaryClass = 'bg-darky-100 border-1 border-transparent focus: border-primary-400'



const Input = (props: InputProps) => {
    if(props?.primary) {
        props.currentClass = primaryClass;
    } else if (props?.error) {
        props.currentClass = dangerClass;
    } else if (props?.success) {
        props.currentClass = successClass;
    }
    return (
    <div className='w-full h-auto flex flex-col items-start justify-around'>
        <label className='p-3 text-darky'> { props?.label } </label>
        <input
          onChange={props?.onChange}
          disabled={props?.disabled}
          placeholder={props?.placeholder}
          className={`py-4 px-5 border-1 + ${props?.currentClass}`}
        />
    </div>
    )
}


export default Input;