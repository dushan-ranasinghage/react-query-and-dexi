import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import React, { useState, useEffect } from "react";

import { IComment } from "../modules/Home";

interface IWithoutReactQueryProps {
    comments: IComment[]
}

const WithoutReactQuery: React.FunctionComponent<IWithoutReactQueryProps> = ({ comments }) => {

    if (comments.length === 0) return <span>Loading...</span>;

    return (
        <div>
            {comments.length > 0 &&
                comments.map((comment: IComment, idx: number) => {
                    return (
                        <div key={idx}>
                            <h3>{comment.name}</h3>
                            <p>{comment.email}</p>
                        </div>
                    );
                })}
        </div>
    );
}

export default WithoutReactQuery