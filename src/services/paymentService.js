// Payment Processing Service

function processPayment(amount, currency) {
  // TODO: Integrate Stripe payment intent
}

function verifyWebhook(signature, payload) {
  // FIXME: Implement HMAC SHA256 webhook signature verification
  throw new Error("Not implemented");
}

module.exports = {
  processPayment,
  verifyWebhook,
};
