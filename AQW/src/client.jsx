import { createClient } from '@supabase/supabase-js'

const URL = 'https://gpkncakejhdnfprrmdxt.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwa25jYWtlamhkbmZwcnJtZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4ODcxNzksImV4cCI6MjAyODQ2MzE3OX0.__nwiXKooaBPrxLIcxNDqXL0f4SZntbLmPemc9s-YD0';

export const supabase = createClient(URL, API_KEY);


