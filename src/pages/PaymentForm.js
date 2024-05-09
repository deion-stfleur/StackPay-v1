import React, {useState} from 'react'
import {
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const PAYMENT_SUCESS_URL = "http://localhost:3000/success";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();


    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
 
        setIsLoading(true);
        setMessage("Payment in Progress");
 
        const resp = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: PAYMENT_SUCESS_URL,
            },
        });
 
        if (resp.error) setMessage("Some Error Occurred !!");
        setIsLoading(false);
    };

    return (
         <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                       
                        <PaymentElement />
                        <div>
                            <button
                                
                                disabled={isLoading || !stripe || !elements}
                            >
                                {isLoading ? "Loading..." : "Pay now"}
                            </button>
                        </div>
                        {message && <div>{message}</div>}
                    </div>
                </div>
            </form>
        </div>
    )
}


export default PaymentForm;