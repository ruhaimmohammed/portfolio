export default function NoLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
        >
            hi
          {children}
        </body>
      </html>
    );
  }