import Logo from "./ui/Logo";
import ThemeToggle from "./ui/ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">

      <Logo />

      <ThemeToggle />

    </header>
  );
}


export default Header;
