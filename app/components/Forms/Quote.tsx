import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendQuote } from "@/app/utils/handleSend";
import * as Icon from 'react-icons/lu';
import Input from "../form/Form";

export type QuoteData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
};

export const Quote: FC = () => {
    const { register, handleSubmit } = useForm<QuoteData>();
    const [isSent, setIsSent] = useState(false);        
    function onSubmit(data: QuoteData) {  
      sendQuote(data);
      setIsSent(true);
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label> fuck </label>
            <input
             {...register("name", { required: true })}
             />
    </form>
  )
};
