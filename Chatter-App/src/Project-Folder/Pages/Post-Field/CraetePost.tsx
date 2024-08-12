import { GoSearch } from "react-icons/go";
import FormInputs from "./FormInputs";
function CraetePost() {
  return (
    <>
      <div
      //create a search input here tommorrow:
        className="search-container"
        style={{ width: "480px", 
          padding: " 0.85em",
           backgroundColor: "grey",
          margin: "0 auto", 
        borderRadius: '5px'}}
      >
        <GoSearch />
      </div>
      <FormInputs />
      {/* <h1 style={{ textAlign: "center" }}>Create post</h1> */}
    </>
  );
}

export default CraetePost;
