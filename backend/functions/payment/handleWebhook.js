const crypto = require('crypto');

module.exports.handleWebhook = (event) => {
    const secret = 'YOUR_WEBHOOK_SECRET';

    const shasum = crypto.createHmac('sha256', secret);
    shasum.update(JSON.stringify(event.body));
    const digest = shasum.digest('hex');

    if (digest === event.headers['x-razorpay-signature']) {
        // Valid webhook event
        // Process the event (e.g., update payment status in your database)
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Event received successfully" }),
        };
    } else {
        // Invalid webhook event
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid webhook signature" }),
        };
    }
};
