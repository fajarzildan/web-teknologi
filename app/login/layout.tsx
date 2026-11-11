import { lusitana } from '@/app/ui/fonts';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${lusitana.className} antialiased`}>{children}</div>;
}