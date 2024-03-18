import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav
      className="flex items-center h-16 bg-white text-black absolute top-0 w-full z-10 shadow-lg"
      role="navigation"
    >
      <a href="/" className="pl-8">
        <img src={Logo} alt="logo" className="h-10" />
      </a>
      <div className="px-4 cursor-pointer">
        <a href="/">Home</a>
        <a href="/create" className="ml-8">
          New Product
        </a>
        <a href="/products" className="ml-8">
          Products
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
