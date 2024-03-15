import { Database } from "@/types/types_db";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServerKey: string =
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient<Database>(supabaseUrl, supabaseServerKey);

export { supabase };
