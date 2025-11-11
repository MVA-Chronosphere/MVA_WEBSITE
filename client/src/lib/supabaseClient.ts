import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zsvlmtbvvojuycvdzavc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzdmxtdGJ2dm9qdXljdmR6YXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NDU0ODcsImV4cCI6MjA3ODMyMTQ4N30.eWCkfK6ErUA_dCMDQwfhFJMBcN7rfDo90CK6Bvt7UUU";

export const supabase = createClient(supabaseUrl, supabaseKey);
