// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from '../../models/product'
import connectDb from '../../middleware/mongoose'



const handler= async(req, res)=>{ 
   let products= await Product.find()
  
   res.status(200).json({ tshirts })
}
export default connectDb(handler)
