import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hgiwfvgqalrynppjwvnp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnaXdmdmdxYWxyeW5wcGp3dm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNDIxODksImV4cCI6MjAyNzkxODE4OX0.B3xpWXll617CMQ5geat2l_NoADpYi5BVsSjACV4I9wg';

export const supabase = createClient(supabaseUrl, supabaseKey);