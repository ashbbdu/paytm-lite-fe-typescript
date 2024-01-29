import { SearchComponentInterface } from "../interface";

const SearchComponent = ({searchText  , setSearchText , allUsers } : SearchComponentInterface) => {

    const handleChange = async (e : any) => {
        setSearchText(e.target.value);
    }
  return (
    <div>
        <h2>Users</h2>
        <input className='w-full h-9 px-2 my-1 rounded-md border border-slate-300' value={searchText} onChange={handleChange} placeholder="Search Users..." />
    </div>
  )
}

export default SearchComponent