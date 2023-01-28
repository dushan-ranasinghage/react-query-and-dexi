import * as React from 'react';
import { useLiveQuery } from "dexie-react-hooks";
import { db } from '../cache/db';
import { IPhoto } from '../cache/models/Photo';

interface IHooksGalleryProps {
}

const HooksGallery: React.FunctionComponent<IHooksGalleryProps> = (props) => {
    const photos = useLiveQuery(
        () => db.photos.toArray()
    );

    if (photos !== undefined) {
        return (
            <div>
                <h2>Gallery</h2>
                {photos.map((photo: IPhoto, idx: number) => {
                    return (
                        <div key={idx}>
                            <img src={photo.url} alt={photo.title} height={100} width={100} />
                            <h3>{photo.title}</h3>
                            <p>{photo.url}</p>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return <span>Loading...</span>
    }
};

export default HooksGallery;
