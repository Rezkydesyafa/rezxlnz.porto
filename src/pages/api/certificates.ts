import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { data: certificates, error } = await supabase
      .from('certificates')
      .select('*')
      .order('issued_at', { ascending: false });

    if (error) throw error;

    return res.status(200).json(certificates);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
