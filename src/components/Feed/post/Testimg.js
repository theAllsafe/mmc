import React from "react";
import ImageUploading from "react-images-uploading";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./imgstyle.css";

const Testimg = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="upload">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <AddBoxIcon
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
              className=" mr-2 icon"
            />
            &nbsp;
            <button
              onClick={onImageRemoveAll}
              className="bg-slate-400 text-slate-800 rounded-2xl"
              style={{ padding: "0 10px" }}
            >
              Remove all
            </button>
            <div className="flex justify-evenly mt-5">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <EditIcon
                      onClick={() => onImageUpdate(index)}
                      className="mb-3"
                    />
                    <DeleteIcon onClick={() => onImageRemove(index)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default Testimg;
