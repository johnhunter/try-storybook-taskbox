import React from 'react';

export default function Task(props) {
  const {
    task: { id, title, state },
    onArchiveTask,
    onPinTask
  } = props;
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
