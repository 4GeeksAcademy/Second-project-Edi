import React, { useContext,useEffect,useRef } from "react";
import "../../styles/newitem.css";
import { useState } from "react";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2';


const NewItem = () =>{
    const presetKey = "ptwmh2mt";
    const cloudName = "dhyrv5g3w";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [publishing_date, setPublishing_date] = useState("");
    const [type, setType] = useState("Select Category");
    const [image, setImage] = useState("");
    const fileInputRef = useRef(null);
    const fileInputRefs = useRef(Array.from({ length: 4 }).map(() => React.createRef()));
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState(Array.from({ length: 4 }, () => null));




    useEffect(() => {
        return () => {
            imagePreviews.forEach((preview) => {
                if (preview) {
                    URL.revokeObjectURL(preview);
                }
            });
        };
    }, [imagePreviews]);

    const updateFormattedDate = () => {
        setPublishing_date(formattedDate);
    };

    useEffect(() => {
        updateFormattedDate();
    }, []);

    const handleCategorySelect = (selectedCategory) => {
        setType(selectedCategory);
    };

    const handleFile = (e, index) => {
        const file = e.target.files[0];
        if (file && file.type !== 'image/jpeg') {
            alert('Only .jpg format is allowed.');
            return;
        }

        const newImagePreviews = [...imagePreviews];
        newImagePreviews[index] = URL.createObjectURL(file);

        setImagePreviews(newImagePreviews);

        setSelectedImages([...selectedImages, file]);
    };

    const handleUpload = async () => {
        console.log(selectedImages);
        if (selectedImages.length === 0) {
            alert('Please select at least one image before uploading.');
            return;
        }

        try {
            const imageUrls = await Promise.all(selectedImages.map(uploadImage));
            uploadItem(imageUrls);
            Swal.fire({
                icon: 'success',
                text: "Item added!"
            });
        } catch (error) {
            console.error('Error uploading:', error);
        }
    };

    const uploadImage = (imageFile) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", imageFile);
            formData.append("upload_preset", presetKey);

            fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.secure_url) {
                        resolve(data.secure_url);
                    } else {
                        reject(new Error("Image upload failed."));
                    }
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        });
    };

    const uploadItem = (itemImages) => {
        try {
            console.log(publishing_date);
            fetch(process.env.BACKEND_URL + 'api/upload-item', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description, image: itemImages, type, publishing_date })
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });
        } catch (error) {
            console.log("Error loading message from backend", error);
        }
    };
    
    return(
        <div className="container-fluid mt-5">
            <div className="row d-flex justify-content-center" id="newItemContainer">
                <div className="col-md-8 d-flex flex-column border" id="newItemInfo">
                    <h2 className="my-3">Information about the product</h2>
                    <div className="d-flex flex-row justify-content-between">
                        <label htmlFor="productInfo" >What are you giving?</label>
                        <span className="text-muted">{title.length}/50</span>
                    </div>
                    <input type="text" 
                           maxLength={50} 
                           className="border col-md-12 mt-3" 
                           id="productInfo"  
                           name="product-info" 
                           onChange={(e)=>{setTitle(e.target.value)}}
                           placeholder="In a few words..." 
                    />
                    
                    <label htmlFor="category" className="my-3">Category</label>
                    <div className="dropdown">
                        <button
                        className="btn btn-light col-md-4 dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        {type}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                                <button className="dropdown-item" onClick={() => handleCategorySelect("Canapes")}>Canapes</button>
                            </li>
                            <li>
                                <button className="dropdown-item" onClick={() => handleCategorySelect("Cabezero")} >Cabezero </button>
                            </li>
                            <li>
                                <button className="dropdown-item" onClick={() => handleCategorySelect("Colchon")} > Colchon </button>
                            </li>
                            <li>
                                <button className="dropdown-item" onClick={() => handleCategorySelect("Sofa")} > Sofa </button>
                            </li>
                            <li>
                                <button className="dropdown-item" onClick={() => handleCategorySelect("Mesilla")} > Mesilla </button>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex flex-row justify-content-between my-3">
                        <label htmlFor="description" >Description</label>
                        <span htmlFor="description" className="text-muted">{description.length}/600</span>
                    </div>
                    <textarea id="description" className="mb-3" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Tell us relevant information..." rows={7} maxLength={600}></textarea> 
                </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center" >
                <div className="col-md-8 border" id="newItemImages">
                    <h2 className="mt-3">Images</h2>
                    <div className="d-flex justify-content-around col-md-12 mt-4">     
                    {Array.from({ length: 4 }).map((_, index) => (
                        <label
                            key={index}
                            className={`imageLabel ${imagePreviews[index] ? 'imageLabelWithBackground' : ''}`}
                            style={imagePreviews[index] ? { backgroundImage: `url(${imagePreviews[index]})`, backgroundSize: 'cover' } : {}}
                        >
                            {imagePreviews[index] ? (
                                <img src={imagePreviews[index]} alt={`Image ${index}`} style={{ display: 'none' }} />
                            ) : (
                                <i className={`fa-solid fa-camera fa-4x ${imagePreviews[index] ? 'hidden' : ''}`}></i>
                            )}
                            <input
                                type="file"
                                accept="image/jpeg"
                                style={{ display: 'none' }}
                                onChange={(e) => handleFile(e, index)}
                                ref={fileInputRefs.current[index]}
                            />
                            <div
                                className="overlay"
                                onClick={() => {
                                    fileInputRefs.current[index].current.click();
                                }}
                            >
                            </div>
                        </label>
                    ))}
                    </div>                
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/jpeg"
                                onChange={handleFile}
                                ref={fileInputRef} 
                                style={{ display: 'none' }} 
                            />
                </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center ">
                <div className="col-md-8 border" id="newItemLocation">
                    <h2 className="mt-3">Your product will be located in:  </h2>
                    <iframe
                        title="Google Map"
                        className="iframe my-3"
                        src="https://maps.google.com/?ll=23.135249,-82.359685&z=14&t=m&output=embed"
                        height="300"
                        width={925}
                        style={{ border: 0 }}
                        allowFullScreen
                    ></iframe>              
          </div>
            </div>
            <div className="d-flex my-5 justify-content-center">
                <button className="btn btn-warning"  
                        onClick={()=>{
                        handleUpload()
                }}>Submit</button> 
            </div>
            
        </div>
    )
}

export default NewItem