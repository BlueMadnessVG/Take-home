import { FlipText } from "../../../components/Text";
import { Route } from "../../../models";
import style from "./Navigation.module.css";

interface NavigationProps {
  items: Route[];
}

export const Navigation = ({ items }: NavigationProps) => {
  return (
    <div className={style.nav}>
      {items.map(({ name, route }) => (
        <a key={name} className={style.nav__item}>
          <FlipText active={false}> {name} </FlipText>
        </a>
      ))}
    </div>
  );
};
