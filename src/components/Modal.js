import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, post }) => {
  const navigate = useNavigate("");
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      } transition-opacity duration-300 ease-in-out`}>
      <div className="modal-overlay fixed inset-0 bg-black opacity-60 z-40"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Purchase Confirmation</p>
            <button onClick={onClose} className="modal-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="my-4">
            <div className="my-4">
              <p>
                You are about to make an annual rent payment for the property
                for ₵{post.propertyInfo.price}.00 . Making payment means you
                have made inspections with the owner and you are okay with the
                property. If you haven't Homeland can schedule a meeting with
                you and the house owner to check out the property by contacting
                us.
              </p>
              <p className="mt-4">
                <a
                  href="#contact"
                  className="text-blue-500 underline hover:text-blue-700">
                  Contact us
                </a>
              </p>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={onClose}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Cancel
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => {
                    navigate("/payment");
                  }}>
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
