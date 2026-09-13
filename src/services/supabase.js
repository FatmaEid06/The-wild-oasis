import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qmyyrddntvwsvlslibav.supabase.co";
const supabaseKey = "sb_publishable_Zf2kOTNLlphzLxNFZFdd7g_UEvrqONl";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
