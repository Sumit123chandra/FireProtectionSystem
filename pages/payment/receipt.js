/*"use client";

import Footer from "../../components/Layout"; // adjust path

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ReceiptPage() {
  const router = useRouter();
  const [receipt, setReceipt] = useState({
    name: "",
    phone: "",
    amount: "",
    paymentId: "",
    date: "",
  });

  useEffect(() => {
    if (!router.isReady) return; // wait for router query to be ready

    const { name, phone, amount, paymentId } = router.query;

    setReceipt({
      name: name || "N/A",
      phone: phone || "N/A",
      amount: amount || "0",
      paymentId: paymentId || "N/A",
      date: new Date().toLocaleString(),
    });
  }, [router.isReady, router.query]);

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Payment Receipt</h1>

        <div className="text-left space-y-3">
          <p><span className="font-semibold">Name:</span> {receipt.name}</p>
          <p><span className="font-semibold">Phone:</span> {receipt.phone}</p>
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
    <Footer />
    </>
  );
}
  */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "../../components/Layout"; // adjust path

export default function ReceiptPage() {
  const router = useRouter();
  const [receipt, setReceipt] = useState({
    name: "",
    phone: "",
    amount: "",
    paymentId: "",
    date: "",
  });

  useEffect(() => {
    if (!router.isReady) return;

    const { name, phone, amount, paymentId } = router.query;

    setReceipt({
      name: name || "N/A",
      phone: phone || "N/A",
      amount: amount || "0",
      paymentId: paymentId || "N/A",
      date: new Date().toLocaleString(),
    });
  }, [router.isReady, router.query]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl border border-gray-200 print:border-none print:shadow-none">
          {/* Header / Branding */}
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-red-700">KC Fire Protection</h1>
              <p className="text-gray-500 text-sm">Safety First, Always</p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-bold text-gray-700">Payment Receipt</h2>
              <p className="text-gray-500 text-sm">#{receipt.paymentId}</p>
            </div>
          </div>

          {/* Receipt Details */}
          <div className="grid grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="font-semibold">Customer Name:</p>
              <p>{receipt.name}</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>{receipt.phone}</p>
            </div>
            <div>
              <p className="font-semibold">Amount Paid:</p>
              <p className="text-lg font-bold text-green-600">
                ₹{Number(receipt.amount).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="font-semibold">Date:</p>
              <p>{receipt.date}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t mt-6 pt-4">
            <p className="text-gray-500 text-sm">
              This is a computer-generated receipt and does not require a physical signature.
            </p>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <button
              className="bg-red-600 text-white px-8 py-3 rounded-xl shadow hover:bg-red-700 font-semibold transition"
              onClick={() => window.print()}
            >
              Print Receipt
            </button>
            <p className="text-gray-400 text-xs mt-4">
              Thank you for your payment! For any queries, contact{" "}
              <span className="underline">9560288918</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

