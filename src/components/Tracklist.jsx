
// eslint-disable-next-line react/prop-types
const Tracklist = ({ order, title, duration }) => {

  return (
    <div className="flex justify-between my-5">
      <div className="flex gap-3">
        <h5 className="h5 font-semibold">0{order}.</h5>
        <h5 className="h5 font-semibold">{title}</h5>
      </div>
      <div>
        <h5 className="h5 font-semibold">{duration}</h5>
      </div>
    </div>
  );
}

export default Tracklist;