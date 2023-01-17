export default {
  oidc: {
    issuer: 'https://dev-09940770.okta.com/oauth2/default',
    clientId: '0oa7xbqfk3A69recL5d7',
    scopes: ['openid', 'profile', 'email'],
    redirectUri: `${window.location.origin}/login/callback`
  },
  widget: {
    issuer: 'https://dev-09940770.okta.com/oauth2/default',
    clientId: '0oa7xbqfk3A69recL5d7',
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ['openid', 'profile', 'email'],
  }
};