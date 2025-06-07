// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hvogkcdregbwafppkopw.supabase.co'; // <-- replace this
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2b2drY2RyZWdid2FmcHBrb3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0NjcyMTEsImV4cCI6MjA2MzA0MzIxMX0.H2IxBMeUw2GK0VL38hYpaEUYF2Mih22XhMEspm3LTGU'; // <-- replace this

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
