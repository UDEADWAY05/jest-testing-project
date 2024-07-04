import { FC } from "react";

type Props = {
  onClick: () => void
}
export const AddButton: FC<Props> = ({ onClick }) => {
  return ( 
    <button onClick={onClick}>
      Добавить
    </button>
  );
}