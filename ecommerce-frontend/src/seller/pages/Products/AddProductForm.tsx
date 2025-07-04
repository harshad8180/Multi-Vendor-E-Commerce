import { TextField } from '@mui/material'
import { title } from 'process'
import React, { useState , useEffect } from 'react'
import { menLevelTwo } from '../../../data/catogory/level two/menLevelTwo'
import { womenLevelTwo } from '../../../data/catogory/level two/womenLevelTwo'
import { furnitureLevelTwo } from '../../../data/catogory/level two/furnitureLevelTwo '
import { electronicsLevelTwo } from '../../../data/catogory/level two/electronicsLevelTwo '
import { menLevelThree } from '../../../data/catogory/level three/menLevelThree '
import { womenLevelThree } from '../../../data/catogory/level three/womenLevelThree '
import { furnitureLevelThree } from '../../../data/catogory/level three/furnitureLevelThree '
import { electronicsLevelThree } from '../../../data/catogory/level three/electronicsLevelThree '
import {
  
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    FormHelperText,
    Grid,
    CircularProgress,
    IconButton,
    Snackbar,
    Alert,
} from "@mui/material"

import "tailwindcss/tailwind.css"
import { useFormik } from 'formik'
import { uploadToCloudinary } from '../../../Util/uploadToCloudinary'
import { AddPhotoAlternate, Close } from '@mui/icons-material'
import { colors } from '../../../data/Filter/colors'
import { mainCategory } from '../../../data/catogory/mainCategory'



// const validationSchema = Yup.object({
//     title: Yup.string()
//     .min(5, "Title should be at least 5 characters long")
//     .required("Title is required"),

//     description: Yup.string()
//     .min(10, "Description should be at least 10 characters long")
//     .required("Description is required"),

//     discountedPrice: Yup.string()
//     .min(10, "Discounted Price should be greater than zero")
//     .required("Discounted Price is required"),

//     price: Yup.string()
//     .min(10, "Price should be greater than zero")
//     .required("Price is required"),

//     discountPercent: Yup.string()
//     .min(10, "Discount Percent should be greater than zero")
//     .required("Discount Percent is required"),

//     quantity: Yup.string()
//     .min(10, "Quantity should be greater than zero")
//     .required("Quantity  is required"),

//     color: Yup.string().required("Color is required"),
//     category: Yup.string().required("Category is required"),
//     sizes: Yup.string().required("Sizes is required"),
// })

const categoryTwo: { [key:string]: any[]} = {
    men: menLevelTwo,
    women: womenLevelTwo,
    kids: [],
    home_furniture: furnitureLevelTwo,
    beauty: [],
    electronics: electronicsLevelTwo,
};

const categoryThree: { [key:string]: any[]} = {
    men: menLevelThree,
    women: womenLevelThree,
    kids: [],
    home_furniture: furnitureLevelThree,
    beauty: [],
    electronics: electronicsLevelThree,
};



