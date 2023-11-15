import * as React from 'react'

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
    href?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    label?: string;
    icon?: string;
    size?: "sm" | "md" | "lg";
    type?: ButtonType;
}



const Button = (props: ButtonProps) => {
    return (
        <div>
        { props?.size == 'md' && (
            <button
            className='flex items-center justify-between py-4 px-5 bg-primary text-white border border-b-4 border-primary-800 rounded-lg shadow-md hover:shadow-lg transition ease-in-out font-semibold'>
                { props?.label }
                { props?.icon && (
                    <div className='ml-2'>
                        { props?.children }
                    </div> )
               }
            </button>
        )} {
            props?.size == 'lg' && (
                <button 
                className='flex items-center justify-between py-6 px-8 bg-primary text-white border border-b-4 border-primary-700 rounded-lg shadow-lg hover:shadow-xl transition ease-in-out font-semibold'>
                    { props?.label }
                    { props?.icon && (
                    <div className='ml-2'>
                        { props?.children }
                    </div> )
               }
                </button>
            )
        }
        </div>
    )
}

export default Button;