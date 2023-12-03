import React from "react";
import {useParams} from "react-router-dom";


export const CreateCoursePage: React.FC = () => {
    const {courseId} = useParams();
    return (
        <div>
            {courseId}
        </div>
    )
}