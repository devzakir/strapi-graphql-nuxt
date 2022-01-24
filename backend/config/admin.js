module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '780853343802863aaf74e0bd4dbc9ecf'),
  },
});
