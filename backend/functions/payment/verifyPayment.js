const crypto = require('crypto');

module.exports.verifyPayment = (event) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = JSON.parse(event.body);

    const generated_signature = crypto.createHmac('sha256', 'YOUR_RAZORPAY_KEY_SECRET')
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest('hex');

    if (generated_signature === razorpay_signature) {
        // Payment is verified
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Payment verified successfully" }),
        };
    } else {
        // Payment verification failed
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid signature" }),
        };
    }
};
