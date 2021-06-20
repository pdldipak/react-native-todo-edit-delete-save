import React from 'react';
import * as S from '../Global.styled';

export default function EditTodo({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <S.Content>
      <S.List>
        <S.TextInput
          placeholder="new todo..."
          value={currentTodo.text}
          onChangeText={onEditInputChange}
        />

        <S.IconsWrap>
          <S.Button onPress={onEditFormSubmit}>
            <S.Text large bold color="white">
              Update
            </S.Text>
          </S.Button>
          <S.Button onPress={() => setIsEditing(false)}>
            <S.Text large bold color="red">
              Cancel
            </S.Text>
          </S.Button>
        </S.IconsWrap>
      </S.List>
    </S.Content>
  );
}
