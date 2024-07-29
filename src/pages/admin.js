import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('supabaseUrl and supabaseKey are required.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export const signUpUser = async (formData) => {
  const { data, error } = await supabase.rpc('sign_up_user', {
    email: formData.Email,
    password: formData.Password,
    fullname: formData.Fullname,
    username: formData.Username,
  });

  if (error) throw error;
  return data;
};
