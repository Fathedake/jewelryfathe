


import { Rate } from "antd";
import { Button} from "antd";
import { StarFilled} from '@ant-design/icons';

export default function ReviewComponent({ average_review = 0 }: { average_review: number }) {

    const maxRating = 5;
    function getStar(rate: number) {
        if (rate +1 <= average_review) {
            return <StarFilled  style={{fontSize:'30px'}} key={rate} className="star-filled" />;
        }
        return <StarFilled key={rate} className="star-outlined" style={{fontSize:'20px'}} />;
    }
    return <>
        <div className="flex flex-row flex-wrap cursor-default">
        <div className="inline-flex flex-row items-center ">
            <Rate count={5} defaultValue={average_review} allowHalf disabled />
        </div>
        <div>
          {average_review==0 || average_review==undefined ? <Button type="link" className="text-black-1">
             Pas encore d'avis
            </Button> :<Button type="link" className="text-black-1">
             Lire les avis
            </Button> }
        </div>
        </div>
    </>
}