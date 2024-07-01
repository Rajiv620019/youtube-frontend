const VideoCards = () => {
  return (
    <div>
      <img src="img1.jpeg" alt="" />
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <img className="rounded-full w-20 h-20" src="img1.jpeg" alt="" />
        </div>
        <div className="col-span-10">Video Title goes here</div>

        <div className="col-span11 pl-5">Rajiv S</div>
      </div>
    </div>
  );
};
export default VideoCards;
