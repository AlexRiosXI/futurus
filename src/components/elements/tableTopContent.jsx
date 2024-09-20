import { Button } from "@nextui-org/react";
import LoadingIndicator from "./loadingIndicator";

const TableTopContent = ({ title, button, buttonOnClick, loading = false }) => {
  return (
    <div className="flex justify-between items-center">
      <LoadingIndicator loading={loading} title={title} />
      {button && <Button
      color="primary"
      onClick={buttonOnClick}>{button}</Button>}
    </div>
  );
};

export default TableTopContent;
