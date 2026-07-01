function SearchBar({search,setSearch}){
    return(
       <div className="mb-3">
        <input type="text" className="form-control" placeholder="Search " value={search} onChange={(e)=>setSearch(e.target.value)} >
        </input>
       </div>
    );
}
export default SearchBar;