import React, {useState, useEffect, useRef} from 'react'

export const ProductAdd = () => {
  const [initProducts, SetinitProducts] = useState({
    productname : "",
    price : "",
    image: ""
  });
  const [storeProducts, SetstoreProducts] = useState([]);

  const fileRef = useRef(null);

  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem("Products")) || []
    SetstoreProducts(storedData)
    },[])

  const handleChange = (e) => {
    const name = e.target.name;
    const prodvalue = e.target.value;
    SetinitProducts(values => ({...values, [name]: prodvalue}))
  }

  const handleImage = (e)=>{
        const file = e.target.files[0]
        const reader = new FileReader()
            reader.onload = ()=>{
            SetinitProducts(prev => ({...prev, image:reader.result}))
        }
        reader.readAsDataURL(file)
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let stored = JSON.parse(localStorage.getItem("Products")) || []

    let newId = stored.length > 0 ? stored[stored.length-1].id + 1 : 1

    let newUser = {
        id:newId,
        productname:initProducts.productname,
        price :Number(initProducts.price),
        image:initProducts.image
    }
    let updated = [...stored, newUser]
    SetstoreProducts(updated)
    localStorage.setItem("Products",JSON.stringify(updated))
    console.log(initProducts)
    SetinitProducts({
        productname : "",
    price : "",
    image: ""})
    fileRef.current.value = "";
  }
  return (
    <div>
        <div className="col-sm-6 card mx-auto">
            <div className="card-body">
                <h4 className='text-center card-title text-muted'>Add Products</h4>
                    <form className='p-3' onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Enter Product"
                        name="productname"
                        value={initProducts.productname}    
                        className='form-control'         
                        onChange={handleChange}
                    /><br></br>
                    <input 
                        type="text"
                        placeholder="Enter Price"
                        name="price"
                        value={initProducts.price}   
                        className='form-control'     
                        onChange={handleChange}       
                    /><br></br>
                    <label>Select Image</label>
                    <input 
                        onChange={handleImage}
                        ref={fileRef}
                        type="file"
                        className='form-control'         
                    />
                    {initProducts.image && (
                        <img src={initProducts.image} width="80"/>
                    )}
                    <br></br>
                    <button type="submit" className='col-sm-4 btn btn-primary flex justify-center'>Submit</button>
                </form>
            </div>
        </div>

        <table className="table table-bordered col-sm-7 mx-auto mt-3">

<thead>
<tr>
<th>ID</th>
<th>Product</th>
<th>Price</th>
<th>Image</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{
storeProducts.map((item)=>(

<tr key={item.id}>

<td>{item.id}</td>

<td>{item.productname}</td>

<td>{item.price}</td>

<td>
<img
src={item.image}
width="80"
height="80"
/>
</td>
<td>
    Edit | Delete
</td>
</tr>

))
}

</tbody>

</table>
    </div>
  )
}
