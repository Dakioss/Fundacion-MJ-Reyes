import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/pareja1.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-image: center-right;
  width: 100%;
  height: 100%;

`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 218, 145, 0.7);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[3]};
`;

export const AuthButton = styled(Button).attrs({
  color: "#FFB52E"
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 35px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 30%;
  position: absolute;
  top: 50px;
  padding: ${(props) => props.theme.space[2]};
`;