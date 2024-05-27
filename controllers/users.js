// const Users = require("../modals/user");

// const handleGetAllUsers = async (req, res) => {
//   const allUsersFromDB = await Users.find({});
//   return res.json(allUsersFromDB);
// };

// // Send Data For Single User
// const sendUserData = async (req, res) => {
//   const body = req?.body;
//   if (body !== undefined) {
//     return res.json({ msg: "All fields are required ..." });
//   }

//   try {
//     const result = await Users.create({
//       first_name: body.first_name,
//       last_name: body.last_name,
//       age: body.age,
//       email: body.email,
//       gender: body.gender,
//       job_title: body.job_title,
//     });
//     console.log(result);
//     return res.status(201).json({ msg: "User Successfully Created" });
//   } catch (error) {
//     console.error(error);
//     return res.json({ msg: "An error occurred while creating the user." });
//   }
// };

// const handleDeleteUser = async (req, res) => {
//   await Users.findByIdAndDelete(req.params.id);
//   return res.json({ status: `${req.params.id} has been deleted!` });
// };

// const handleUserUpdate = async (req, res) => {
//   await Users.findByIdAndUpdate(req.params.id, {
//     last_name: "Last Name Changed...",
//   });
//   return res.json({ status: "Success" });
// };

// module.exports = {
//   handleGetAllUsers,
//   sendUserData,
//   //   getSingleUser,
//   handleDeleteUser,
//   handleUserUpdate,
// };
