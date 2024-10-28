


import SuccessMessage from "@/components/utils/Result/sucessMessage";
import { Button } from "antd";
export default function SuccessInscription() {
    return <>
        <SuccessMessage title={<h1 className="font-bold">Succès de l&apos; inscription</h1>}
            message="Félicitations, vous venez de vous inscrire avec succès! " action={<Button block type="primary" href="/account/login">
                Allez vous connecter !
            </Button>} />

    </>
}