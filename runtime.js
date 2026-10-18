/* The frontend can expose only a public API endpoint, never an OpenAI secret.
   Connect the Supabase Auth session in getAccessToken once auth is live. */
window.LADDR_RUNTIME = window.LADDR_RUNTIME || {
  apiUrl: "",
  getAccessToken: async function(){ return null; }
};