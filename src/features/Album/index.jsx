import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/4/1/f/7/41f7dc0d5cc3d40348b77c74b44e48ed.jpg",
      name: "Vui vẻ cuối tuần",
    },
    {
      id: 2,
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/4/e/9/0/4e900a56a5dbf90e1f1cab539f68992f.jpg",
      name: "Lắc lư cho hết buồn",
    },
    {
      id: 3,
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/1/1/c/4/11c479aa39cbe2ebf09c62e962945aa0.jpg",
      name: "Hẹn hò cuối tuần",
    },
  ];
  return (
    <div>
      <h2>Can you like?</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
