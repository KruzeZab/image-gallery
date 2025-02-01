const ImageList = () => {
  return (
    <div className="max-w-6xl mx-auto layout-grid mt-8">
      {Array.from(new Array(5)).map((_, index) => (
        <div
          key={index}
          className="card group tranition-linear-slow overflow-hidden"
        >
          <div className="h-[200px] overflow-hidden">
            <img
              src="https://picsum.photos/300/200"
              alt="alternative"
              className="card-image group-hover:scale-105 transition-linear-slow"
            />
          </div>
          <div className="p-2">
            <h4>William Jackson</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
