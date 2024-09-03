
export default function NavList({ children, id, onSelect, selected}) {

  console.log(selected);

  return (
    <a
      href={`#${id}`}
      onClick={onSelect}
      className={selected ? 'font-bold underline decoration-neutral-200' : 'font-bold hover:text-white'}
    >
      {children}
    </a>
  );
}
