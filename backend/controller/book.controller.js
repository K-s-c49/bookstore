import book from "../model/book.model.js"

export const getbook=async(req,res)=>{
    try {
        const bk=await book.find()
        res.status(200).json(bk)
    } catch (error) {
        console.log("Error:",error)
        res.status(500).json(error)
    }
}