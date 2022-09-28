import React, { useState, useEffect } from "react";
import { Typography, Button, Form, Input} from "antd";
import Dropzone from "react-dropzone";
import axios from "axios";
import Header from "../Header/Header";
import "./Upload.scss";

const { Title } = Typography;
const { TextArea } = Input;

function Upload() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [FilePath, setFilePath] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeDescription = (event) => {
    console.log(event.currentTarget.value);

    setDescription(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    if (title === "" || Description === "" || FilePath === "") {
      return alert("Please first fill all the fields");
    }

    const info = {
      author: "User",
      title: title,
      description: Description,
      filePath: FilePath,
    };

    axios
      .post("http://localhost:5000/api/video/uploadVideo", info)
      .then((response) => {
        if (response.data.success) {
          alert("Video Uploaded Successfully");
          window.location.href = "/home";
        } else {
          alert("Failed to upload video");
        }
      });
  };

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    console.log(files);
    formData.append("file", files[0]);

    axios
      .post("http://localhost:5000/api/video/uploadfiles", formData, config)
      .then((response) => {
        if (response.data.success) {
          let variable = {
            filePath: response.data.filePath,
            fileName: response.data.fileName,
          };
          setFilePath(response.data.filePath);

          //gerenate thumbnail with this filepath !
        } else {
          alert("failed to save the video in server");
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="upload-page">
        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Title level={2}> Upload Video</Title>
          </div>

          <Form className="upload-form" onSubmit={onSubmit}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
                {({ getRootProps, getInputProps }) => (
                  <div
                    style={{
                      width: "300px",
                      height: "240px",
                      border: "1px solid lightgray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                  </div>
                )}
              </Dropzone>
            </div>

            <br />
            <br />
            <label>Title</label>
            <Input onChange={handleChangeTitle} value={title} />
            <br />
            <br />
            <label>Description</label>
            <TextArea onChange={handleChangeDescription} value={Description} />
            <br />
            <br />

            <Button
              className="submit-button"
              type="primary"
              size="large"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Upload;
