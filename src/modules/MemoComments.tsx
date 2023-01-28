import * as React from 'react';

interface IMemoCommentsProps {
}

const MemoComments: React.FunctionComponent<IMemoCommentsProps> = (props) => {
    return (
        <div>
            <h2>Memo Comments</h2>
            {/* {data.map((comment: IComment, idx: number) => {
                return (
                    <div key={idx}>
                        <h3>{comment.name}</h3>
                        <p>{comment.email}</p>
                    </div>
                );
            })} */}
        </div>
    );
};

export default MemoComments;
