import React, { useRef } from 'react';
import styles from './Input.module.scss';
import SearchImg from './search.svg';
function Input() {
  const inputRef = useRef(null);

  const handleSubmit = e => {
    console.log(e.value);
  };

  return (
    <div>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}>
        <div className={styles.inputContent}>
          <input className={styles.input} ref={inputRef} placeholder="Search " />
          <button onClick={handleSubmit}>
            <img src={SearchImg} alt="search" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
