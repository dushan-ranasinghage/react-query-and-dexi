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

  return <div>Gallery</div>;
};

export default connector(Gallery);
