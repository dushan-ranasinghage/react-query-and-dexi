import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import React, { useState, useEffect } from "react";

import { IComment } from "../modules/Home";

const ReactQuery: React.FunctionComponent<any> = () => {
    const { isLoading, error, data } = useQuery("repoData", () =>
        fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
            res.json()
        )
    );

    if (isLoading) return <span>Loading...</span>;

    if (error) return <span>{`An error has occurred:`}</span>;

    return (
        <div>
            {data.map((comment: IComment, idx: number) => {
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

export default ReactQuery