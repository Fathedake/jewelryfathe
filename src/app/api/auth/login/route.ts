const bcrypt = require("bcryptjs");
import { readClient } from "@/lib/sanity/sanity"

export async function POST(req: Request,) {
  // const data = await req.json();
  // const { username, email, firstname, lastname, } = data
  const data = await req.json();
  const { email, password } = data
  try {
    // Use our Client to create a new document in Sanity with an object  
    const user = await readClient.fetch(
      `*[_type == "user" && email == '${email}'][0]`,
    )
    //console.log('user', user)
    if (user) {
      //console.log(password, user.password)
      const passwordIsValid = bcrypt.compareSync(
        password,
        user.password
      );
       
      if (passwordIsValid) {
        //console.log("userrrrrrrrrr",user)
       const  {_id,username,firstname,lastname,email}=user
        return Response.json({ msg: `Succès de connexion`, status: 200, user:{_id,username,firstname,lastname,email},success:true })

      } else {
        return Response.json({ msg: `Votre mot de passe est incorrecte`, status: 401 ,success:false})
      }
    } else {
      return Response.json({ msg: `Votre adresse email n'a pas été trouvé`, status: 404, success:false})

    }
  } catch (err) {
    console.error(err)
    return Response.json({ msg: `Erreur au niveau du serveur de données`, err, status: 500 ,success:false})
  }

}