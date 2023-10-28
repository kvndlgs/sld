export default function Button({label, icon, size, children, type}: {type: any, label: string, icon: string,  size: string, children: any}){
    return (
        <div>
        { size == 'md' && (
            <button type={type}
            className='flex items-center justify-between py-3 px-5 bg-primary text-white border border-b-4 border-primary-700 rounded-md shadow-md hover:shadow-lg transition ease-in-out font-semibold'>
                { label }
                { icon && (
                    <div className='ml-3'>
                        { children }
                    </div> )
               }
            </button>
        )} {
            size == 'lg' && (
                <button type={type} 
                className='flex items-center justify-between py-5 px-8 bg-primary text-white border border-b-4 border-primary-700 rounded-md shadow-lg hover:shadow-xl transition ease-in-out font-semibold'>
                    { label }
                    { icon && (
                    <div className='ml-3'>
                        { children }
                    </div> )
               }
                </button>
            )
        }
        </div>
    )
}