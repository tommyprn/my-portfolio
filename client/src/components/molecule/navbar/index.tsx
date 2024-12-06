interface ListProps {
  link: string;
  title: string;
}

interface NavigationProps {
  list: ListProps[];
}

function NavBar({ list }: NavigationProps) {
  return (
    <div className="py-6 px-16 flex justify-between text-gold font-mono">
      <p className="text-3xl">Tommy Pranoto</p>

      <div className="flex gap-4 cursor-pointer">
        {list.map((item) => (
          <p className="ease-in-out duration-500 hover:text-xl hover:text-hunyadi">
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
