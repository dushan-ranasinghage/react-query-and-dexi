import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux'

import localforageStore from '../cache/localforageDb';
import store from '../redux/store'
import { getComments } from '../redux/actions/comments'
import { getCommentsSelector, getCommentsStatusSelector } from "../redux/selectors/comments";
import { IComment } from './Home';

interface ILocalforageProps {
    comments: any
    status: string
}

const mapState = (state: any) => ({
    comments: getCommentsSelector(state),
    status: getCommentsStatusSelector(state)
})

const connector = connect(mapState)

const Localforage: React.FunctionComponent<ILocalforageProps> = ({ comments, status }) => {

    useEffect(() => {
        store.dispatch(getComments())
    }, [])

    console.log("comments", comments)

    if(status === 'pending') return <span>Loading...</span>

    return (
        <div>
            <h2>Localforage</h2>
            {comments.map((comment: IComment, idx: number) => {
                return (
                    <div key={idx}>
                        <h3>{comment.name}</h3>
                        <p>{comment.email}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default connector(Localforage);
