import { CardAbility } from "./styles";

type Props = {
  Icon: string;
  Title: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AbilityItem = ({ Icon, Title }: Props) => {
  return (
    <CardAbility>
        <Icon/>
        {Title}
    </CardAbility>
  );
}

export default AbilityItem;