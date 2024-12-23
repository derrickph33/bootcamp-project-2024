import React from "react";
import styles from "./comment.module.css";

type CommentProps = {
  comment: {
    id: string;
    user: string;
    comment: string;
    time: Date;
  };
};

function parseCommentTime(time: Date | string | undefined): string {
  if (!time) {
    return "Unknown time"; 
  }

  const date = typeof time === "string" ? new Date(time) : time;

  if (isNaN(date.getTime())) {
    return "Invalid time"; 
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}


function Comment({ comment }: CommentProps) {
  console.log('Comment component received:', comment);

  return (
    <div className={styles.commentContainer}>
      <h4 className={styles.commentUser}>{comment.user}</h4>
      <p className={styles.commentText}>{comment.comment}</p>
      <span className={styles.commentTime}>{parseCommentTime(comment.time)}</span> {/* Added time */}
    </div>
  );
}

export default Comment;