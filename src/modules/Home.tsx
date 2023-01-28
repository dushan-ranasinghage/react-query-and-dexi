import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import React, { useState, useEffect } from "react";

import ReactQuery from "../components/ReactQuery";
import WithoutReactQuery from "../components/WithoutReactQuery";

const queryClient = new QueryClient();

export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((json) => setComments(json));
    }, []);

    return (
        <div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "50% 50%"
                }}
            >
                <div>
                    <h2>React Query</h2>
                    <QueryClientProvider client={queryClient}>
                        <ReactQuery />
                    </QueryClientProvider>
                </div>
                <div>
                    <h2>Without React Query</h2>
                    <WithoutReactQuery comments={comments} />
                </div>
            </div>
        </div>
    );
};

export default Home;
