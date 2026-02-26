import useSWR from 'swr';

export interface Certificate {
  id: string; // or number depending on your Supabase column type
  title: string;
  issuer: string;
  image_url: string;
  issued_at: string;
  description?: string;
  skills?: string[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCertificates() {
  const { data, error, isLoading } = useSWR<Certificate[]>(
    '/api/certificates',
    fetcher,
  );

  return {
    certificates: data,
    isLoading,
    isError: !!error,
  };
}
