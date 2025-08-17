export const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="px-10 py-4">{children}</main>;
};
