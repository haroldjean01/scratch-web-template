const SUPABASE_URL =
    'https://gxwgjhhttps://deqhjgbdbdrfftfcpacs.supabase.cofyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlcWhqZ2JkYmRyZmZ0ZmNwYWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NzE3MjEsImV4cCI6MTk4NDA0NzcyMX0.q0EfjDjU6Qzipx1g32XEG3MqIf3URY_IJax3q4jgxK4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
    // from the dogs table, select all items'
    const response = await client.from('dogs').select('*');
    // and return the response
    return response;
}

export async function getDog(id) {
    // from the dogs table, select a single dog who has the matching id
    const response = await client.from('dogs').select().match({ id: id }).single();
    // and return the response
    return response;
}
