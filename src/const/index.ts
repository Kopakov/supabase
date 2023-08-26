// Hadrcoded fallback to speed up development. TODO: Change
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_URL_GRAPHQL = SUPABASE_URL + '/graphql/v1' || '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
// export const SUPABASE_ERROR_NO_ENVIRONMENTS = 'Supabase environment variables are not set. Stop Apollo client initialization.';
