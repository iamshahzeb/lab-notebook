export const Loader = ({ status }:{status?: boolean}) => {
  if (status ?? true) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-8 border-primary border-dashed"></div>
      </div>
    );
  }
  return <></>;
};
