import { createHmac } from 'crypto';

const secret = 'abcdefg';

export const createHash = (value = 'I love cupcakes') => {
    const hash = createHmac('sha256', secret)
    .update(value)
    .digest('hex');
}

export const dependancyCheck = async () => {
    let crypto
    try {
        crypto = await import('crypto');
        return crypto
      } catch (err) {
        throw new Error('crypto support is disabled!');
      }
}