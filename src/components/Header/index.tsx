import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtMoney" />
        <button onClick={onOpenNewTransactionModal} type="button">
          {" "}
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
