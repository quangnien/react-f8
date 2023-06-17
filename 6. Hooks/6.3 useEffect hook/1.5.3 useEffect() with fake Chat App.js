// index.js
/* 
function emitComment(id) {
    setInterval(() => {
      window.dispatchEvent(
        new CustomEvent(`lesson-${id}`, {
          detail: `Đây là nội dung của lesson ${id}`
        })
      );
    }, 2000);
  }
  
  emitComment(1);
  emitComment(2);
  emitComment(3);
*/

import { React, useState, useEffect } from "react";

const lessons = [
  {
    id: 1,
    name: "useState"
  },
  {
    id: 2,
    name: "useEffect"
  },
  {
    id: 3,
    name: "useLayoutEffect"
  }
];

function Content() {
  const [lessonId, setLessonId] = useState(1);

  const subcribeChannel = ({ detail }) => {
    console.log(detail);
  };

  useEffect(() => {
    window.addEventListener(`lesson-${lessonId}`, subcribeChannel);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, subcribeChannel);
    };
  }, [lessonId]);
  return (
    <ul>
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          style={{
            cursor: "default",
            fontSize: "20px",
            color: lessonId === lesson.id ? "red" : "black"
          }}
          onClick={() => {
            setLessonId((prev) => lesson.id);
          }}
        >
          {lesson.name}
        </li>
      ))}
    </ul>
  );
}

export default Content;
