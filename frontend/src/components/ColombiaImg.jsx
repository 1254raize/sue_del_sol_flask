import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'mui-image'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
  

function ColombiaImgList() {

    return (
        <ImageList
          sx={{ width: "auto", height: 305 }}
          variant="quilted"
          cols={3}
          rowHeight={150}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <Image
                {...srcset(item.img, 150, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                // shift="left"
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
    
}

export default ColombiaImgList;

const itemData = [
    {
      img: '../../images/caficultor.jpg',
      title: 'Caficultor',
      rows: 1,
      cols: 2,
    },
    {
    img: '../../images/cafe.webp',
    title: 'Cafe',
    },
    {
      img: '../../images/panela.jpg',
      title: 'Panela',
    },
    {
    img: '../../images/caña de azucar.jpg',
    title: 'Caña de azucar',
    rows: 1,
    cols: 2,
    },
  ];