const AddProductForm = () => {
    const [uploadImage, setUploadingImage] = useState(false);
    // const dispatch = useAppDispatch();
    // const {sellers, sellerProduct} = useAppSelector(store => store);

    const [snackbarOpen, setOpenSnackbar] = useState(false);

    const formik = useFormik({
      initialValues:{
        title: "",
        description:"",
        mrpPrice:"",
        sellingPrice:"",
        quantity:"",
        color:"",
        images:[],
        category:"",
        category2:"",
        category3:"",
        sizes:"",
      },

      onSubmit:(values)=>{
        // dispatchEvent(createProduct({
        //   request:values, jwt: localStorage.getItem("jwt")
        // }))
        console.log(values);
      }
    })

    const handleImageChange = async(event: any)=>{
      const file = event.target.files[0];
      setUploadingImage(true);
      const image = await uploadToCloudinary(file)
    // const image = URL.createObjectURL(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadingImage(false)
    }

    const handleRemoveImage = (index:number)=>{
      const updateImages = [...formik.values.images];
      updateImages.splice(index, 1)
      formik.setFieldValue("images", updateImages)
    }

    const childCategory = (category:any, parentCategoryId: any)=>{
      return category.filter((child:any)=>{
        // console.log("Category", parentCategoryId, child)

        return child.parentCategoryId === parentCategoryId;
      })
    }

    const handleCloseSnackbar = ()=>{
      setOpenSnackbar(false)
    }

    // useEffect(() =>{
    //   if(sellerProduct.productCreated || sellerProduct.error){
    //     setOpenSnackbar(true)
    //   }
    // },[sellerProduct.productCreated, sellerProduct.error])


  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='space-y-4 p-4'>

        <Grid container spacing={2}>
          <Grid className="flex flex-wrap gap-5" size={{xs:12}} >
            <input type="file" accept="image/*" id="fileInput" style={{display: "none"}} onChange={handleImageChange} />
            
            <label htmlFor="fileInput" className='relative'>
              <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400'>
                <AddPhotoAlternate className='text-gray-700'/>
              </span>

              {uploadImage && (
                <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                  <CircularProgress/>
                </div>
              )}
            </label>

            <div className='flex flex-wrap gap-2'>
              {
                formik.values.images.map((image, index) =>(
                  <div className='relative'>
                    <img src={image} alt={`ProductImage ${index + 1}`} className='w-24 h-24 object-cover' key={index} />
                    <IconButton
                    onClick={() => handleRemoveImage(index)}
                    className=''
                    size='small' color='error'
                    sx={{
                      position:"absolute",
                      top:0,
                      right:0,
                      outline:"none",
                    }}
                    >
                      <Close sx={{fontSize:"1rem"}}/>
                    </IconButton>
                  </div>
                ))
              }
            </div>
          </Grid>

          <Grid size={{xs:12}}>
            <TextField
            fullWidth
            id='title'
            name='title'
            label='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            required
            />

            </Grid>
            

          <Grid size={{xs:12}}>
            <TextField
            multiline
            rows={4}
            fullWidth
            id='description'
            name='description'
            label='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            required
            />
          </Grid>

          <Grid size={{xs:12, md:4, lg:3}}>
            <TextField
            fullWidth
            id='mrp_price'
            name='mrpPrice'
            label='MRP Price'
            type='number'
            value={formik.values.mrpPrice}
            onChange={formik.handleChange}
            error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
            helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
            required
            />
          </Grid>

          <Grid size={{xs:12, md:4, lg:3}}>
            <TextField
            fullWidth
            id='sellingPrice'
            name='sellingPrice'
            label='Selling Price'
            type='number'
            value={formik.values.sellingPrice}
            onChange={formik.handleChange}
            error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
            helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
            required
            />
          </Grid>

          <Grid size={{xs:12, md:4, lg:3}}>
            <FormControl           
            fullWidth            
            error={formik.touched.color && Boolean(formik.errors.color)}
         
            required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
              labelId='color-label'
              id='color'
              name='color'
              value={formik.values.color}
              onChange={formik.handleChange}
              label="Color"
              >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {
                  colors.map((color, index)=> <MenuItem value={color.name}>
                    <div className='flex gap-3'>
                      <span style={{backgroundColor: color.hex}} className={`h-5 w-5 rounded-full ${color.name === "White" ? "border" : ""}`}></span>
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>)
                }
              </Select>
              {
                formik.touched.color && formik.errors.color && (
                  <FormHelperText>{formik.errors.color}</FormHelperText>
                )
              }
            </FormControl>
          </Grid>
          
          
          <Grid size={{xs:12, md:4, lg:3}}>
            <FormControl           
            fullWidth            
            error={formik.touched.sizes && Boolean(formik.errors.sizes)}
         
            required
            >
              <InputLabel id="sizes-label">Sizes</InputLabel>
              <Select
              labelId='sizes-label'
              id='sizes'
              name='sizes'
              value={formik.values.sizes}
              onChange={formik.handleChange}
              label="Sizes"
              >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>

                <MenuItem value="FREE">FREE</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
                
              </Select>

              {
                formik.touched.sizes && formik.errors.sizes && (
                  <FormHelperText>{formik.errors.sizes}</FormHelperText>
                )
              }
            </FormControl>
          </Grid>
          
          
          <Grid size={{xs:12, md:4, lg:4}}>
            <FormControl           
            fullWidth            
            error={formik.touched.category && Boolean(formik.errors.category)}
         
            required
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
              labelId='category-label'
              id='category'
              name='category'
              value={formik.values.category}
              onChange={formik.handleChange}
              label="Category"
              >
                {/* <MenuItem value="">
                <em>None</em>
                </MenuItem> */}
                {
                  mainCategory.map((item)=> <MenuItem value={item.categoryId}>
                    {item.name}
                  </MenuItem>)
                }
              </Select>
              {
                formik.touched.category && formik.errors.category && (
                  <FormHelperText>{formik.errors.category}</FormHelperText>
                )
              }
            </FormControl>
          </Grid>

          <Grid size={{xs:12, md:4, lg:4}}>

            <FormControl
            fullWidth
            error={formik.touched.category && Boolean(formik.errors.category)}
            required
            >
              <InputLabel id="category-label">Second Category</InputLabel>

              <Select
              labelId='category2-label'
              id='category2'
              name='category2'
              value={formik.values.category2}
              onChange={formik.handleChange}
              label="Second Category"
              >
                

                {
                  formik.values.category && 
                 
                    categoryTwo[formik.values.category]
                  ?.map((item)=>(
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))
                }

              </Select>
              {
                formik.touched.category && formik.errors.category && (
                  <FormHelperText>{formik.errors.category} </FormHelperText>
                )
              }

            </FormControl>
          </Grid>

          <Grid size={{xs:12, md:4, lg:4}}>

            <FormControl
            fullWidth
            error={formik.touched.category && Boolean(formik.errors.category)}
            required
            >
              <InputLabel id="category-label">Third Category</InputLabel>

              <Select
              labelId='category-label'
              id='category'
              name='category3'
              value={formik.values.category3}
              onChange={formik.handleChange}
              label="Third Category"
              >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>

                {
                  formik.values.category2 && 
                  childCategory(
                    categoryThree[formik.values.category],
                    formik.values.category2
                  )?.map((item: any)=>(
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))
                }

              </Select>
              {
                formik.touched.category && formik.errors.category && (
                  <FormHelperText>{formik.errors.category}</FormHelperText>
                )
              }

            </FormControl>
          </Grid>

          <Grid size={{xs:12}}>
            <Button
            sx={{p:"14px"}}
            color='primary'
            variant='contained'
            fullWidth
            type='submit'
            // disabled={sellerProduct.loading}
            >
              {false ? <CircularProgress size="small" sx={{width: "27px", height:"27px"}}/> : "Add Product"}
            </Button>
          </Grid>
          

        </Grid>
      </form>

      {/* <Snackbar
      anchorOrigin={{vertical:"top", horizontal:"right"}}
      open={snackbarOpen} autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      >
        <Alert
        onClose={handleCloseSnackbar}
        severity={true ? "error" : "success"}
        variant='filled'
        sx={{width:'100%'}}
        >
          {sellerProduct.error ? sellerProduct.error : "Product created successfully"}
        </Alert>
      </Snackbar> */}

    </div>
  )
}

export default AddProductForm
