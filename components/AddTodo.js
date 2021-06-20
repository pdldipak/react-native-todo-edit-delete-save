import React, { useState } from 'react';
import * as S from '../Global.styled';

const AddTodo = ({ submitHandler}) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const changeHandler = (value) => {
    setText(value);
  };

  const onSubmit = () => {
    if (text.length < 5) {
      setError('🙏🏻Please enter at least 4 characters');
      setTimeout(() => {
        setText('');
        setError(null);
      }, 2000);
    } else {
      submitHandler(text);
      setText('');
    }
  };

  return (
    <S.View>
      <S.TextInput
        placeholder="new todo..."
        value={text}
        onChangeText={changeHandler}
      />
      <S.Button onPress={onSubmit}>
        <S.Text bold color="white">
          Add toDo
        </S.Text>
      </S.Button>
      {<S.Text color="red">{error}</S.Text>}
    </S.View>
  );
};

export default AddTodo;
