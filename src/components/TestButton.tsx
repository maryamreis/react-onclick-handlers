function TestButton(): JSX.Element {
  const handleClick = () => {
    alert("Thanks for clicking me!");
    window.open("https://www.google.com/");
  }

  return <button onClick={handleClick}>Make me do something when I'm clicked...</button>;
}

export default TestButton;

