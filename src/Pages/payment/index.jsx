import React, { useState } from "react";
import Razorpay from "razorpay";

// declare global {
//   interface Window{
//     Razorpay;
//   }
// }

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID!,
//     key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

export default function Payment() {
  const AMOUNT = 100; //constant amount in INR
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePAyment = async () => {
    setIsProcessing(true);

    try {
      //   Create Order
      const response = await fetch("/api/create-order", { method: "POST" });
      const data = await response.json();

      //   Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT * 100,
        currency: "INR",
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: data.orderId,
        handler: function (reaponse) {
          console.log("payment successful", reaponse);
          //   Handle successful payment (e.g., update UI, send to server)
        },
        prefill: {
          name: "john Doe",
          email: "johndoe@example.com",
          conatact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (e) {
      console.error("payment failed", e);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className={
        "flex flex-col items-center justify-center min-h-screen bg-gray-100"
      }
    >
      {/*<Script src={"https://checkout.razorpay.com/v1/checkout.js"} />*/}
      <div className={"p-6 bg-white rounded-lg shadow-md"}>
        <h1 className={"text-2xl font-bold mb-4"}>Payment Page</h1>
        <p className={"mb-4"}>Amount to pay: {AMOUNT} INR</p>
        <button
          onClick={handlePAyment}
          disabled={isProcessing}
          className={
            "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          }
        >
          {isProcessing ? "Processing..." : "pay Now"}
        </button>
      </div>
    </div>
  );
}
