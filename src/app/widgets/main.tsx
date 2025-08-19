export const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="px-20 py-6">{children}</main>;
};
