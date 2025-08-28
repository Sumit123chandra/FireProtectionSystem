import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { amount, currency, receipt } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount,  //rupees
      currency: currency || "INR",
      receipt: receipt || `receipt_order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    return new Response(JSON.stringify({ success: true, order }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: "Order creation failed" }), { status: 500 });
  }
}
