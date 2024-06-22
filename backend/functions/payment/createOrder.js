const Razorpay = require('razorpay');
const crypto = require('crypto');
const { marshall } = require('@aws-sdk/util-dynamodb');
const { PutItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDB = require('../../dynamoDB/dbConfig');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports.createOrder = async (event) => {
    try {
        const { amount, currency, receipt, payment_capture } = JSON.parse(event.body);

        const options = {
            amount: amount * 100, // Amount in paise (smallest unit of the currency)
            currency: currency,
            receipt: receipt,
            payment_capture: payment_capture || 1 // 1 for automatic capture, 0 for manual
        };

        const order = await razorpay.orders.create(options);

        // Store the order details in your database
        const orderItem = {
            id: order.id,
            amount: amount,
            currency: currency,
            receipt: receipt,
            payment_capture: payment_capture || 1,
            createdAt: new Date().toISOString(),
        };

        const params = {
            TableName: "Orders",
            Item: marshall(orderItem),
        };

        await dynamoDB.send(new PutItemCommand(params));

        return {
            statusCode: 201,
            body: JSON.stringify(order),
        };
    } catch (error) {
        console.error("Error creating order:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
