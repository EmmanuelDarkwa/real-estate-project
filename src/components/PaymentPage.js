import React, { useState } from "react";
import { BiAt, BiSolidPhone, BiSolidUser } from "react-icons/bi";
import { PaystackButton } from "react-paystack";

const PaymentPage = () => {
  const publicKey = "pk_test_9688edb2f206cf707b0276dac5e09819817d7e77";
  const price = 1000;
  const amount = price * 100;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    currency: "GHs",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Make Payment",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Confirm Purchase
        </h1>
        <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">GH₵ {amount}</p>

          <div>
            <label className="sr-only">Name</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder=" Name"
                style={{ height: "3.3rem", border: "1px solid #718096" }}
                className="remove w-full rounded-lg border-slate-500 border p-4 pe-12 text-sm shadow-sm"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <BiSolidUser />
              </span>
            </div>
          </div>

          <div>
            <label className="sr-only">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                name="email"
                style={{ height: "3.3rem", border: "1px solid #718096" }}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="remove w-full rounded-lg border border-slate-500 p-4 pe-12 text-sm shadow-sm"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <BiAt />
              </span>
            </div>
          </div>
          <div>
            <label className="sr-only">Phone</label>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                name="phone"
                style={{ height: "3.3rem", border: "1px solid #718096" }}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="remove w-full rounded-lg border border-slate-500 p-4 pe-12 text-sm shadow-sm"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <BiSolidPhone />
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <PaystackButton
                {...componentProps}
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
