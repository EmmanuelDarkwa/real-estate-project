import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

const ThankYou = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });
  const price = state.paymentAmount;
  return (
    <div className="bg-gray-100 py-40 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Thank You for Purchasing a Property
        </h1>
        <p className="mb-4">
          Thank you for choosing Homeland for your property purchase. We
          appreciate your business.
        </p>

        <div className="mb-4">
          <p className="text-lg">
            Total Amount Paid: <span className="font-bold">GH₵{price}.00</span>
          </p>
          ;
          <p className="text-sm text-gray-600">
            Order Confirmation Number: <span className="font-bold">{v4()}</span>
          </p>
        </div>

        <p className="mb-4">
          An email with your receipt will be sent to you shortly.
        </p>

        <p className="text-gray-600">
          If you have any questions or need further assistance, please contact
          our customer support.
        </p>

        <Link
          to="/"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
