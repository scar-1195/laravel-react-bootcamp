import { ChildrenComponent } from './ChildrenComponent';

export const FatherComponent = () => {
  return (
    <>
      <h1>FatherComponent</h1>
      <ChildrenComponent btnText='prop-validate'/>
    </>
  );
};
