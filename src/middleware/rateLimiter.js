// ARGUS Demo In-Memory Rate Limiting Middleware
const requestsMap = new Map();

function rateLimiter(options = {}) {
  const windowMs = options.windowMs || 60 * 1000; // 1 minute default
  const maxRequests = options.max || 60; // 60 requests per minute default

  return function (req, res, next) {
    const clientIp = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
    const now = Date.now();

    if (!requestsMap.has(clientIp)) {
      requestsMap.set(clientIp, { count: 1, resetTime: now + windowMs });
      return next();
    }

    const record = requestsMap.get(clientIp);

    if (now > record.resetTime) {
      record.count = 1;
      record.resetTime = now + windowMs;
      return next();
    }

    record.count += 1;

    if (record.count > maxRequests) {
      return res.status(429).json({
        error: 'Too Many Requests',
        message: `Rate limit exceeded. Try again in ${Math.ceil((record.resetTime - now) / 1000)} seconds.`,
      });
    }

    next();
  };
}

module.exports = rateLimiter;
