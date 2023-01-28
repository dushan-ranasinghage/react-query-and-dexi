import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux'

import store from '../redux/store'
import { getPhotos } from '../redux/actions/photos'
import { getPhotosSelector, getPhotosStatusSelector } from "../redux/selectors/photos";
import { IPhoto } from '../cache/models/Photo';

interface IGalleryProps {
  photos: IPhoto[]
  status: string
}

const mapState = (state: any) => ({
  photos: getPhotosSelector(state),
  status: getPhotosStatusSelector(state)
})

const connector = connect(mapState)

const Gallery: React.FunctionComponent<IGalleryProps> = ({ photos, status }) => {
  useEffect(() => {
    store.dispatch(getPhotos())
  }, [])

  console.log("Photos", photos)

  if (status === 'pending') return <span>Loading...</span>;

  return (
    <div>
      <h2>Gallery</h2>
      {photos.map((photo: IPhoto, idx: number) => {
        return (
          <div key={idx}>
            <h3>{photo.title}</h3>
            <p>{photo.url}</p>
          </div>
        );
      })}
    </div>
  );
};

export default connector(Gallery);
