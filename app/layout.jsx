import '../src/styles.css';

export const metadata = {
  title: 'ZigZag China — Chengdu & Chongqing',
  description: 'Private guiding in Chengdu and Chongqing for curious travelers.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
