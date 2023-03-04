import React from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";

  //creating categories

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  //handle form:

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", {
        name
      });
      if (data?.success) {
        toast.success(`New Category ${name} Is Created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong in input form");
    }
  };


  // get all categories:
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong IN Getting All Categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // update category:

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );

      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!!");
    }
  };

  // Delete category:

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${id}`
      );

      if (data.success) { 
        toast.success(`Successfully Deleted`);
     
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!!");
    }
  };

  return (
    <Layout title={"Dashboard- Create Category"}>
      <div className="row m-5 p-5">
        <div className="col-md-3">
          <AdminMenu></AdminMenu>
        </div>
        <div className="col-md-9 w-75">
          <h5>Manage Category</h5>
          <div className="div p-3 w-50">
            <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            ></CategoryForm>
          </div>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {categories.map((c) => (
                    <tr style={{ margin: 10 }}>
                      <td key={c._id}>{c.name}</td>
                      <td
                        onClick={() => {
                          setVisible(true);
                          setUpdatedName(c.name);
                          setSelected(c);
                        }}
                        style={{ backgroundColor: "#0D6EFD" }}
                        className="btn btn-primary m-2"
                      >
                        Edit
                      </td>
                      <td
                        onClick={() => {
                          handleDelete(c._id);
                        }}
                        style={{ backgroundColor: "orange" }}
                        className="btn btn-primary m-2"
                      >
                        Delete
                      </td>
                    </tr>
                  ))}
                </>
              </tbody>
            </table>
          </div>
        </div>

        <Modal
          onCancel={() => setVisible(false)}
          footer={null}
          visible={visible}
        >
          <CategoryForm
            value={updatedName}
            setValue={setUpdatedName}
            handleSubmit={handleUpdate}
          ></CategoryForm>

          
        </Modal>
      </div>
    </Layout>
  );
};

export default CreateCategory;
