


export default function NavList({children, id}) {
    return(
        <a href={`#${id}`} className="font-bold  hover:text-white ">
          {children}
        </a>
    )
}