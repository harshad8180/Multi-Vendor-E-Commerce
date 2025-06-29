export const uploadToCloudinary = async(pics :any)=>{
  const cloud_name="di2apaaeb"
  const upload_preset="ecom_uploads"

  if(pics){
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    const res = await fetch("https://api.cloudinary.con/v1/di2apaaeb/upload",{
      method:"POST",
      body:data
    })

    const fileData = await res.json();
    return fileData.url;
  }
  else{
    console.log("error: pics not found");
  }
}