import React, {useRef} from 'react';

const NotesItem = ({id, text, deleteNote}) => {
  const ref = useRef();
  console.log(ref);
  const onClickHandler = () => {
    const {id} = ref.current.dataset;
    deleteNote(id);
  }

  return (
    <div className="col-4">
      <div ref={ref} className="card mb-2"  data-id={id}>
        <div className="card-body">
          <p className="card-text">{text}</p>
          <button className="btn btn-danger" onClick={onClickHandler}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;