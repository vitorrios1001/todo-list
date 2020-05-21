import React from 'react'

import './style.scss'

const TodoItem = ({
  id,
  checked,
  description,
  toggleCheck,
  toggleRemove,
}) => (
  <div className="todo-item">
    <input
      type='checkbox'
      value={checked}
      checked={checked}
      onChange={e => toggleCheck(id, e.target.checked)}
    />
    <div className="description">
      <span>
        {description}
      </span>
      <button onClick={() => toggleRemove(id)} >
        X
      </button>
    </div>
  </div>
)

export default TodoItem
