import React from "react";
import { Card, CardHeader, CardBody, Typography} from "@material-tailwind/react";

const Cardss = (props) => {
    return(
        <Card className="mt-6 w-96 hover:cursor-pointer transform transition-transform hover:scale-105">
            <CardHeader color="blue-gray" className="h-56">
                <img
                    src={props.img}
                    alt="card-image"
                    className="w-full h-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    {props.title}
                </Typography>
                <Typography>
                    {props.desc}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default Cardss;