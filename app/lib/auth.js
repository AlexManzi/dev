// Authentication boundary for the future private area.
// Keep provider-specific SDK code behind this interface when auth is connected.
export const authProviders = {
  cognito: {
    name: "Amazon Cognito",
    env: ["COGNITO_USER_POOL_ID", "COGNITO_CLIENT_ID", "COGNITO_REGION"],
  },
  google: {
    name: "Google OAuth",
    env: ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET"],
  },
};

export function getSession() {
  return null;
}

export function getSignInUrl() {
  return null;
}
