import { useEffect, useState } from "react"; // Ensure React is imported
import "./Form.css";
import PropTypes from "prop-types"; 
import { postData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const isEmpty = Object.keys(updateDataApi).length === 0; // Correct variable name

  useEffect(() => {
    // Check if updateDataApi has data to populate the form
    if (updateDataApi && Object.keys(updateDataApi).length > 0) {
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
    } else {
      // Reset form if there's no update data
      setAddData({ title: "", body: "" });
    }
  }, [updateDataApi]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // Update state dynamically based on input name
    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addPostData = async () => {
    try {
      const res = await postData(addData);
      console.log("Response from API:", res);
      
      if (res.status === 201) {
        setData((prevData) => [...prevData, res.data]); // Append the new data to existing data
        setAddData({ title: "", body: "" }); // Reset form fields after successful submission
        setUpdateDataApi({}); // Reset update data after submission
      } else {
        alert("Failed to add post. Please try again."); // Handle error response
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Ensure title and body are not empty
    if (!addData.title.trim() || !addData.body.trim()) {
      alert("Please fill out both fields");
      return;
    }

    if (updateDataApi && updateDataApi.id) {
      // Logic to update post can be added here
      console.log("Updating post:", addData);
      // Add your update logic here (make an API call to update)
    } else {
      addPostData(); // Call the function to add post data
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Enter post title"
          id="title"
          name="title"
          value={addData.title}
          onChange={handleInputChange}
          required // Makes the input required
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          placeholder="Enter post body"
          id="body"
          name="body"
          value={addData.body}
          onChange={handleInputChange}
          required // Makes the input required
        />
      </div>
      <button type="submit">{isEmpty ? "Add" : "Edit"}</button> {/* Correct button logic */}
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  updateDataApi: PropTypes.object.isRequired,
  setUpdateDataApi: PropTypes.func.isRequired,
};

export default Form;
