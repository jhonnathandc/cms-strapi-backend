export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9FQWX1ygDPfMihawYBhd2w=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'jTDlqyvwT8yvbRuMvpwhXQ=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
