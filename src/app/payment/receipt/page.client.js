"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReceiptPage() {
  const searchParams = useSearchParams();
  const [receipt, setReceipt] = useState({
    name: "",
    phone: "",
    amount: "",
    paymentId: "",
    date: "",
  });

  useEffect(() => {
    const name = searchParams.get("name");
    const phone = searchParams.get("phone");
    const amount = searchParams.get("amount");
    const paymentId = searchParams.get("paymentId");

    setReceipt({
      name: name || "N/A",
      phone: phone || "N/A",
      amount: amount || "0",
      paymentId: paymentId || "N/A",
      date: new Date().toLocaleString(),
    });
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Payment Receipt</h1>

        <div className="text-left space-y-3">
          <p><span className="font-semibold">Name:</span> {receipt.name}</p>
          <p><span className="font-semibold">Phone:</span> {receipt.phone}</p>
          {/* <p><span className="font-semibold">Amount Paid:</span> ₹{receipt.amount}</p> */}
          <p><span className="font-semibold">Amount Paid:</span> ₹{Number(receipt.amount).toLocaleString()}</p>

          <p><span className="font-semibold">Payment ID:</span> {receipt.paymentId}</p>
          <p><span className="font-semibold">Date:</span> {receipt.date}</p>
        </div>

        <button
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 font-semibold"
          onClick={() => window.print()}
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}
