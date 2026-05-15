import Users from "../models/User.js";
//create User
exports.createUser = async (req, res) => {
  try {
    const user = new Users(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ message: "Error creating user" });
  }
    //get all the users
  exports.getUsers=async(req,res)=>{
    try{
        const users= await Users.find();
        res.json(users);
    }catch(error){
        console.error("Error fetching users",error);
        res.status(500).json({message:"Error fetching users"});
    }   
  }
  //get single user

  exports.getUserById=async (req,res)=>{
    try{
        const user= await Users.findById(req.params.id);
            if(!user)return res.status(404).json({ message:"User not found" });
            res.json(user);
    }
        catch(error){
            res.status(500).json({ message:"Error fetching user" });
        }
    }
    exports. userUpdate=async(req,res)=>{
        try{
            const updatedUser= await Users.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json(updatedUser);

  }catch (error){
    res.status(400).json({ message:"Error updating user" });
  }
}
exports.deleteUser=async(req,res)=>{
    try{
        await Users.findByIdAndDelete(req.params.id);
        res.json({message:"User Deleted"})

    }
    catch(error){
        res.status(500).json({ message:"Error deleting user" });
}
}
}