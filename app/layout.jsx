import '../src/styles.css';

export const metadata = {
  title: 'ZigZag China — Private Guides in Chengdu & Chongqing',
  description: 'Private, locally guided experiences in Chengdu and Chongqing.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
