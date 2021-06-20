import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as S from '../Global.styled.js';

export default function TodoItem({ item, deleteItem, onEditClick }) {
  return (
    <S.TodoView>
      <S.Text medium textAlign="right">
        {item.text}
      </S.Text>
      <S.IconsWrap>
        <MaterialIcons
          name="delete"
          size={35}
          color="red"
          onPress={() => deleteItem(item.id)}
        />
        <Feather
          name="edit"
          size={30}
          color="green"
          onPress={() => onEditClick(item)}
        />
      </S.IconsWrap>
    </S.TodoView>
  );
}
