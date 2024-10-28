import { writeClient } from "@/lib/sanity/sanity"
const bcrypt = require("bcryptjs");
import { readClient } from "@/lib/sanity/sanity";
export async function POST(req: Request,) {
    const data = await req.json();

    const { username, email, firstname, lastname, } = data

    const password = bcrypt.hashSync(data.password, 8);

    try {

        const user = await readClient.fetch(
            `*[_type == "user" && email == '${email}']`,
        )

        if (!user[0]) {
            const res = await writeClient.create({
                _type: 'user',
                username, email, firstname, lastname, password
            })

            return Response.json({ msg: 'Vous venez de vous inscrire avec succès', status: 200 })
        } else {
            return Response.json({ msg: `Cet email existe déjà`, status: 400 })
        }

    } catch (err) {
        console.error("error route register", err)
        return Response.json({ msg: `Echec de l'inscription`, err, status: 500 })
    }
}
