import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/verify-payment?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo(res.data);
        });
    }
  }, [sessionId, axiosSecure]);
  console.log(paymentInfo);
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-4">
        Your payment has been successful
      </h2>
      <p>Your tracking id : {paymentInfo?.isPaymentExist?.trackingId}</p>
      <p>Your transaction id : {paymentInfo?.isPaymentExist?.transactionId}</p>
    </div>
  );
};

export default PaymentSuccess;
