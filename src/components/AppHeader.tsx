interface AppHeaderProps {
  title: string;
}

function AppHeader({ title }: AppHeaderProps): JSX.Element {
  return <h1 onClick={() => console.log("TITLE HERE!")} >{title}</h1>;
}

export default AppHeader;

