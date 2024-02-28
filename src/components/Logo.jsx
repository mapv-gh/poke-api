import { MdOutlineCatchingPokemon } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <>
      <div className='icon'>
          <MdOutlineCatchingPokemon />
        </div>
       <Link className="text" to="/">Pokedex</Link>
      </>
  )
}

export default Header
