import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 40px;
`;

export const List = styled.View`
  flex: 1;
  margin-top: 20px;
`;
export const View = styled.View``;

export const Text = styled.Text`
  text-align: ${(props) => props.textAlign ?? 'center'};
  color: ${(props) => props.color ?? 'black'};
  ${({ title, Medium }) => {
    switch (true) {
      case title:
        return `font-size: 24px`;
      case Medium:
        return `font-size:20px`;
      default:
        return `font-size:16px`;
    }
  }}
  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight:700`;
      case heavy:
        return `font-weight:600`;
      default:
        return `font-weight:500`;
    }
  }};
`;
//Header
export const Header = styled.View`
  height: 80px;
  padding-top: 38px;
  width: 100%;
  background-color: coral;
`;
//todo
export const TodoView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  padding: 16px;
  margin: 10px 0;
  border-color: #bbb;
  border-width: 1px;
  border-style: dashed;
  border-radius: 10px;
`;
//text input
export const TextInput = styled.TextInput`
  height: auto;
  max-width: 70%;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Button = styled.TouchableOpacity`
  background-color: #00cc99;
  padding: 20px;
  border-radius: 10px;
`;

export const IconsWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
